// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "../styles/w3.css";
import "../styles/custom.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter, faLinkedin, faDribbble, faPython, faReact, faJsSquare, faVuejs, faHtml5, faCss3, faJava} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(
  faGithub,
  faTwitter,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
  faHome,
  faLinkedin,
  faDribbble,
  faPython,
  faReact,
  faJsSquare,
  faVuejs,
  faHtml5,
  faCss3,
  faJava
);

export default function(Vue) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.component('font-awesome', FontAwesomeIcon)
}
