<template>
  <div class="card">
    <span class="prefix"
      >{{ kw.content[0] }}<span class="sub">{{ kw.content[1] }}</span></span
    >
    <span class="footer">{{ kw.index + 1 }}</span>
  </div>
</template>

<script>
// import SideBar from "../components/SideBar.vue";
// import TopBar from "../components/TopBar.vue";
import "./Card.scss";
// import integralGradeApi from '@/api/core/integral-grade'
// const anime = require('animejs');
// import anime from "animejs/lib/anime.js";
import { keywords } from "../../constants";
import _ from "lodash";

export default {
  props: ["kw"],
  data() {
    return {
      //   animations: [],
      animatedKeyword: this.animatedKeyword,
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
