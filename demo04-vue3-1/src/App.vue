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
import { defineComponent, ref, reactive, toRefs } from "vue";

interface DataProps {
  girls: string[];
  selectedGirl: string;
  selectGirlFunc: (index: number) => void;
}

export default defineComponent({
  name: "App",
  setup() {
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectedGirl: "",
      selectGirlFunc: (index: number) => {
        data.selectedGirl = data.girls[index];
      },
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
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
