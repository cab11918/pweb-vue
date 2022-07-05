<template>
  <Welcome />
</template>

<script>
import TopBar from "../components/TopBar.vue";
import Welcome from "../components/Welcome.vue";
import "./home.scss";

export default {
  data() {
    return {
      integralGrade: {}, //保存数据
      saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
    };
  },
  mounted() {},
  created() {},
  methods: {},
  components: {
    TopBar,
    Welcome,
  },
};
</script>
