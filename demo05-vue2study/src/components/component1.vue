<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>{{ helloMsg }}</h2>
        <button @click="sayHello">打招呼</button>
    </div>
</template>

<script>
export default {
    name: "Component1",
    props: [
        "helloMsg"
    ],
    data() {
        return {
            msg: "Hello Vue2"
        };
    },
    methods: {
        sayHello() {
            this.msg += "!";
        }
    },
}
</script>

<style>
</style>