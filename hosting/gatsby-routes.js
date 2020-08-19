const { resolve } = require('path')

module.exports = [
  /* ---- App ---- */
  { path: '/', component: resolve(`src/ui/pages/Home.tsx`) },
  { path: '/complete', component: resolve(`src/ui/pages/Complete.tsx`) },


  /* ---- 404 ---- */
  { matchPath: '*', path: '/404', component: resolve(`src/ui/pages/404.tsx`) }
]
