<template>
  <div>
    <h1>Мои проекты</h1>
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
                Ссылка на проект
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
          title: "Книжный магазин",
          description:
            "Главная страница сверстана по макету из Figma\n\n\
            Подключено Google Books API, чтобы данные загружались с сервера\n\n\
            Создан автоматический слайдер\n\n\
            Кнопки авторизации, поиска и корзины неактивны. Однако при добавлении товара в корзину у иконки появляется бейджик с количеством товара в корзине\n\n\
            При прокрутке сайта шапка остается закреплённой в верхней части экрана.",
        },
        {
          image: img_kanban,
          title: "Канбан-доска",
          description:
            "Проект на React с применением роутинга\n\n\
            Главная страница сверстана по макету из Figma. Канбан-доска имеет 4 блока с задачами: Backlog, Ready, In progress, Finished\n\n\
            Первоначально каждая задача всегда размещается в Backlog — для анализа\n\n\
            При клике на кнопку «+ Add card» в карточке Backlog появляется поле ввода в конце списка, между последней задачей и кнопкой. При этом кнопка «+ Add card» меняется на «Submit»\n\n\
            Осуществлено перемещение задач между списками\n\n\
            Осуществлена возможность перехода на отдельную страницу какой-либо задачи в списке при клике на её заголовок.",
        },
        {
          image: img_scan,
          title: "Сервис СКАН",
          description:
            "Проект на React\n\n\
            Верстка по макету из Figma\n\n\
            Компания СКАН разработала новый API для поиска публикаций о компании (юридическом лице) в средствах массовой информации по его ИНН\n\n\
            Подключение к REST API через GET, POST запросы\n\n\
            Авторизация пользователя по логину и паролю\n\n\
            Форма для регистрации проходит валидацию\n\n\
            Поиск информации осуществляется по ИНН компании\n\n\
            В отчете выводится информация о периоде и количестве публикаций в СМИ (есть возможность выбора только негативных публикаций).",
        },
        {
          image: img_employeList,
          title: "Редактируемый список сотрудников",
          description:
            "Проект на Vue\n\n\
            Позволяет создавать, добавлять, редактировать список сотрудников\n\n\
            При добавлении данных о сотруднике форма проверяет правильность введенных данных (обязательны имя и фамилия, стаж не должен быть больше возраста сотрудника).",
        },
        {
          image: img_skyline,
          title:
            "Коммерческая разработка - сервис по покупке и продаже криптовалюты SkyLine",
          description:
            "Проект на React\n\n\
            Верстка по макету Figma с использованием Material UI\n\n\
            Резиновая и адаптивная верстка\n\n\
            Контролируемые формы\n\n\
            Кастомизированные хуки\n\n\
            Создание запросов GET, POST на сервер REST API\n\n\
            Проверка заполнения формы для регистрации и авторизации.",
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
