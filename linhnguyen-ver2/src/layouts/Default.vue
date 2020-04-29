<template>
  <div class="w3-mobile layout">
    <NavBar />
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
