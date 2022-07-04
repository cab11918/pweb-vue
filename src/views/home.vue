<template>
  <div>1234</div>
  <div class="anime">
    <div class="wCen">
      <div class="blue">
        <div class="ball">123</div>
      </div>
      <div class="green">
        <div class="ball">234</div>
      </div>
    </div>
  </div>
</template>

<script>
// import SideBar from "../components/SideBar.vue";
import TopBar from "../components/TopBar.vue";
import "./home.scss";
// import integralGradeApi from '@/api/core/integral-grade'
// const anime = require('animejs');
import anime from "animejs/lib/anime.js";

export default {
  data() {
    return {
      integralGrade: {}, //保存数据
      saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
    };
  },
  mounted() {
    var myAnimation = anime({
      targets: [".blue", ".green"],
      translateX: "300px",
      rotate: 360,
      borderRadius: 100,
      duration: 2000 * 2,
      // loop: true,
      easing: "linear",
    });
  },
  created() {
    if (this.$route.params.id) {
      // this.fetchDataById(this.$route.params.id)
    }
  },
  methods: {
    // fetchDataById(id) {
    //   integralGradeApi.getById(id).then((response) => {
    //     this.integralGrade = response.data.integralGrade
    //   })
    // },
    // saveOrUpdate() {
    //   this.saveBtnDisabled = true
    //   if (this.$route.params.id) {
    //     this.updateData()
    //   } else {
    //     this.saveData()
    //   }
    //   this.$router.push('/core/integral-grade/list')
    // },
    // saveData() {
    //   integralGradeApi.save(this.integralGrade).then((response) => {
    //     this.$message.success(response.message)
    //   })
    //   // .catch((error) => {
    //   //   this.$message.info(error.message)
    //   // })
    // },
    // updateData() {
    //   integralGradeApi.update(this.integralGrade).then((response) => {
    //     this.$message({
    //       type: 'success',
    //       message: response.message,
    //     })
    //   })
    // },
  },
  components: {
    // SideBar,
    TopBar,
  },
};
</script>
