<template>
  <!-- <router-view name="Vuex"></router-view> -->
  <Timeline />
</template>

<script>
import anime from "animejs";
import Timeline from "../components/Timeline/index.vue";
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
  mounted() {},
  methods: {},
  components: {
    Timeline,
  },
};
</script>
