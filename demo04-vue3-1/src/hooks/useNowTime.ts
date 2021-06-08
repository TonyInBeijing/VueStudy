import { ref } from 'vue';
const nowTime = ref("00:00:00");
const getNowTime = () => {
    const now = new Date();
    const hour =
        now.getHours() < 10 ? "0" + now.getHours() : now.getHours().toString();
    const min =
        now.getMinutes() < 10
            ? "0" + now.getMinutes()
            : now.getMinutes().toString();
    const sec =
        now.getSeconds() < 10
            ? "0" + now.getSeconds()
            : now.getSeconds().toString();
    nowTime.value = hour + ":" + min + ":" + sec;
    setTimeout(getNowTime, 1000);
}
export { nowTime, getNowTime };