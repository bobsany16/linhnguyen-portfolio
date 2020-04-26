<template>
  <Layout>
    <div class="main-wrapper">
      <VerticalLeftBar />
      <div class="w3-container w3-mobile w3-theme-d3 home-main">
        <h3>Hello.</h3>
        <h1>I'm Linh</h1>

        <div class="subtitle w3-mobile">
          <p>
            Software Developer, <b>LGBTQ+</b> Advocate, and Orchid Enthusiast
          </p>
        </div>
        
      </div>
      <HorizontalBar />
      <VerticalRightBar />
    </div>
  </Layout>
</template>

<script>
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import VerticalRightBar from "../components/VerticalRightBar";
import VerticalLeftBar from "../components/VerticalLeftBar";
import HorizontalBar from "../components/HorizontalBar";
export default {
  metaInfo: {
    title: "Linh Nguyen",
  },
  components: {
    AboutMe,
    Footer,
    VerticalRightBar,
    VerticalLeftBar,
    HorizontalBar,
  },
};
</script>
