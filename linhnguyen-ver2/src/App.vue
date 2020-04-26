<template>
  <Layout>
    <vue-page-transition name="fade-in-right">
      <router-view />
    </vue-page-transition>
  </Layout>
</template>

<static-query>  
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Vue from "vue";
import VuePageTransition from "vue-page-transition";
Vue.use(VuePageTransition);
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "Linh Nguyen",
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
};
</script>
