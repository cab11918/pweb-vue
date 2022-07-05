<template>
  <div class="anime">
    <div v-for="animatedKeyword in animatedKeywords">
      <div
        :class="'kw-' + animatedKeyword.index"
        :style="animatedKeyword.style"
        @mouseover="test"
      >
        {{ animatedKeyword.content }}
      </div>
    </div>
  </div>
</template>

<script>
// import SideBar from "../components/SideBar.vue";
import TopBar from "../components/TopBar.vue";
import "./Welcome.scss";
// import integralGradeApi from '@/api/core/integral-grade'
// const anime = require('animejs');
import anime from "animejs/lib/anime.js";
import { keywords } from "../constants";
import _ from "lodash";

let animatedKeywords = keywords.map((content, index) => {
  const mass = _.random(30, 80);
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
      animatedKeywords: animatedKeywords,
      integralGrade: {}, //保存数据
      saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
    };
  },
  mounted() {
    console.log(animatedKeywords);
    animatedKeywords.forEach((kw) =>
      anime({
        targets: [".kw-" + kw.index],
        translateX: [-(kw.mass * kw.content.length), kw.translateX],
        duration: kw.mass * 200,
        // loop: true,
        easing: "linear",
        loop: true,
      })
    );
  },
  created() {
    if (this.$route.params.id) {
      // this.fetchDataById(this.$route.params.id)
    }
  },
  methods: {
    test: function () {
      alert("bazinga");
    },
  },
  components: {
    // SideBar,
    // TopBar,
  },
};
</script>
