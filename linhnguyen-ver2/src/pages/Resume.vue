<template>
  <Layout :resume_page="true">
    <pdf class="resume_section" src="./Nguyen_Resume.pdf"></pdf>
  </Layout>
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
