#!/bin/bash

# Application Name
appname="LXD Control Panel"
webroot="/var/www/html"

# Setup & Install Dependencys
prepare_system() {
    #
    # Update System
    sudo apt-get update
    sudo apt-get -yq upgrade
    #
    # Install basic system packages
    sudo apt-get -yq install curl wget unzip git
    #
    # remove apache2
    sudo apt-get -yq --purge remove apache2
}

# Install PHP
install_php() {
    sudo apt-get -yq install php-cli
    sudo apt-get -yq install php-fpm
    sudo apt-get -yq install php-mbstring
    sudo apt-get -yq install php-curl
    sudo apt-get -yq install php-json
    sudo apt-get -yq install php-xml
    sudo apt-get -yq install php-mysql
    sudo apt-get -yq install php-sqlite3
    sudo apt-get -yq install php-zip
}

# Genaral webroot setup - initial nginx part, specific configuration to be added
install_web() {
    #
    # Install Nginx
    sudo apt-get -yq install nginx
    #
    # setup initial nginx config, will be overwritten by nginx task
    echo -e "
server {
    listen 88 default_server;
    listen [::]:88 default_server;
    root /var/www/html/public;
    #
    index index.php index.html;
    #
    server_name _;
    #
    location / {
        try_files \$uri \$uri/ /index.php?\$args;
    }
    #
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:$(find /run/php/php*-fpm.sock);
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        fastcgi_param SCRIPT_NAME     \$fastcgi_script_name;
    }
    #
    location ~ /\.api {
      deny all;
      return 403;
    }
    #
    location ~ /\. {
      deny all;
      return 403;
    }
    #
    location ~ /\.ht {
        deny all;
    }
    #
    location ~ /.*\.db {
        deny all;
    }
}
" > /etc/nginx/sites-enabled/default
    #
    nginx -s reload
}

# Install Node.js
install_nodejs() {
    #
    # Install nvm, add nvm source line to roots bashrc
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
    #
    export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
    #
    # install node 9
    nvm install 9
    #
    # install npm
    sudo apt -yq install npm
    # update  npm
    npm install npm@latest -g
}

# Install Application
install_project() {
    #
    cd $webroot

    #
    # add tasks cron job
    crontab -l | grep -q "do cd $webroot && /usr/bin/php task.php"  && echo 'Tasks cron task already exists' || crontab -l | { cat; echo -e "@reboot while sleep 1; do cd $webroot && /usr/bin/php task.php ; done >/dev/null 2>&1"; } | crontab -

    # Compile UI (Not currently required)
    # cd .nuxt
    # npm install --unsafe-perm
    # npm run generate

    # Check vendor
    if [ ! -d "$webroot/vendor" ]; then
        composer install
    fi

    # Check required folders exist

    # tmp
    if [ ! -d "$webroot/tmp" ]; then
        mkdir -p $webroot/tmp
    fi

    # bash
    if [ ! -d "$webroot/.plinker/bash" ]; then
        mkdir -p $webroot/bash
    fi

    # dbbackup
    if [ ! -d "$webroot/.plinker/dbbackup" ]; then
        mkdir -p $webroot/dbbackup
    fi

    # iptables
    if [ ! -d "$webroot/.plinker/iptables" ]; then
        mkdir -p $webroot/iptables
    fi

    # logs
    if [ ! -d "$webroot/.plinker/logs" ]; then
        mkdir -p $webroot/logs
    fi
    
    # system
    if [ ! -d "$webroot/.plinker/system" ]; then
        mkdir -p $webroot/system
    fi
    
    # check default database.db exists
    if [ ! -f "$webroot/.plinker/database.db" ]; then
        cp -p $webroot/.api/files/database.db $webroot/.plinker/database.db
    fi
    
    # check config.ini exists
    if [ ! -f "$webroot/config.ini" ]; then
    
        JWTsecret=$(date +%s%N | sha256sum | base64 | head -c 32 ; echo)
        sleep .1
        AUTHsecret=$(date +%s%N | sha256sum | base64 | head -c 8 ; echo)
        
        echo -e "[globals]
        
; Database
db.dsn=\"sqlite:./.plinker/database.db\"
db.host=\"\"
db.name=\"\"
db.username=\"\"
db.password=\"\"
db.freeze=true
db.debug=false
db.session=false

; Auth Secret
AUTH.secret=\"$AUTHsecret\"

; JWT
JWT.secret=\"$JWTsecret\"

; CORS
CORS.enabled=true

; Framework
CACHE=true
DEBUG=0
AUTOLOAD=\".api/\"

; System Modules (effects UI menu)
[modules]
server=1
api=1
lxd=1
routes=1
tasks=1
" > $webroot/config.in
    fi
}

# Main
#
main() {
    setup_system
    #
    install_php
    #
    install_web
    #
    install_nodejs
    #
    install_project
}

# Check ubuntu
if [ "$(. /etc/os-release; echo $NAME)" = "Ubuntu" ]; then
  echo -e "\033[4;31m\
Automatic post install only works on Ubuntu!\033[0m\nRefer to manually installing, \
see: https://github.com/lcherone/Deval for details."
fi

# Check is root user
if [[ $EUID -ne 0 ]]; then
   echo "This project must be install with root user."
   sudo su
fi

main