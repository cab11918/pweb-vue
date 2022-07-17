<template>
  <div v-bind:class="'timecard-wrapper-' + placement">
    <span class="cubes">
      <IndexCard
        v-bind:id="'index-card-' + index"
        :kw="{ content: project.title, index: index }"
        :class="'index-card-' + index"
      />
      <span v-bind:id="'thumbnails-' + index">
        <span v-for="(img, index) in project.images" :key="index">
          <img class="thumbnail" :src="img" />
        </span>
      </span>
    </span>
    <h2>{{ project.title }}</h2>
    <div>{{ project.date }}</div>
    <div>{{ project.discription }}</div>
    <div>{{ project.gitUrl }}</div>
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
