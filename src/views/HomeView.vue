<template>
  <div class="home">
    <AboutMe />
    <SkillSection />
    <CarouselProjects />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/AboutMe.vue";
import SkillSection from "@/components/SkillSec.vue";
import CarouselProjects from "@/components/CarouselProjects.vue";

export default {
  name: "HomeView",
  components: {
    AboutMe,
    SkillSection,
    CarouselProjects,
  },
};
</script>

<style>
.home {
  width: 70%;
  margin: auto;
  max-width: 1440px;
}
</style>
