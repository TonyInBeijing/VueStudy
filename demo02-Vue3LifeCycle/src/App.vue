<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import {
  defineComponent,
  onActivated,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  PropType,
} from "vue";
interface Student {
  name: string;
  class: string;
  age: number;
}
const Component = defineComponent({
  setup(props, context) {
    // 挂载后
    onMounted(() => {});
    // 卸载后
    onUnmounted(() => {});
    // 更新后
    onUpdated(() => {});
    // 即将更新
    onBeforeUpdate(() => {});
    // keepalive 组件激活
    onActivated(() => {});
    // keepalive 组件非激活
    onDeactivated(() => {});
    return {};
  },
});
</script>
