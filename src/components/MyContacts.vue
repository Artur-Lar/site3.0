<template>
  <div class="footer-container">
    <h2>Мои контакты</h2>
    <a class="link" href="https://t.me/arturdr45" target="_blank" id="tgProfile"
      ><img :src="icon_telegram_path" alt="" /> Мой профиль в Телеграм</a
    >
    <a
      class="link"
      href="https://hh.ru/resume/3c83bebbff0c5d1caf0039ed1f6a5a43564d68"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="35"
        height="35"
      >
        <path
          d="M 24 48 c 13.255 0 24 -10.745 24 -24 S 37.255 0 24 0 S 0 10.745 0 24 s 10.745 24 24 24"
          fill="rgb(214, 0, 28)"
        />
        <path
          d="M 13.65 13.169 v 8.164 c 1.243 -1.482 2.733 -2.228 4.461 -2.228 c 0.89 0 1.687 0.17 2.402 0.507 c 0.717 0.335 1.253 0.765 1.615 1.287 c 0.364 0.527 0.61 1.104 0.743 1.74 c 0.132 0.633 0.198 1.618 0.198 2.954 v 8.729 h -3.862 V 26.46 c 0 -1.56 -0.07 -2.548 -0.217 -2.968 a 1.917 1.917 0 0 0 -0.775 -1 c -0.372 -0.251 -0.835 -0.375 -1.394 -0.375 c -0.64 0 -1.214 0.16 -1.713 0.478 c -0.51 0.32 -0.876 0.798 -1.108 1.437 c -0.236 0.64 -0.354 1.585 -0.35 2.836 l -0.004 7.454 H 9.789 V 13.169 h 3.862 m 15.206 0 v 8.164 c 1.244 -1.482 2.733 -2.228 4.46 -2.228 c 0.887 0 1.69 0.17 2.406 0.507 c 0.714 0.335 1.25 0.765 1.61 1.287 a 4.69 4.69 0 0 1 0.743 1.74 c 0.133 0.633 0.199 1.618 0.199 2.954 v 8.729 h -3.858 V 26.46 c 0 -1.56 -0.073 -2.548 -0.22 -2.968 a 1.91 1.91 0 0 0 -0.777 -1 c -0.368 -0.251 -0.835 -0.375 -1.394 -0.375 c -0.639 0 -1.213 0.16 -1.713 0.478 c -0.503 0.32 -0.871 0.798 -1.106 1.437 c -0.232 0.64 -0.35 1.585 -0.35 2.836 v 7.454 H 25 V 13.169 h 3.857"
          fill="rgb(254, 254, 254)"
        />
      </svg>
      Профиль на Headhunter</a
    >
  </div>
</template>

<script>
import icon_telegram from "@/assets/icon-telegram.png";

export default {
  data() {
    return {
      icon_telegram_path: icon_telegram,
    };
  },
};
</script>

<style scoped lang="scss">
.footer-container {
  width: 70%;
  margin: auto;
  max-width: 1440px;
}
.link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-bottom: 15px;

  img {
    width: 35px;
    padding-right: 15px;
  }
  svg {
    padding-right: 15px;
  }
}
</style>
