<template>
  <div id="app">
    <div>
      <img id="logo" @click="changesite" src="./assets/baidu.png" />
    </div>
    <router-view />
    <div>
      <input v-model="inputItem" id="search" />
      <button @click="searchItem">百度一下</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      inputItem: "",
    };
  },
  methods: {
    changesite() {
      window.location.replace("https://www.baidu.com");
    },
    searchItem(inputItem) {
      var url = "https://www.baidu.com/s?ie=utf-8&wd=" + this.inputItem;
      window.location.replace(url);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#search {
  height: 20px;
  width: 480px;
}
#logo {
  height: 70px;
  width: 200px;
}
</style>
