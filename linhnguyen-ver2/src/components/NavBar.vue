<template>
  <header class="header w3-theme-d3">
    <strong>
      <g-link to="/">Linh Nguyen</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link w3-hover-text-theme" to="/">Home</g-link>
      <g-link class="nav__link w3-hover-text-theme" to="/About">About</g-link>
      <g-link class="nav__link w3-hover-text-theme" to="/Projects">Projects</g-link>
      <g-link class="nav__link w3-hover-text-theme" to="/Resume">Contact</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
