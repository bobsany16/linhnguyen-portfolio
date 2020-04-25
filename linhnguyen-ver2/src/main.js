// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '../w3.css'
import '../custom.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  /*head.link.push({
    rel: 'stylesheet',
    href: 'https://www.w3schools.com/w3css/4/w3.css'
  })*/
}