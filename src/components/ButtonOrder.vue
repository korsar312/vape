<template>
    <button className="contaiter wrapper" v-on:click="show">
        Оформить
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
</style>