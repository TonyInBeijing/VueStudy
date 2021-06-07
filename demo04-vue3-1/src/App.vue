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
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

interface DataProps {
  girls: string[];
  selectedGirl: string;
  selectGirlFunc: (index: number) => void;
}

export default defineComponent({
  name: "App",
  // 组件创建之前
  setup() {
    console.log("1-开始创建---setup()");
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectedGirl: "",
      selectGirlFunc: (index: number) => {
        data.selectedGirl = data.girls[index];
      },
    });

    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行---onBeforeMount()");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后执行---onMounted()");
    });

    onBeforeUpdate(() => {
      console.log("4-组件更新之前执行---onBeforeUnpdate()");
    });

    onUpdated(() => {
      console.log("5-组件更新之后执行---onUpdate()");
    });

    onBeforeUnmount(() => {
      console.log("6-组件卸载之前执行---onBeforeUnmount()");
    });

    onUnmounted(() => {
      console.log("7-组件卸载之后执行---onUnmounted()");
    });

    // toRefs + ... 在模版中直接使用的响应式数据，而且不需要加refData
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
