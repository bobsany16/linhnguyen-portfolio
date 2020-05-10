<template>
  <div class="about-wrapper">
    <div class="w3-container w3-theme-d3 w3-mobile about-section">
      <div class="w3-container w3-half w3-mobile about-main">
        <h2>About me</h2>
        <p>
          I am an aspiring software developer with experience in mobile & web
          applications. I think design and technology are like peanut butter and
          jelly. With that said, I am on a journey to gain more skills in both
          of these fields through a dream role of
          <b class="w3-theme2">frontend developer</b>.<br /><br />
          I am <b class="w3-theme2">motivated</b>,
          <b class="w3-theme2">determined</b>, and
          <b class="w3-theme2">ambitious</b>. Success to me is when
          <em
            ><b class="w3-theme2"
              >I go to bed knowing I tried my absolute best for the day</b
            ></em
          >.
        </p>
      </div>
      <div class="w3-half w3-image img-section">
        <img class="w3-image w3-half w3-round-xlarge image" src="/Enlight496.JPG" />
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
