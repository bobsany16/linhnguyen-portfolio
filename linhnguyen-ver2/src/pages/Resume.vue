<template>

    <!--<VerticalHomeBar />-->
    <!--<div class="w3-container w3-theme-d3 w3-mobile about-section">
      <div class="w3-container w3-mobile about-main">
        <h2>My Orchids</h2>
      </div>
    </div>-->
    <pdf src="./NGUYEN_RESUME.pdf" style="height: 100%"></pdf>
    
 
    
</template>

<script>
import VerticalHomeBar from "../components/VerticalHomeBar";
import pdf from 'vue-pdf';

export default {
  metaInfo: {
    title: "My Resumé",
  },
  components: {
      VerticalHomeBar,
      pdf,
      
  },
};
</script>
