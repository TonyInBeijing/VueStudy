<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
    <Swiper />
  </p>
</template>

<script lang="ts">
import Swiper from "./swiper/swiper.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Swiper,
  },
  props: {
    msg: String,
  },
  setup(props) {
    const msg = ref(props.msg);
    const count = ref(0);
    return { msg, count };
  },
});
</script>
