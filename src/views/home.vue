<template>
  <el-row :span="24">
    <TopBar />
  </el-row>
  <el-row>
    <el-col :span="4">
      <SideBar />
    </el-col>
    <el-col :span="16" class="test"> </el-col>
    <el-col :span="4"
      ><div class="grid-content bg-purple-light" />
      侧边栏右</el-col
    >
  </el-row>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import TopBar from "../components/TopBar.vue";
import "./Home.scss";
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
  components: {
    SideBar,
    TopBar,
  },
};
</script>
