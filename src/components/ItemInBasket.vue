<template>
    <div className="contaiter main">
        <div className="wrap">
            <div class="centerFull adapt">
                <img className="contaiter img" :src="require(`./img_item${render_Item.img}`)"/>
            </div>
            <div className="all">
                <div v-on:click="showDetailItem()" className="contaiter name">
                    <p>{{render_Item.name}}</p>
                </div>
                <div className="price">
                    <div className="detail">Цена: {{render_Item.price}}</div>
                </div>

            </div>
        </div>
        <div v-on:click="removeInBasket()" className="buy buyR">
            <div className="remove"></div>
        </div>
        <div className="buy buyD" v-on:click="(del())">
            <div className="min"></div>
        </div>
        <div className="buy buyC">
            <input className="current" v-model="amount"/>
        </div>
        <div className="buy buyA" v-on:click="(add())">
            <div className="max"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemInBasket",
        data(){
            return{
                obj: this.render_Item,
                amount: this.render_Item.amount,
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
        watch: {
            amount: function(){
                let word = String(this.amount).split('').map(i=>{
                    if(i>=0 && i<=9){return i}
                }).join('')
                word == 0 ? word = 1 : ''
                this.amount = Number(word)
                this.obj.amount = Number(word)
                this.$store.commit('setCookie');
            }
        },
        methods:{
            removeInBasket(){
               this.$store.dispatch('removeBasket', this.render_Item);
            },
            showDetailItem(){
                this.$store.commit('showDetailItem', this.render_Item);
            },
            add(){
                this.amount++
            },
            del(){
                this.amount--
            },
        },
    }
</script>

<style scoped>
    .main{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        min-height: 70px;
    }
    .wrap{
        background: #fc8507;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition: ease-in-out 0.6s;
        -o-transition: ease-in-out 0.6s;
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
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .price{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: left;
        -ms-flex-pack: left;
        justify-content: left;
    }
    .detail{
        text-align: center;
        font-size: 12pt;
        color: white;
        padding: 0 0 5px 10px;
    }
    .buy{
        border-left: 1px solid #eaeaea;
        background: #fc8507;
        -webkit-transition: ease-in-out 0.3s;
        -o-transition: ease-in-out 0.3s;
        transition: ease-in-out 0.3s;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        padding: 5px;

    }
    .buy:hover{
        background: lightskyblue;
    }
    .buy:active{
        background: lightcoral;
    }
    .buyC{
        cursor: auto;
    }
    .buyC:hover{
        background: #fc8507;
    }
    .buyR:hover{
        background: red;
    }
    .remove{
        width: 16px;
        height: 4px;
        background: white;
        position: relative;
        -webkit-transform: rotateZ(45deg);
        -ms-transform: rotate(45deg);
        transform: rotateZ(45deg);
        border-radius: 10px;

    }
    .remove:after{
        position: absolute;
        left: 6px;
        top: -6px;
        content: "";
        width: 4px;
        height: 16px;
        background: white;
        border-radius: 10px;
        border-radius: 10px;

    }
    .min{
        width: 16px;
        height: 4px;
        background: white;
        border-radius: 10px;

    }
    .current{
        text-align: center;
        width: 20px;
        border-radius: 5px;
        border: none;
        padding: 5px;
    }
    .max{
        width: 16px;
        height: 4px;
        background: white;
        position: relative;
        border-radius: 10px;

    }
    .max:after{
        position: absolute;
        left: 6px;
        top: -6px;
        content: "";
        width: 4px;
        height: 16px;
        background: white;
        border-radius: 10px;
    }
    @media all and (max-width: 345px) {
        .adapt{
            display: none;
        }
    }
</style>