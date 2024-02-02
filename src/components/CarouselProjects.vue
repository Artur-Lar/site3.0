/* eslint-disable */
<template>
  <div id="projects" class="projects">
    <h1>{{ $t("projects") }}</h1>
    <Carousel
      id="MyGallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
    >
      <Slide v-for="(project, index) in projects" :key="index">
        <div class="carousel__main_item">
          <h3 class="carousel_title">
            {{ getProjectTitle(project.title, index) }}
          </h3>
          <img class="carousel_img" :src="project.image" alt="Project Image" />
          <div class="carousel__overlay">
            <!-- <h3 class="carousel_title">{{ project.title }}</h3> -->
            <p
              class="carousel_text"
              v-html="formatDescription(project.description)"
            ></p>
            <template v-if="index !== projects.length - 1">
              <a href="">
                {{ $t("link_to_git") }}
                <img class="link-img" :src="github_path" alt="git" />
              </a>
            </template>
          </div>
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="(project, index) in projects" :key="index">
        <div class="carousel__item" @click="slideTo(index)">
          <img :src="project.image" alt="Project Thumbnail" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import img_bookshop from "@/assets/project-bookshop.png";
import img_kanban from "@/assets/project-kanban.png";
import img_scan from "@/assets/project-scan.png";
import img_employeList from "@/assets/project-employers-list.png";
import img_skyline from "@/assets/project-skyline.png";

import logo_github from "@/assets/logo-github.png";

export default defineComponent({
  name: "MyGallery",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      github_path: logo_github,
      currentSlide: 0,
      projects: [
        {
          image: img_bookshop,
          title: this.$t("bookshop_title"),
          description:
            this.$t("bookshop_text_1") +
            "\n\n" +
            this.$t("bookshop_text_2") +
            "\n\n" +
            this.$t("bookshop_text_3") +
            "\n\n" +
            this.$t("bookshop_text_4") +
            "\n\n" +
            this.$t("bookshop_text_5"),
        },
        {
          image: img_kanban,
          title: this.$t("kanban_title"),
          description:
            this.$t("kanban_text_1") +
            "\n\n" +
            this.$t("kanban_text_2") +
            "\n\n" +
            this.$t("kanban_text_3") +
            "\n\n" +
            this.$t("kanban_text_4") +
            "\n\n" +
            this.$t("kanban_text_5"),
        },
        {
          image: img_scan,
          title: this.$t("scan_title"),
          description:
            this.$t("scan_text_1") +
            "\n\n" +
            this.$t("scan_text_2") +
            "\n\n" +
            this.$t("scan_text_3") +
            "\n\n" +
            this.$t("scan_text_4") +
            "\n\n" +
            this.$t("scan_text_5") +
            "\n\n" +
            this.$t("scan_text_6") +
            "\n\n" +
            this.$t("scan_text_7") +
            "\n\n" +
            this.$t("scan_text_8"),
        },
        {
          image: img_employeList,
          title: this.$t("empList_title"),
          description:
            this.$t("empList_text_1") +
            "\n\n" +
            this.$t("empList_text_2") +
            "\n\n" +
            this.$t("empList_text_3"),
        },
        {
          image: img_skyline,
          title: this.$t("skyline_title"),
          description:
            this.$t("skyline_text_1") +
            "\n\n" +
            this.$t("skyline_text_2") +
            "\n\n" +
            this.$t("skyline_text_3") +
            "\n\n" +
            this.$t("skyline_text_4") +
            "\n\n" +
            this.$t("skyline_text_5") +
            "\n\n" +
            this.$t("skyline_text_6") +
            "\n\n" +
            this.$t("skyline_text_7"),
        },
      ],
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    formatDescription(description) {
      return description.replace(/\n/g, "<br />");
    },
    // Функция для получения правильного заголовка в зависимости от размера экрана
    // Функция для получения правильного заголовка в зависимости от размера экрана и индекса слайда
    getProjectTitle(title, index) {
      // Получаем текущий размер экрана
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      // Проверяем, является ли текущий слайд последним и ширина экрана меньше или равна 768px
      if (index === this.projects.length - 1 && screenWidth <= 768) {
        return "Коммерческая разработка - криптообменник";
      } else {
        return title; // Возвращаем оригинальный title
      }
    },
  },
});
</script>

<style lang="scss">
.projects {
  margin-bottom: 50px;
}
.carousel__main_item {
  position: relative;
  width: 100%;
  border: 1px solid #5c8dd5ba;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .carousel_img {
    width: 100%;
    height: auto;
    display: block;
  }

  .carousel__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(10, 10, 70, 0.8);
    color: #fff;
    text-align: center;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    overflow-y: auto;
  }

  &:hover .carousel__overlay {
    opacity: 1;
  }

  .carousel_title {
    font-size: 1.5rem;
    margin-top: 10px;
  }

  .carousel_text {
    margin-top: 5px;
    max-height: 450px;
    overflow: auto;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}

.carousel__item {
  img {
    width: 90%;
    border: 1px solid #5c8dd5ba;
  }
}
.link-img {
  width: 35px;
}
</style>
