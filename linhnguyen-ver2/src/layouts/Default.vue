<template>
  <div class="w3-mobile layout">
    <div v-if="resume_page">
      <NavBarResume />
    </div>
    <div v-else>
      <NavBar />
    </div>
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
import NavBarResume from "../components/NavBarResume";
export default {
  components: {
    NavBar,
    Footer,
    NavBarResume,
  },
  props: ["resume_page"],
};
</script>
