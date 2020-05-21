<template>
  <Layout>
   
    <div id="home" class="main-wrapper">
      <Introductions />
      <AboutMe />
      <MyProjects />
    </div>
  </Layout>
</template>

<script>
import AboutMe from "../components/AboutMe";
import ContactsIcon from "../components/ContactsIcon";
import MyProjects from "../components/MyProjects";
import Introductions from "../components/Introductions";
export default {
  metaInfo: {
    title: "Welcome",
  },
  components: {
    AboutMe,
    ContactsIcon,
    MyProjects,
    Introductions,
  },
};
</script>
