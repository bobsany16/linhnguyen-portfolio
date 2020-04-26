<template>
<div class="about-wrapper">
    <VerticalHomeBar />
    <div class="w3-container w3-theme-d3 w3-mobile about-section">
      <div class="w3-container w3-mobile about-main">
        <h2>My Orchids</h2>
      </div>
    </div>
  </div>
    
</template>

<script>
import VerticalHomeBar from "../components/VerticalHomeBar";

export default {
  metaInfo: {
    title: "My Orchids",
  },
  components: {
      VerticalHomeBar,
      
  },
};
</script>