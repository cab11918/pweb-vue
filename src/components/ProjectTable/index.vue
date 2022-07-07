<template>
  <div class="wrapper">
    <div v-for="(animatedKeyword, index) in animatedKeywords" class="kw">
      <!-- <div
        :class="'kw-' + animatedKeyword.index"
      > -->

      <!-- <div class="outline"> -->
      <Card
        :kw="animatedKeyword"
        :class="'kw-' + animatedKeyword.index"
        @mouseenter="scale(index)"
        @mouseleave="shrink(index)"
        v-on:click="goTo(animatedKeyword.content, index)"
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
import "./index.scss";
// import integralGradeApi from '@/api/core/integral-grade'
// const anime = require('animejs');
import anime from "animejs/lib/anime.js";
import { keywords } from "../../constants";
import _ from "lodash";
import Card from "./Card.vue";
import router from "../../router";

let animatedKeywords = keywords.map((content, index) => {
  const mass = _.random(30, 100);
  return {
    content,
    index: index,
    mass: mass,
    translateX: window.innerWidth + content.length * mass + "px",
    style: {
      // fontSize: mass + "px",
      color: "#fff",
    },
  };
});

const ProjectTable = {
  data() {
    return {
      animations: [],
      animatedKeywords: animatedKeywords,
      //   integralGrade: {}, //保存数据
      //   saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
    };
  },
  mounted() {
    // console.log(this.$data.animations);

    animatedKeywords.forEach((kw) =>
      this.$data.animations.push(
        anime({
          targets: [".kw-" + kw.index],
          translateY: [50, 0],
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
      });
    },
    shrink(index) {
      anime({
        targets: [".kw-" + index],
        scale: 1,
        translateY: 0,
      });
    },

    goTo(content, index) {
      animatedKeywords.forEach((kw) => {
        kw.index !== index
          ? anime({
              targets: [".kw-" + kw.index],
              opacity: 0,
              translateY: 100,
              easing: "linear",
              duration: 100,
            })
          : anime({
              targets: [".kw-" + index],
              scale: 2,
            });
      });

      setTimeout(() => {
        router.push("/work");
      }, 1000);
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
    Card,
  },
};

export default ProjectTable;
</script>
