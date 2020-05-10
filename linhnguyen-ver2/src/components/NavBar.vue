<template>
  <header class="header">
    <div>
      <g-link class="nav__link2" to="/">LINH NGUYEN</g-link>
    </div>

    <nav class="nav">
      <g-link class="nav__link" to="/">HOME</g-link>
      <a class="nav__link" href="#About" v-smooth-scroll="{ duration: 800}">ABOUT</a>
      <a class="nav__link" href="#Projects" v-smooth-scroll="{ duration: 800}">PROJECTS</a>
      <g-link class="nav__link" to="/Resume">RESUME</g-link>
    </nav>
  </header>
</template>

<script>
import Vue from "vue";
import vueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(vueSmoothScroll);

export default {
  name: "NavBar",
};
</script>
