<template>
  <header class="header">
    <div>
      <a class="nav__link2" href="#home" v-smooth-scroll="{ duration: 800 }"
        >LINH NGUYEN</a
      >
    </div>

    <nav class="nav">
      <a class="nav__link" href="#home" v-smooth-scroll="{ duration: 800 }"
        >HOME</a
      >
      <a class="nav__link" href="#About" v-smooth-scroll="{ duration: 800 }"
        >ABOUT</a
      >
      <a class="nav__link" href="#Projects" v-smooth-scroll="{ duration: 800 }"
        >PROJECTS</a
      >
      <g-link class="nav__link" to="/Resume">RESUME</g-link>
    </nav>
  </header>
</template>

<script>
import Vue from "vue";
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);

export default {
  name: "NavBar",
};
</script>
