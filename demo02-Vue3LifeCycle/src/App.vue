<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <input v-model="inputVal" />
  <button @click="addTodo">添加</button>
  <ul>
    <li v-for="(item, index) in todoList" :key="index">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import {
  defineComponent,
  onActivated,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  PropType,
  reactive,
  ref,
  toRefs,
} from "vue";
interface Student {
  name: string;
  class: string;
  age: number;
}
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup(props, context) {
    // 挂载后
    onMounted(() => {
      console.log("组件挂载");
    });
    // 卸载后
    onUnmounted(() => {
      console.log("组件卸载");
    });
    // 更新后
    onUpdated(() => {
      console.log("组件更新");
    });
    // 即将更新
    onBeforeUpdate(() => {
      console.log("组件即将更新");
    });
    // keepalive 组件激活
    onActivated(() => {
      console.log("组件激活");
    });
    // keepalive 组件非激活
    onDeactivated(() => {
      console.log("组件非激活");
    });

    // const inputVal = ref("");
    // const todoList = ref<string[]>([]);
    const inputData = reactive({
      inputVal: "",
      todoList: [],
    });
    function addTodo() {
      // todoList.value.push(inputVal.value);
      // inputVal.value = "";
      inputData.todoList.push(inputData.inputVal);
      inputData.inputVal = "";
    }
    return {
      ...toRefs(inputData),
      addTodo,
    };
  },
});
</script>
