<template>
  <div class="about-wrapper">
    <VerticalHomeBar />
    <div class="w3-container w3-theme-d3 w3-mobile about-section">
      <div class="w3-container w3-mobile about-main">
        <h2>About me</h2>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe";
import VerticalHomeBar from "../components/VerticalHomeBar";
import VerticalRightBar from "../components/VerticalRightBar";
export default {
  metaInfo: {
    title: "About Me",
  },
  components: {
    AboutMe,
    VerticalHomeBar,
    VerticalRightBar,
  },
};
</script>
