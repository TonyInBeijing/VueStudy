<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>欢迎光临红浪漫洗浴中心</h2>
  <div>请选择一位美女为您服务</div>
  <div>
    <button
      v-for="(item, index) in girls"
      v-bind:key="index"
      @click="selectGirlFunc(index)"
    >
      {{ index }}: {{ item }}
    </button>
  </div>
  <div>您选择了::{{ selectedGirl }}</div>
  <!-- <HelloWorld msg="Hello World!"/> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: "App",
  setup() {
    const girls = ref(["大脚", "刘英", "晓红"]);
    const selectedGirl = ref("");
    const selectGirlFunc = (index: number) => {
      selectedGirl.value = girls.value[index];
    };
    return {
      girls,
      selectedGirl,
      selectGirlFunc,
    };
  },
  // components: {
  //   HelloWorld
  // }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
