<template>
  <Layout>
    <div class="w3-container w3-mobile w3-theme-d2 home-main">
      <h3>Hello.</h3>
      <h1>I'm Linh</h1>
      <p>Software Developer, LGBTQ+ Advocate, and Orchid Enthusiast</p>
    </div>
    <AboutMe />    
  </Layout>
</template>


<script>
import AboutMe from '../components/AboutMe';
export default {
  metaInfo: {
    title: "Linh Nguyen",
  },
  components: {
    AboutMe,
  }
};
</script>
