<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" class="menu">
    <a-menu-item key="mail">
      <router-link :to="'/'">
        <img
          src="../assets/mepo.svg"
          class="cus-logo"
          oncontextmenu="return false;"
          ondragstart="return false;"
        />
        Minghao Yu
      </router-link>
    </a-menu-item>
    <a-menu-item key="work">
      <router-link :to="'/work'">
        <img
          src="../assets/potato.svg"
          class="cus-logo"
          oncontextmenu="return false;"
          ondragstart="return false;"
        />

        Work
      </router-link>
    </a-menu-item>
    <a-menu-item key="about">
      <router-link :to="'/about'">
        <img
          src="../assets/record.svg"
          class="cus-logo"
          oncontextmenu="return false;"
          ondragstart="return false;"
        />
        About
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import "./TopBar.scss";
import { defineComponent, ref } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
// export default defineComponent({
//   components: {
//     MailOutlined,
//     AppstoreOutlined,
//     SettingOutlined,
//   },
//   setup() {
//     const current = ref<string[]>(['mail']);
//     return {
//       current,
//     };
//   },
// });
// import integralGradeApi from '@/api/core/integral-grade'
export default {
  data() {
    return {
      integralGrade: {}, //保存数据
      saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
    };
  },
  setup() {
    const current = ref<string[]>(["mail"]);
    return {
      current,
    };
  },
  created() {
    if (this.$route.params.id) {
      // this.fetchDataById(this.$route.params.id)
    }
  },
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
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

<!-- <style lang="scss">
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
</style> -->
