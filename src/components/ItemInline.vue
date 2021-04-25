<template>
    <div className="contaiter main">
        <div className="wrap">
            <div>
                <img className="contaiter img" :src="require(`./img_item${render_Item.img}`)"/>
            </div>
            <div className="all">
                <div v-on:click="showDetailItem()" className="contaiter name">
                    <p>{{render_Item.name}}</p>
                </div>

                <div className="price">
                    <div className="priceOld">
                        <strike>{{render_Item.price}} ₽ </strike>
                    </div>
                    <div className="priceArrow">
                        >>>
                    </div>
                    <div className="priceNow">
                        {{  render_Item.price - (Math.round(render_Item.price / 100 * parseInt(render_Item.discont)))  }} ₽
                    </div>
                </div>

            </div>
        </div>
        <div  v-on:click="addToBasket()" className="centerFull buy">
            <div className="constractionA">
                <div className="constraction constraction1">

                </div>
                <div className="constraction constraction2">

                </div>
                <div className="constraction constraction3">

                </div>
                <div className="constraction constraction4">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemInline",
        props:{
            render_Item:{
                type: Object,
                default(){
                    return {}
                }
            },
        },
        methods:{
            addToBasket(){
                this.$store.dispatch('addBasket', this.render_Item);
            },
            showDetailItem(){
                this.$store.commit('showDetailItem', this.render_Item);
            },
        }
    }
</script>

<style scoped>
    .main{
        display: flex;

    }
    .wrap{
        background: #fc8507;
        border-right: 1px solid #eaeaea;
        flex: 1;
        display: flex;
        transition: ease-in-out 0.6s;
    }
    .img{
        height: 50px;
        width: 62px;
    }
    .name{
        padding: 3px;
        text-align: center;
        cursor: pointer;
    }
    .all{
        flex: 1;
    }
    .price{
        display: flex;
    }
    .priceNow, .priceOld, .priceArrow{
        flex: 1;
        text-align: center;
        font-size: 14pt;
        color: white;
    }
    .buy{
        width: 50px;
        background: #fc8507;
        transition: ease-in-out 0.3s;
        padding: 0px;
        position: relative;
        cursor: pointer;
    }
    .buy:hover{
        background: lightskyblue;
    }
    .buy:active{
        background: lightcoral;
    }
    .constraction1{
        position: absolute;

        top: 9px;
        left: 9px;

        width: 20px;
        height: 20px;
        border: 4px solid white;
        border-radius: 0 12px 12px 0;
    }
    .constraction2{
        position: absolute;

        bottom: 9px;
        left: 9px;

        width: 20px;
        height: 20px;
        border: 4px solid white;
        border-radius: 0 12px 12px 0;
    }
    .constraction3{
        top: calc(50% - 3px);
        right: 10px;

        position: absolute;
        width: 10px;
        height: 6px;
        background: white;
    }
    .constraction4{
        top: calc(50% - 10px);
        right: -8px;

        position: absolute;
        width: 0px;
        height: 0px;
        border: 10px solid transparent;
        border-left: 8px solid white;
    }
</style>
