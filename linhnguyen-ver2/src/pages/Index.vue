<template>
  <Layout>
    <div id="home" class="main-wrapper">
      <div class="w3-container w3-mobile home-main">
        <h3><em>HELLO.</em></h3>
        <h1><em>I'M LINH</em></h1>

        <div class="subtitle w3-mobile">
          <p>
            Software Developer, <b>LGBTQ+</b> Advocate, and Orchid Enthusiast
          </p>
        </div>
        <ContactsIcon />
      </div>
      <AboutMe />
      <MyProjects />
    </div>
  </Layout>
</template>

<script>
import AboutMe from "../components/AboutMe";
import ContactsIcon from "../components/ContactsIcon";
import MyProjects from "../components/MyProjects";
export default {
  metaInfo: {
    title: "Welcome",
  },
  components: {
    AboutMe,
    ContactsIcon,
    MyProjects,
  },
};
</script>
