<template>
  <!-- BAD CODE -->
  <div class="timecard-wrapper">
    <span class="left">
      <span v-if="placement === 'left'">
        <span class="cubes">
          <IndexCard
            v-bind:id="'index-card-' + cardIndex"
            :kw="{ content: project.title, index: cardIndex }"
            :class="'index-card-' + cardIndex"
          />
          <span v-bind:id="'thumbnails-' + cardIndex">
            <span
              v-for="(img, index) in project.images"
              :key="index"
              :v-bind:id="'thumbnails-' + cardIndex + '-' + index"
              @mouseenter="hover(cardIndex, index)"
              @mouseleave="leave(cardIndex, index)"
            >
              <img
                class="thumbnail"
                :src="img"
                :id="'thumbnails-' + cardIndex + '-' + index"
              />
            </span>
          </span>
        </span>
        <h2>{{ project.title }}</h2>
        <div>{{ project.date }}</div>
        <div>{{ project.discription }}</div>
        <div>{{ project.gitUrl }}</div>
      </span>
      <span v-else-if="placement === 'right'">
        <ImageView :imgSrc="showingImage" />
      </span>
    </span>
    <span class="right">
      <span v-if="placement === 'right'">
        <span class="cubes">
          <IndexCard
            v-bind:id="'index-card-' + cardIndex"
            :kw="{ content: project.title, index: cardIndex }"
            :class="'index-card-' + cardIndex"
          />
          <span v-bind:id="'thumbnails-' + cardIndex">
            <span
              v-for="(img, index) in project.images"
              :key="index"
              @mouseenter="hover(cardIndex, index)"
              @mouseleave="leave(cardIndex, index)"
            >
              <img
                class="thumbnail"
                :src="img"
                :id="'thumbnails-' + cardIndex + '-' + index"
              />
            </span>
          </span>
        </span>
        <h2>{{ project.title }}</h2>
        <div>{{ project.date }}</div>
        <div>{{ project.discription }}</div>
        <div>{{ project.gitUrl }}</div>
      </span>
      <span v-else-if="placement === 'left'">
        <ImageView :imgSrc="showingImage" />
      </span>
    </span>
  </div>
</template>

<script>
import anime from "animejs";
import IndexCard from "../IndexCard.vue";
// console.log(window.scrollY);
import ImageView from "./ImageView.vue";
export default {
  props: {
    placement: String,
    project: Object,
    cardIndex: Number,
  },
  data() {
    return {
      integralGrade: {}, //保存数据
      saveBtnDisabled: false, //false :按钮可用，true：按钮不可用
      showingImage: undefined,
    };
  },
  mounted() {
    // console.log(this.$props)
  },
  created() {},
  methods: {
    hover(cardIndex, index) {
      this.showingImage = this.project.images[index];
      anime({
        targets: ["#thumbnails-" + cardIndex + "-" + index],
        scale: [1, 1.2],
      });
    },
    leave(cardIndex, index) {
      anime({
        targets: ["#thumbnails-" + cardIndex + "-" + index],
        scale: [1.2, 1],
      });
      this.showingImage = undefined;
    },
  },
  components: {
    IndexCard,
    ImageView,
  },
};
</script>
