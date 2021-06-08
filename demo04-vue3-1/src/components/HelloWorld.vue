<template>
  <div>{{ nowTime }}</div>
  <button @click="getNowTime">执行</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { nowTime, getNowTime } from "../hooks/useNowTime";
export default defineComponent({
  name: "HelloWorld",
  setup() {
    return {
      nowTime,
      getNowTime,
    };
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
