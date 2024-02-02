<template>
  <div ref="skills">
    <h1>{{ $t("skills") }}</h1>
    <div class="skills-container" id="skills">
      <div class="one-skill">
        <img class="skill-icon" :src="html_path" alt="html_path" />
        <div class="skill-description">
          <p>{{ $t("skill_html_1") }}</p>
          <p>{{ $t("skill_html_2") }}</p>
          <p>{{ $t("skill_html_3") }}</p>
        </div>
      </div>
      <div class="one-skill">
        <img class="skill-icon" :src="css_path" alt="css_path" />
        <img class="skill-icon" :src="scss_path" alt="scss_path" />
        <div class="skill-description">
          <p>{{ $t("skill_css_1") }}</p>
          <p>{{ $t("skill_css_2") }}</p>
          <p>{{ $t("skill_css_3") }}</p>
          <p>{{ $t("skill_css_4") }}</p>
        </div>
      </div>
      <div class="one-skill">
        <img class="skill-icon" :src="js_path" alt="js_path" />
        <div class="skill-description">
          <p>{{ $t("skill_js_1") }}</p>
          <p>{{ $t("skill_js_2") }}</p>
          <p>{{ $t("skill_js_3") }}</p>
          <p>{{ $t("skill_js_4") }}</p>
        </div>
      </div>
      <div class="one-skill">
        <img class="skill-icon" :src="ts_path" alt="ts_path" />
        <div class="skill-description">
          <p>{{ $t("skill_ts_1") }}</p>
          <p>{{ $t("skill_ts_2") }}</p>
          <p>{{ $t("skill_ts_3") }}</p>
        </div>
      </div>
      <div class="one-skill">
        <img class="skill-icon" :src="react_path" alt="react_path" />
        <div class="skill-description">
          <p>{{ $t("skill_react_1") }}</p>
          <p>{{ $t("skill_react_2") }}</p>
          <p>{{ $t("skill_react_3") }}</p>
          <p>{{ $t("skill_react_4") }}</p>
        </div>
      </div>
      <div class="one-skill">
        <img class="skill-icon" :src="vue_path" alt="vue_path" />
        <div class="skill-description">
          <p>{{ $t("skill_vue_1") }}</p>
          <p>{{ $t("skill_vue_2") }}</p>
          <p>{{ $t("skill_vue_3") }}</p>
          <p>{{ $t("skill_vue_4") }}</p>
        </div>
      </div>
      <div class="one-skill">
        <img class="skill-icon" :src="mui_path" alt="mui_path" />
        <div class="skill-description">
          <p>{{ $t("skill_mui_1") }}</p>
          <p>{{ $t("skill_mui_2") }}</p>
        </div>
      </div>
      <div class="one-skill">
        <img class="skill-icon" :src="git_path" alt="git_path" />
        <div class="skill-description">
          <p>{{ $t("skill_git_1") }}</p>
          <p>{{ $t("skill_git_2") }}</p>
        </div>
      </div>
      <div class="one-skill">
        <img class="skill-icon" :src="jira_path" alt="jira_path" />
        <div class="skill-description">
          <p>{{ $t("skill_jira_1") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo_html from "@/assets/logo_html.png";
import logo_css from "@/assets/logo-css.png";
import logo_scss from "@/assets/logo-scss.png";
import logo_js from "@/assets/logo-js.png";
import logo_ts from "@/assets/typescript.svg";
import logo_react from "@/assets/logo-react2.png";
import logo_vue from "@/assets/logo.png";
import logo_mui from "@/assets/logo-mui.png";
import logo_git from "@/assets/logo-git.png";
import logo_jira from "@/assets/app-icon-jira.png";

export default {
  data() {
    return {
      html_path: logo_html,
      css_path: logo_css,
      scss_path: logo_scss,
      js_path: logo_js,
      ts_path: logo_ts,
      react_path: logo_react,
      vue_path: logo_vue,
      mui_path: logo_mui,
      git_path: logo_git,
      jira_path: logo_jira,
    };
  },
};
</script>

<style lang="scss" scoped>
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: space-between;
  gap: 40px;
}
.one-skill {
  border: 1px solid #5c8dd5ba;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    padding-top: 20px;
  }
  .skill-description {
    width: 80%;
    margin: auto;
  }
}

.skill-icon {
  width: 50px;
}
</style>
