<template>
  <h1>it's me1!</h1>
</template>

<script>
// import integralGradeApi from '@/api/core/integral-grade'
export default {
  data() {
    return {
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
};
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: red;
}
// .test{
//     opacity: 0;
// }
</style>
