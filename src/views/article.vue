<template>
  <div class="article">
    <A2 />
  </div>
  <div class="article">
    <A3 />
  </div>
  <div class="article">
    <A4 />
  </div>
  <div class="article">
    <A1 />
  </div>
</template>

<script>
import AnimatedCarousel from "../components/AnimatedCarousel/index.vue";
import { ARTICLES } from "../constants";
import A1 from "../assets/articles/个人博客网站搭建.md";
import A2 from "../assets/articles/关于业务逻辑拆分列表实现方法随笔.md";
import A3 from "../assets/articles/实现自动分页效果的思路-插入元素并从移除DOM.md";
import A4 from "../assets/articles/通过Cookie缓存实现定时弹窗通知.md";
// import integralGradeApi from '@/api/core/integral-grade'
export default {
  data() {
    return {
      data: [1, 2, 3],
      integralGrade: {}, //保存数据
      saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
    };
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
    AnimatedCarousel,
    A1,
    A2,
    A3,
    A4,
  },
};
</script>

<style scope></style>
