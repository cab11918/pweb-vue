<template>
  <div class="wrapper">
    <div v-for="(project, index) in projects" class="kw" :key="index">
      <!-- <div
        :class="'kw-' + animatedKeyword.index"
      > -->

      <!-- <div class="outline"> -->
      <IndexCard
        :kw="{ content: project.title, index: index }"
        :class="'kw-' + index"
        @mouseenter="scale(index)"
        @mouseleave="shrink(index)"
        v-on:click="goTo(project, index)"
      />
      <!-- </div> -->

      <!-- {{ animatedKeyword.content }} -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// import SideBar from "../components/SideBar.vue";
// import TopBar from "../components/TopBar.vue";
// import integralGradeApi from '@/api/core/integral-grade'
// const anime = require('animejs');
import anime from "animejs/lib/anime.js";
import { PROJECTS } from "../../constants";
import _ from "lodash";
import IndexCard from "../IndexCard.vue";
import router from "../../router";

// let animatedKeywords = PROJECTS.map((content, index) => {
//   const mass = _.random(30, 100);
//   return {
//     content,
//     index: index,
//     mass: mass,
//     translateX: window.innerWidth + content.length * mass + "px",
//     style: {
//       // fontSize: mass + "px",
//       color: "#fff",
//     },
//   };
// });

const ProjectTable = {
  data() {
    return {
      animations: [],
      projects: PROJECTS,
      // animatedKeywords: animatedKeywords,
      //   integralGrade: {}, //保存数据
      //   saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
    };
  },
  mounted() {
    // console.log(this.$data.animations);

    this.projects.forEach((p, index) =>
      this.$data.animations.push(
        anime({
          targets: [".kw-" + index],
          translateY: [50, 0],
          translateX: [50, 0],

          // duration: kw.mass * 200,
          // // loop: true,
          // easing: "linear",
          // loop: true,
        })
      )
    );
  },
  created() {
    if (this.$route.params.id) {
      // this.fetchDataById(this.$route.params.id)
    }
  },
  methods: {
    scale(index) {
      anime({
        targets: [".kw-" + index],
        scale: 1.2,
        translateY: 0,
        translateX: 0,
      });
    },
    shrink(index) {
      anime({
        targets: [".kw-" + index],
        scale: 1,
        translateY: 0,
        translateX: 0,
      });
    },

    goTo(project, index1) {
      this.projects.forEach((p, index2) => {
        index1 !== index2
          ? anime({
              targets: [".kw-" + index2],
              opacity: 0,
              translateY: 100,
              easing: "linear",
              duration: 100,
            })
          : anime({
              targets: [".kw-" + index1],
              scale: 2,
            });
      });

      setTimeout(() => {
        router.push("/work/" + project.code);
      }, 500);
    },

    // pause(target) {
    //   this.$data.animations[target].pause();
    //   this.$data.animations[target].pause();
    // },
    // goOn(target) {
    //   this.$data.animations[target].play();
    // },
  },
  components: {
    // SideBar,
    // TopBar,
    IndexCard,
  },
};

export default ProjectTable;
</script>
