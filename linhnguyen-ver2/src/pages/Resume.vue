<template>
  <pdf src="./Nguyen_Resume.pdf"></pdf>
</template>

<script>
import VerticalHomeBar from "../components/VerticalHomeBar";
import pdf from "vue-pdf";

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
