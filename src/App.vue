<template>
  <div class="header">
    <div class="header_container">
      <div class="logo">Frontend Developer</div>
      <nav>
        <router-link to="/">Обо мне</router-link> |
        <router-link to="/about">Навыки</router-link>
        <router-link to="/about">Мои проекты</router-link>
        <router-link to="/about">Контакты</router-link>
      </nav>
      <div class="nav_lang_container">
        <img class="lang-icon" :src="engLang" alt="eng-lang" />
        <img class="lang-icon" :src="rusLang" alt="rus-lang" />
        <img class="lang-icon" :src="turkLang" alt="turk-lang" />
      </div>
    </div>
  </div>

  <router-view />
  <div class="footer">
    <MyContacts />
  </div>
</template>

<script>
import engLang from "@/assets/eng2.png";
import rusLang from "@/assets/rus2.png";
import turkLang from "@/assets/turk2.png";

import MyContacts from "@/components/MyContacts.vue";

export default {
  data() {
    return {
      engLang: engLang,
      rusLang: rusLang,
      turkLang: turkLang,
    };
  },
  components: {
    MyContacts,
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.lang-icon {
  width: 30px;
}
</style>
