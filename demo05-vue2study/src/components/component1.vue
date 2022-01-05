<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2 v-if="showProps">{{ helloMsg }}</h2>
        <h2 v-else>Props 被隐藏了</h2>
        <h2 v-for="(car,index) in cars" :key="index">{{ car }}</h2>
        <button @click="switchProps">打招呼</button>
        <button @click="buyCars">买车</button>
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
            msg: "Hello Vue2",
            showProps: true,
            cars: [
                "Benz",
                "BMW",
                "Audi"
            ]
        };
    },
    methods: {
        switchProps() {
            this.showProps = !this.showProps;
        },
        buyCars() {
            this.cars.push("Toyota");
        }
    },
}
</script>

<style>
</style>