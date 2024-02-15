/* eslint-disable */
<template>
  <div class="header">
    <div class="header_container">
      <div class="logo">Frontend Developer</div>
      <nav>
        <ul class="nav-menu">
          <li @click="navigateTo('aboutMe')">{{ $t("aboutMe") }}</li>
          <li @click="navigateTo('skills')">{{ $t("skills") }}</li>
          <li @click="navigateTo('projects')">{{ $t("projects") }}</li>
          <li @click="navigateTo('contacts')">{{ $t("contact") }}</li>
        </ul>

        <ul class="burger-menu">
          <li @click="navigateTo('aboutMe')">{{ $t("aboutMe") }}</li>
          <li @click="navigateTo('skills')">{{ $t("skills") }}</li>
          <li @click="navigateTo('projects')">{{ $t("projects") }}</li>
          <li @click="navigateTo('contacts')">{{ $t("contact") }}</li>
        </ul>
      </nav>
      <div class="nav_lang_container">
        <button @click="changeLocale('en')">
          <img class="lang-icon" :src="engLang" alt="eng-lang" />
        </button>
        <button @click="changeLocale('ru')">
          <img class="lang-icon" :src="rusLang" alt="rus-lang" />
        </button>
        <button @click="changeLocale('tr')">
          <img class="lang-icon" :src="turkLang" alt="turk-lang" />
        </button>
      </div>
    </div>
  </div>
  <div class="main-container">
    <AboutMe ref="aboutMe" />
    <SkillSection ref="skills" />
    <CarouselProjects ref="projects" />
  </div>
  <div class="footer">
    <MyContacts ref="contacts" />
  </div>
</template>

<script>
import engLang from "@/assets/eng2.png";
import rusLang from "@/assets/rus2.png";
import turkLang from "@/assets/turk2.png";

import AboutMe from "@/components/AboutMe.vue";
import SkillSection from "@/components/SkillSec.vue";
import CarouselProjects from "@/components/CarouselProjects.vue";
import MyContacts from "@/components/MyContacts.vue";

export default {
  data() {
    return {
      engLang: engLang,
      rusLang: rusLang,
      turkLang: turkLang,
      isMobileMenuOpen: false,
    };
  },
  components: {
    AboutMe,
    SkillSection,
    CarouselProjects,
    MyContacts,
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
    navigateTo(sectionId) {
      const targetSection = this.$refs[sectionId];

      if (targetSection) {
        // Если есть соответствующая секция, прокрутите к ней
        targetSection.$el.scrollIntoView({ behavior: "smooth" });
      } else {
        // В противном случае генерируйте событие для других секций
        this.$emit("navigate", sectionId);
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Open sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.header,
.footer {
  background-color: #5c8dd5ba;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 70px;
  margin: auto;
  max-width: 1440px;
}
.logo {
  font-family: "Roboto";
  font-weight: 700;
}
nav {
  padding: 30px;
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    margin-right: 20px;

    cursor: pointer;
  }
}
.burger-menu {
  display: none; // Скрывает бургер-меню по умолчанию для десктопа
}
@media (max-width: 767px) {
  .nav-menu {
    display: none; // Скрывает обычное меню на мобильных устройствах
  }

  .burger-menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: #5c8dd5ba; // Цвет фона бургер-меню
    padding: 10px;
    position: absolute;
    top: 70px; // Расположение бургер-меню относительно верхней части страницы
    left: 0;
    right: 0;
    z-index: 1;
  }

  .burger-menu li {
    margin-bottom: 10px;
    color: white; // Цвет текста в бургер-меню
  }
}
.nav_lang_container {
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}
.lang-icon {
  width: 30px;
}
.main-container {
  width: 70%;
  margin: auto;
  max-width: 1440px;
}
</style>
