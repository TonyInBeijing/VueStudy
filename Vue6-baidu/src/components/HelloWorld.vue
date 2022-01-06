<template>
  <div class="hello">
    <ul>
      <li>
        <a
          href="https://news.baidu.com"
          target="_blank"
        >
          新闻
        </a>
      </li>
      <li>
        <a
          href="https://www.baidu.com"
          target="_blank"
        >
          网页
        </a>
      </li>
      <li>
        <a
          href="https://tieba.baidu.com/index.html"
          target="_blank"
        >
          贴吧
        </a>
      </li>
      <li>
        <a
          href="https://zhidao.baidu.com"
          target="_blank"
        >
          知道
        </a>
      </li>
      <li>
        <a
          href="https://wenku.baidu.com"
          target="_blank"
        > 
          文库
        </a>
      </li>
      <li>
        <a
          href="https://image.baidu.com"
          target="_blank"
        >
          图片
        </a>
      </li>
      <li>
        <a
          href="http://v.baidu.com"
          target="_blank"
        >
          视频
        </a>
      </li>
      <li>
        <a
          href="https://map.baidu.com"
          target="_blank"
        >
          地图
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #1e48b9;
}
</style>
