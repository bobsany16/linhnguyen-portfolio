<template>
  <pdf class="resume_section" src="./Nguyen_Resume.pdf"></pdf>
</template>

<script>

import pdf from "vue-pdf";

export default {
  metaInfo: {
    title: "My Resumé",
  },
  components: {
    pdf,
  },
};
</script>
