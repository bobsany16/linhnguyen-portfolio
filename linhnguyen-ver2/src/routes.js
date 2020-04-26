export default [
  {
    path: "/projects/",
    component: Projects,
    meta: { transition: "fade-in-right"},
  },
  {
    path: "/orchids/",
    component: () => import(/* webpackChunkName: "page--src--pages--orchids-vue" */ "/Users/linhanhnguyen/Documents/GitHub/identity.SN-LandingPage/linhnguyen-ver2/src/pages/Orchids.vue")
  },
  {
    path: "/about/",
    component: About,
    meta: { transition: "fade-in-left"},
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/linhanhnguyen/Documents/GitHub/identity.SN-LandingPage/linhnguyen-ver2/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: Index, 
    meta: { transition: "zoom"}

  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/linhanhnguyen/Documents/GitHub/identity.SN-LandingPage/linhnguyen-ver2/node_modules/gridsome/app/pages/404.vue")
  }
]

