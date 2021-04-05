<template>
    <div class="product-wrap contaiter">
        <div class="product-item">

            <img :src="require(`./img_item${render_Item.img}`)"/>

            <div class="product-buttons">
                <div v-on:click="addToBasket()" type="button" class="button">В корзину</div>
            </div>
        </div>
        <div class="product-title">
            <a v-on:click="showDetailItem()">{{render_Item.name}}</a>
            <span v-if="!Object.prototype.hasOwnProperty.call(render_Item, 'discont')" class="product-price">₽ {{render_Item.price}}</span>
            <div v-if="Object.prototype.hasOwnProperty.call(render_Item, 'discont')" class="product-price">
                <div class="product-price1"> <strike>₽ {{render_Item.price}}</strike> </div>
                <div class="product-price2">-{{render_Item.discont}}</div>
                <div class="product-price3">₽ {{render_Item.price - (Math.round(render_Item.price / 100 * parseInt(render_Item.discont)))}}</div>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: "Item",
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
            addToBasket(){
                this.$store.dispatch('addBasket', this.render_Item);
            },
            showDetailItem(){
                this.$store.commit('showDetailItem', this.render_Item);
            },
        },
    }
</script>






<style scoped>
    .product-wrap {
        width: 180px;
        height: 190px;
        margin: 10px;
        background: white;
        padding: 0 0 20px;
        text-align: center;
        font-size: 14px;
        font-family: Lora;
        text-transform: uppercase;
    }
    .product-item {
        position: relative;
        overflow: hidden;
    }
    .product-wrap img {
        display: block;
        width: 100%;
    }
    .product-buttons {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .8);
        opacity: 0;
        transition: .3s ease-in-out;
    }
    .button {
        text-decoration: none;
        color: #c0a97a;
        font-size: 12px;
        width: 140px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        border: 2px solid #c0a97a;
        transform: translate(-50%, -50%) scale(0);
        transition: .3s ease-in-out;
        cursor: pointer;
    }
    .button:before {
        content: "\f07a";
        font-family: FontAwesome;
        margin-right: 10px;
    }
    .product-item:hover .product-buttons {
        opacity: 1;
    }
    .product-item:hover .button {
        transform: translate(-50%, -50%) scale(1);
    }
    .button:hover {
        background: black;
    }
    .product-title {
        color: #5e5e5e;
    }
    .product-title a {
        text-decoration: none;
        color: #2e2e2e;
        font-weight: 600;
        margin: 15px 0 5px;
        padding-bottom: 7px;
        display: block;
        position: relative;
        transition: .3s ease-in-out;
        cursor: pointer;
    }
    .product-title a:after {
        content: "";
        position: absolute;
        width: 40px;
        height: 2px;
        background: #2e2e2e;
        left: 50%;
        margin-left: -20px;
        bottom: 0;
        transition: .3s ease-in-out;
    }
    .product-title a:hover {
        color: #c0a97a;
    }
    .product-title:hover a:after {
        background: #c0a97a;
    }
    .product-price {
        font-size: 20px;
        color: #c0a97a;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-price1, .product-price3 {
        flex: 1;
    }
    .product-price2{
        font-size: 12pt;
        flex: 0.5;
    }
    @media all and (max-width: 820px) {

        
    }
</style>