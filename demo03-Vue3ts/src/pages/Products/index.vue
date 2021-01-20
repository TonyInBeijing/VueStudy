<template>
  <div class="products">
    <div
      class="product-list"
      v-for="(item, index) in products"
      :key="index"
    >{{item.title}}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Product from "@src/interface";
import apiGetProducts from "@src/api/index";
export default defineComponent({
  name: "product",
  setup: () => {
    const products = ref<Product[]>([]);
    const loading = ref(false);
    const getProducts = async () => {
      loading.value = true;
      products.value = await apiGetProducts();
      loading.value = false;
    };
    getProducts();
    return {
      loading,
      products,
    };
  },
  methods: {
    addToCart(product: Product) {
      console.log("加入购物车");
    },
  },
});
</script>