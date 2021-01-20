import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// 引入vant组件
import 'vant/lib/index.css';
import { Toast } from 'vant';

const app = createApp(App);

// 添加全局方法
app.config.globalProperties.$toast = (msg: any) => {
    return Toast(msg);
}

app.use(router);
app.mount('#app');


