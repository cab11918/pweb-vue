<template>
  <div class="wrapper">
    <div v-for="(animatedKeyword, index) in animatedKeywords" class="kw">
      <!-- <div
        :class="'kw-' + animatedKeyword.index"
      > -->

      {{ animatedKeyword.content }}
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// import SideBar from "../components/SideBar.vue";
// import TopBar from "../components/TopBar.vue";
import "./ProjectTable.scss";
// import integralGradeApi from '@/api/core/integral-grade'
// const anime = require('animejs');
// import anime from "animejs/lib/anime.js";
import { keywords } from "../constants";
import _ from "lodash";

let animatedKeywords = keywords.map((content, index) => {
  const mass = _.random(30, 100);
  return {
    content,
    index: index,
    mass: mass,
    translateX: window.innerWidth + content.length * mass + "px",
    style: {
      fontSize: mass + "px",
      color: "#fff",
    },
  };
});

export default {
  data() {
    return {
      //   animations: [],
      animatedKeywords: animatedKeywords,
      //   integralGrade: {}, //保存数据
      //   saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
    };
  },
  mounted() {
    // console.log(this.$data.animations);
    // animatedKeywords.forEach((kw) =>
    //   this.$data.animations.push(
    //     anime({
    //       targets: [".kw-" + kw.index],
    //       translateX: [-(kw.mass * kw.content.length), kw.translateX],
    //       duration: kw.mass * 200,
    //       // loop: true,
    //       easing: "linear",
    //       loop: true,
    //     })
    //   )
    // );
  },
  created() {
    if (this.$route.params.id) {
      // this.fetchDataById(this.$route.params.id)
    }
  },
  methods: {
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
  },
};
</script>
