<template>
  <div class="'image-wrapper">
    <img src="./" />
  </div>
</template>

<script>
import IndexCard from "../IndexCard.vue";
// console.log(window.scrollY);

export default {
  props: {
    placement: String,
    project: Object,
    index: Number,
  },
  data() {
    return {
      integralGrade: {}, //保存数据
      saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
    };
  },
  mounted() {
    // console.log(this.$props)
  },
  created() {},
  methods: {},
  components: {
    IndexCard,
  },
};
</script>
