<template>
  <div class="app-container">
    <!-- 输入表单 -->
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number v-model="integralGrade.integralStart" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number v-model="integralGrade.integralEnd" :min="0" />
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
  <router-view name="Vuex"></router-view>
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

<style scope></style>
