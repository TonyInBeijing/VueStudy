<template>
  <Swiper :imgList="swiperData" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Swiper from "./swiper/swiper.vue";
export default defineComponent({
  name: "Home",
  components: {
    Swiper,
  },
  setup() {
    const swiperData = [{ imgId: 1 }, { imgId: 2 }, { imgId: 3 }];
    return { swiperData };
  },
});
</script>

<style>
</style>