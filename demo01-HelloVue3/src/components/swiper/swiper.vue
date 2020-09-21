<template>
  <div class="swiper-container">
    <div v-for="(item,index) in myImgList" :key="index">{{item.imgId}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Swiper",
  props: {
    imgList: Array,
  },
  setup(props) {
    const myImgList = props.imgList;
    return {
      myImgList,
    };
  },
});
</script>

<style scoped>
.swiper-container {
  background-color: #f0f0f0;
  width: 100%;
  height: 20vh;
}
</style>