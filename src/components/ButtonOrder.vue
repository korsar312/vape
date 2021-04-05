<template>
    <button className="contaiter wrapper" v-on:click="show">
        Оформить на сумму: {{totalPrice}} ₽
    </button>
</template>

<script>
    export default {
        name: "ButtonOrder",
        methods:{
            show(){
                this.$store.commit('show');
            },
        },
        computed: {
            totalPrice() {
                return this.$store.state.itemInBasket.reduce((s, c) => s += (c.price * c.amount), 0)
            },
        },
    }
</script>

<style scoped>
    .wrapper{
        color: white;
        width: 360px;
        height: 30px;
        margin: 5px 20px;
        background: #fc8507;
        border: none;
    }
    @media all and (max-width: 820px) {
        .wrapper{
            width: calc(100vw - 80px);
        }
    }
</style>