<template>
  <div id="About" class="about-wrapper">
    <!--<VerticalHomeBar />-->
    <div class="w3-container w3-mobile about-section">
      <div class="w3-container w3-half w3-mobile about-main">
        <h2><em>ABOUT ME</em></h2>
        <p>
          I am an aspiring software developer with experience in mobile & web
          applications. I think design and technology are like peanut butter and
          jelly. I am on a journey to gain more skills in both of these fields
          through a dream role of
          <b class="w3-theme2">frontend developer</b>.<br /><br />
          I am <b class="w3-theme2">motivated</b>,
          <b class="w3-theme2">determined</b>, and
          <b class="w3-theme2">ambitious</b>. Currently going strong on the
          #100DaysOfCode challenge <br /><br />Success to me is when
          <em
            ><b class="w3-theme2"
              >I go to bed knowing I tried my absolute best for the day</b
            ></em
          >.
          <br /><br />My Skills:
          
        </p>
        <div class="skills_icon">
          
          <font-awesome :icon="['fab', 'python']" size="3x" class="skills w3-hover-text-theme2" />
          <font-awesome :icon="['fab', 'js-square']" size="3x" class="skills w3-hover-text-theme2"/>
          <font-awesome :icon="['fab', 'react']" size="3x" class="skills w3-hover-text-theme2" />
          <font-awesome :icon="['fab', 'html5']" size="3x" class="skills w3-hover-text-theme2" />
          <font-awesome :icon="['fab', 'css3']" size="3x" class="skills w3-hover-text-theme2" />
          <font-awesome :icon="['fab', 'java']" size="3x" class="skills w3-hover-text-theme2" />
          <font-awesome :icon="['fab', 'vuejs']" size="3x" class="skills w3-hover-text-theme2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>
