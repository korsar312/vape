<template>
    <div style="position: relative">
        <div className="contaiter wrapper">
            <div v-for="item of renderCateg()" :key="item" className="param">
                <span>{{item[0]}}: {{item[1]}}</span>
            </div>

        </div>
        <button class="close" v-on:click="removeInBasket()">
            <div class="closeU close1"></div>
            <div class="closeU close2"></div>
        </button>
    </div>
</template>

<script>
    export default {
        name: "ItemInBasket",
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
                for(let i in this.render_Item){
                    if(Object.keys(this.$store.state.rename).includes(i)){
                        arr.push([this.$store.state.rename[i], this.render_Item[i]])
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
    .close{
        width: 30px;
        height: 30px;
        border: 2px solid white;
        background: red;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        right: 0px;

    }
    .closeU{
        width: 16px;
        height: 0px;
        border: 2px solid white;
        background: white;
        position: absolute;
        top: 11px;
        right: 3px;
        border-radius: 2px;
        transition: ease-in-out 0.5s;
    }

    .close1{
        transform: rotateZ(135deg);
    }

    .close2{
        transform: rotateZ(45deg);
    }
    .close:hover > .close1{
        transform: rotateZ(540deg);
    }
    .close:hover > .close2{
        transform: rotateZ(540deg);
    }
</style>