import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _45827f74 = () => import('../pages/servers.vue' /* webpackChunkName: "pages/servers" */).then(m => m.default || m)
const _40f2c212 = () => import('../pages/servers/index.vue' /* webpackChunkName: "pages/servers/index" */).then(m => m.default || m)
const _a6dba2f4 = () => import('../pages/servers/add.vue' /* webpackChunkName: "pages/servers/add" */).then(m => m.default || m)
const _d438bfd4 = () => import('../pages/routes.vue' /* webpackChunkName: "pages/routes" */).then(m => m.default || m)
const _26613530 = () => import('../pages/routes/web-forwards.vue' /* webpackChunkName: "pages/routes/web-forwards" */).then(m => m.default || m)
const _e1bb1e04 = () => import('../pages/api.vue' /* webpackChunkName: "pages/api" */).then(m => m.default || m)
const _ac69206a = () => import('../pages/api/data.vue' /* webpackChunkName: "pages/api/data" */).then(m => m.default || m)
const _3b316788 = () => import('../pages/lxd.vue' /* webpackChunkName: "pages/lxd" */).then(m => m.default || m)
const _5896d775 = () => import('../pages/lxd/containers.vue' /* webpackChunkName: "pages/lxd/containers" */).then(m => m.default || m)
const _1cc8d8e2 = () => import('../pages/server.vue' /* webpackChunkName: "pages/server" */).then(m => m.default || m)
const _7ffae856 = () => import('../pages/server/top.vue' /* webpackChunkName: "pages/server/top" */).then(m => m.default || m)
const _4038d394 = () => import('../pages/server/network-connections.vue' /* webpackChunkName: "pages/server/network-connections" */).then(m => m.default || m)
const _424dc85a = () => import('../pages/server/logins.vue' /* webpackChunkName: "pages/server/logins" */).then(m => m.default || m)
const _7e175bf2 = () => import('../pages/server/cpu-information.vue' /* webpackChunkName: "pages/server/cpu-information" */).then(m => m.default || m)
const _1c80fe76 = () => import('../pages/server/disks.vue' /* webpackChunkName: "pages/server/disks" */).then(m => m.default || m)
const _1fbf43b1 = () => import('../pages/server/memory.vue' /* webpackChunkName: "pages/server/memory" */).then(m => m.default || m)
const _5c56c36c = () => import('../pages/server/process-tree.vue' /* webpackChunkName: "pages/server/process-tree" */).then(m => m.default || m)
const _38c793ae = () => import('../pages/auth/sign-out.vue' /* webpackChunkName: "pages/auth/sign-out" */).then(m => m.default || m)
const _7802e0b6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/servers",
			component: _45827f74,
			children: [
				{
					path: "",
					component: _40f2c212,
					name: "servers"
				},
				{
					path: "add",
					component: _a6dba2f4,
					name: "servers-add"
				}
			]
		},
		{
			path: "/routes",
			component: _d438bfd4,
			name: "routes",
			children: [
				{
					path: "web-forwards",
					component: _26613530,
					name: "routes-web-forwards"
				}
			]
		},
		{
			path: "/api",
			component: _e1bb1e04,
			name: "api",
			children: [
				{
					path: "data",
					component: _ac69206a,
					name: "api-data"
				}
			]
		},
		{
			path: "/lxd",
			component: _3b316788,
			name: "lxd",
			children: [
				{
					path: "containers",
					component: _5896d775,
					name: "lxd-containers"
				}
			]
		},
		{
			path: "/server",
			component: _1cc8d8e2,
			name: "server",
			children: [
				{
					path: "top",
					component: _7ffae856,
					name: "server-top"
				},
				{
					path: "network-connections",
					component: _4038d394,
					name: "server-network-connections"
				},
				{
					path: "logins",
					component: _424dc85a,
					name: "server-logins"
				},
				{
					path: "cpu-information",
					component: _7e175bf2,
					name: "server-cpu-information"
				},
				{
					path: "disks",
					component: _1c80fe76,
					name: "server-disks"
				},
				{
					path: "memory",
					component: _1fbf43b1,
					name: "server-memory"
				},
				{
					path: "process-tree",
					component: _5c56c36c,
					name: "server-process-tree"
				}
			]
		},
		{
			path: "/auth/sign-out",
			component: _38c793ae,
			name: "auth-sign-out"
		},
		{
			path: "/",
			component: _7802e0b6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}