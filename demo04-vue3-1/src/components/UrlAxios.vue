<template>
  <div>
      <div v-if="loading">Loading...</div>
      <div v-else-if="loaded">
          <img :src="result.imgUrl" alt="">
      </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useUrlAxios from "../hooks/useUrlAxios";
export default defineComponent({
  name: "UrlAxios",
  setup: () => {
    const { result, error, loading, loaded } = useUrlAxios(
      "https://apiblog.jspang.com/default/getGirl"
    );
    return {
      result,
      error,
      loading,
      loaded,
    };
  },
});
</script>