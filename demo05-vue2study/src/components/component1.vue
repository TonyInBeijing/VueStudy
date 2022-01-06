<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2 v-if="showProps">{{ helloMsg }}</h2>
        <h2 v-else>Props 被隐藏了</h2>
        <button @click="switchProps">打招呼</button>

        <h1>{{ carsNum }}</h1>
        <div>
            <input v-model="carName" placeholder="请输入您想买的车型" />
            <button @click="buyCars">我要买车</button>
        </div>

        <div v-for="(car,index) in cars" :key="car">
            <h2>车型：{{ car.name }} 购买时间：{{ car.time }}</h2>
            <button @click="sellCars(index)">卖车</button>
        </div>
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
                {
                    name: "bmw",
                    time: "2021-01"
                }
            ],
            times:[],
            carName: "",
        };
    },
    computed: {
        carsNum() {
            return "我还有" + this.cars.length + "辆车可以卖";
        }
    },
    watch: {
        carName() {
            console.log(this.carName);
            // console.log("我上一次买的车是" + oldName);
            // console.log("我又买了一辆车是" + newName);
        }
    },
    methods: {
        switchProps() {
            this.showProps = !this.showProps;
        },
        buyCars() {
            if (this.carName === "") {
                console.warn("车型不能为空！");
                return;
            }
            else {
                this.cars.push(this.carName);
                var myDate = new Date();
                this.times.push(myDate.toLocaleString( ));
            }
        },
        sellCars(index) {
            this.cars.splice(index, 1);
            this.times.splice(index,1);
        }
    },
}
</script>

<style>
</style>