<template>
  <nav class="contact-icons">
          <g-link
            class="w3-hover-text-theme2 w3-theme-d3 icon-nav"
            to="https://github.com/bobsany16"
          >
            <font-awesome :icon="['fab', 'github']" size="2x"
          /></g-link>
          <g-link
            class="w3-hover-text-theme2 w3-theme-d3 icon-nav"
            to="https://twitter.com/BobbyWin16"
          >
            <font-awesome :icon="['fab', 'twitter']" size="2x"
          /></g-link>
          <g-link
            class="w3-hover-text-theme2 w3-theme-d3 icon-nav"
            to="https://linkedin.com/in/linhnguyen16"
          >
            <font-awesome :icon="['fab', 'linkedin']" size="2x"
          /></g-link>
          <g-link
            class="w3-hover-text-theme2 w3-theme-d3 icon-nav"
            to="https://dribbble.com/gerardhp1998"
          >
            <font-awesome :icon="['fab', 'dribbble']" size="2x"
          /></g-link>
          
        </nav>
</template>

<script>
export default {
  name: "ContactsIcon",
};
</script>
