<template>
  <div class="time-wrapper">
    <template v-for="(project, index) in projects" :key="index">
      <TimeCard
        :placement="index % 2 === 0 ? 'left' : 'right'"
        :project="project"
        :cardIndex="index"
      />
      <!-- <div class="image-wrapper"><ImageView/></div> -->
    </template>
  </div>
</template>

<script>
import { PROJECTS } from "../../constants";
import MarbleSolitaire from "../../components/ProjectDetail/MarbleSolitaire.vue";
import TimeCard from "../Timeline/TimeCard.vue";
import ImageView from "../Timeline/ImageView.vue";
import anime from "animejs";
export default {
  data() {
    return {
      projects: PROJECTS, //保存数据
      saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
      indexes: [],
      visited: [],
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "90px 0px 90px 0px",
      thresholds: 1,
    };
    this.projects.forEach((p, index) => {
      var io = new IntersectionObserver((entries) => {
        console.log(entries);
        anime({
          targets: ["#index-card-" + index],
          translateX: index % 2 === 0 ? [-200, 0] : [200, 0],
          opacity: [0, 1],
          scale: [2, 1],
          delay: 300,
          // easing:'linear',
        });
        anime({
          targets: ["#thumbnails-" + index],
          translateX: index % 2 === 0 ? [40, 0] : [-40, 0],
          scale: [0.9, 1],
          opacity: [0, 1],
          duration: 1500,
          delay: 300,
          // easing:'linear',
        });
        this.visited.push(index);
      }, options);
      io.observe(document.getElementById("index-card-" + index));
      io.observe(document.getElementById("thumbnails-" + index));
    });

    // var io = new IntersectionObserver(
    //   entries => {
    //     console.log(entries);
    //   }
    // );
    // window.addEventListener("scroll", this.handleScroll);
  },
  created() {},
  methods: {
    // handleScroll() {
    //   // viewPortHeight 兼容全部浏览器写法
    //   const viewPortHeight =
    //     window.innerHeight ||
    //     document.documentElement.clientHeight ||
    //     document.body.clientHeight;
    //   // 这里有个+100是为了提早加载+ 100
    //   // return top <= viewPortHeight + 100
    //   //   console.log(document.body.clientHeight,"CLIENTHEIGHT");
    //   //   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //   //               const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    //   this.projects.forEach((p, index) => {
    //     const el = document.getElementById("index-card-" + index);
    //     const offsetTop = el.offsetTop;
    //     const scrollTop = document.documentElement.scrollTop;
    //     const top = offsetTop - scrollTop;
    //     if (top <= viewPortHeight + 100) {
    //         if( !( index in this.indexes) ){
    //              this.indexes.push(index)
    //               anime({
    //         targets: ["#index-card-" + index],
    //         translateX:index % 2 === 0 ? [-100,0] : [100,0],
    //         // easing:'linear',
    //       });
    //         }
    //     }
    //   });
    // },
  },
  components: {
    MarbleSolitaire,
    TimeCard,
    ImageView,
  },
};
</script>
