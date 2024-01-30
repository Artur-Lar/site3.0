<template>
  <h1>Мои проекты</h1>
  <div class="container">
    <div class="container-for-project">
      <img class="img-project" :src="img_bookshop_path" alt="bookshop" />
      <h3 class="title-project" id="project">
        Книжный магазин с подключением к API Google Books
      </h3>
      <div class="description-project">
        <p id="bookshop_text_1">
          Главная страница сверстана по макету из
          <strong>Figma</strong>
        </p>
        <p id="bookshop_text_2">
          Подключено <strong>Google Books API</strong>, чтобы данные загружались
          с сервера
        </p>
        <p id="bookshop_text_3">
          Создан автоматический <strong>слайдер</strong>
        </p>
        <p id="bookshop_text_4">
          Кнопки авторизации, поиска и корзины неактивны. Однако при добавлении
          товара в корзину у иконки появляется бейджик с количеством товара в
          корзине
        </p>
        <p id="bookshop_text_5">
          При прокрутке сайта шапка остается закреплённой в верхней части экрана
        </p>
      </div>
      <a href="#"
        >Проект на GitHub <img class="link-img" :src="github_path" alt="git"
      /></a>
    </div>
    <div class="container-for-project">
      <img class="img-project" :src="img_kanban_path" alt="kanban" />
      <h3 class="title-project" id="project">Канбан-доска</h3>
      <div class="description-project">
        <p id="kanban_text_1">
          Проект на <strong>React</strong> с применением роутинга
        </p>
        <p id="kanban_text_2">
          Главная страница сверстана по макету из Figma. Канбан-доска имеет 4
          блока с задачами:Backlog, Ready, In progress, Finished
        </p>
        <p id="kanban_text_3">
          Первоначально каждая задача всегда размещается в Backlog — для
          анализа. При клике на кнопку «+ Add card» в карточке Backlog
          появляется поле ввода в конце списка, между последней задачей и
          кнопкой. При этом кнопка «+ Add card» меняется на «Submit»
        </p>
        <p id="kanban_text_4">Осуществлено перемещение задач между списками</p>
        <p id="kanban_text_5">
          Осуществлена возможность перехода на отдельную страницу какой-либо
          задачи в списке при клике на её заголовок
        </p>
      </div>
      <a href="#"
        >Проект на GitHub <img class="link-img" :src="github_path" alt="git"
      /></a>
    </div>
    <div class="container-for-project">
      <img class="img-project" :src="img_scan_path" alt="bookshop" />
      <h3 class="title-project" id="project">Сервис СКАН</h3>
      <div class="description-project">
        <p id="scan_text_1">Проект на <strong>React</strong></p>
        <p id="scan_text_2">Верстка по макету из Figma.</p>
        <p id="scan_text_3">
          Компания СКАН разработала новый API для поиска публикаций о компании
          (юридическом лице) в средствах массовой информации по его ИНН.
        </p>
        <p id="scan_text_4">Подключение к REST API через GET, POST запросы</p>
        <p id="scan_text_5">Авторизация пользователя по логину и паролю</p>
        <p id="scan_text_6">Форма для регистрации проходит валидацию</p>
        <p id="scan_text_7">Поиск информации осуществляется по ИНН компании</p>
        <p id="scan_text_8">
          В отчете выводится информация о периоде и количестве публикаций в СМИ
          (есть возможность выбора только негативных публикаций)
        </p>
      </div>
      <a href="#"
        >Проект на GitHub <img class="link-img" :src="github_path" alt="git"
      /></a>
    </div>
    <div class="container-for-project">
      <img class="img-project" :src="img_employeList_path" alt="bookshop" />
      <h3 class="title-project" id="project">
        Редактируемый список сотрудников
      </h3>
      <div class="description-project">
        <p id="empList_text_1">Проект на <strong>Vue</strong></p>
        <p id="empList_text_2">
          Позволяет создавать, добавлять, редактировать список сотрудников
        </p>
        <p id="empList_text_3">
          При добавлении данных о сотруднике форма проверяет правильность
          введенных данных (обязательны имя и фамилия, стаж не должен быть
          больше возраста сотрудника)
        </p>
      </div>
      <a href="#"
        >Проект на GitHub <img class="link-img" :src="github_path" alt="git"
      /></a>
    </div>
    <div class="container-for-project">
      <img class="img-project" :src="img_skyline_path" alt="bookshop" />
      <h3 class="title-project" id="project">
        Коммерческая разработка - сервис по покупке и продаже криптовалюты
        SkyLine
      </h3>
      <div class="description-project">
        <p id="skyline_text_1">Проект на <strong>React</strong></p>
        <p id="skyline_text_2">
          Верстка по макету Figma с использованием Material UI
        </p>
        <p id="skyline_text_3">Резиновая и адаптивная верстка</p>
        <p id="skyline_text_4">Контролируемые формы</p>
        <p id="skyline_text_5">Кастомизированные хуки</p>
        <p id="skyline_text_6">
          Создание запросов GET, POST на сервер REST API
        </p>
        <p id="skyline_text_7">
          Проверка заполнения формы для регистрации и авторизации
        </p>
      </div>
      <a href="#"
        >Проект на GitHub <img class="link-img" :src="github_path" alt="git"
      /></a>
    </div>
  </div>
</template>

<script>
import img_bookshop from "@/assets/project-bookshop.png";
import img_kanban from "@/assets/project-kanban.png";
import img_scan from "@/assets/project-scan.png";
import img_employeList from "@/assets/project-employers-list.png";
import img_skyline from "@/assets/project-skyline.png";

import logo_github from "@/assets/logo-github.png";

export default {
  data() {
    return {
      img_bookshop_path: img_bookshop,
      img_kanban_path: img_kanban,
      img_scan_path: img_scan,
      img_employeList_path: img_employeList,
      img_skyline_path: img_skyline,
      github_path: logo_github,
    };
  },
};
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  width: 70%;
  margin: auto;
  justify-content: space-between;
  gap: 40px;
}
.img-project {
  width: 300px;
  margin-top: 30px;
  border: 2px solid #5c8dd5ba;
}
.container-for-project {
  border: 1px solid #5c8dd5ba;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .description-project {
    width: 80%;
    margin: auto;
  }
}
.link-img {
  width: 20px;
}
</style>
