<template>
  <h1>{{ result }}</h1>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const result = ref("");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        result.value = "result";
        return resolve({ result: "result" });
      }, 3000);
    });
  },
});
</script>