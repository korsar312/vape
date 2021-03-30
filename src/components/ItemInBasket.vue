<template>
    <div style="position: relative">
        <div className="contaiter wrapper">
            <div v-for="item of renderCateg()" :key="item" className="param">
                <span>{{item[0]}}: {{item[1]}}</span>
            </div>
            <div className="param">
                Количество: {{render_Item[1]}}
            </div>
        </div>
        <div className="ButtonClose">
            <ButtonClose v-on:click="removeInBasket()"/>
        </div>
    </div>
</template>

<script>
    import ButtonClose from "./ButtonClose";
    export default {
        name: "ItemInBasket",
        components: {ButtonClose},
        data(){
            return{

            }
        },
        props:{
            render_Item:{
                type: Object,
                default(){
                    return {}
                }
            },
        },
        methods:{
            removeInBasket(){
               this.$store.dispatch('removeBasket', this.render_Item);
            },
            renderCateg(){
                let arr = []
                for(let i in this.render_Item[0]){
                    if(Object.keys(this.$store.state.rename).includes(i)){
                        arr.push([this.$store.state.rename[i], this.render_Item[0][i]])
                    }
                 }
                return arr
            }
        },
    }
</script>

<style scoped>
    .wrapper{
        width: 265px;
        transition: ease-in-out 0.5s;
        position: relative;

    }
    .wrapper:hover{
        background: #b3d4fc;
    }
    .param{
        margin: 5px 10px;
    }
    .ButtonClose{
        position: absolute;
        top: 0px;
        right: 0px;
    }
</style>