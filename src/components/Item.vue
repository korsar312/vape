<template>
    <div class="contaiter card">
        <div v-show = "GetOutListener" >
            <div class="centerLight img">
                <img :src="require(`./img_item${render_Item.img}`)"/>
                <div v-on:click="showDetailItem()" class="centerFull name">
                    <div  class="centerFull">{{render_Item.name}}</div>
                </div>
            </div>
            <div class="buyOption">
                <div class="buy">
                    <div v-on:click="del()" class="B A"><div class="min"></div></div>
                    <div class="C"></div>
                    <div class="B">{{amount}}</div>
                    <div class="C"></div>
                    <div v-on:click="add()" class="B A"><div class="max"></div></div>
                </div>
                <div class="buy" :class="{ out: buyCheck }">
                    <div v-on:click="addToBasket()" id="buy" class="B A">
                        <p>Купить</p>
                        <p v-if="!render_Item.discont" class="price">{{render_Item.price}}р</p>
                        <p v-if="render_Item.discont" class="price"><strike>{{render_Item.price}}р</strike> &#10146; {{render_Item.price - (Math.round(render_Item.price / 100 * parseInt(render_Item.discont)))}}р</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>



<script>
    export default {
        name: "Item",
        data(){
            return{
                GetOutListener: false,
                obj: this.render_Item,
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
        computed:{
            amount(){
                return this.render_Item.amount
            },
            buyCheck(){
                if(this.$store.state.itemInBasket.includes(this.render_Item)){
                    return true
                }
                return false
            }
        },
        mounted() {
            this.ListenerHeightEl()
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
            ListenerHeightEl(){
                this.thisHeight = Math.round(this.$el.getBoundingClientRect().top)
                if(this.$store.state.heightBrouser + 400 > this.thisHeight){
                    this.GetOutListener = true
                    clearInterval(check)
                }
                let check = setInterval((th = this)=>{
                    th.thisHeight = Math.round(th.$el.getBoundingClientRect().top)
                    if(th.$store.state.heightBrouser + 400 > th.thisHeight){
                        th.GetOutListener = true
                        clearInterval(check)
                    }
                }, 100)
            },

            addToBasket(){
                this.$store.dispatch('addBasket', this.render_Item);
            },

            showDetailItem(){
                this.$store.commit('showDetailItem', this.render_Item);
            },

            add(){
                this.obj.amount++
            },

            del(){
                if(this.obj.amount<=1){this.removeInBasket()}
                this.obj.amount--
            },
            removeInBasket(){
                this.$store.dispatch('removeBasket', this.render_Item);
            },
        },
    }
</script>






<style scoped>

    .card{
        min-width: 130px;
        width: 130px;
        min-height: 150px;
        height: 150px;
        border-radius: 15px;
        position: relative;
    }

    .img{
        height: 115px;
    }
        .img img{
            height: 100%;
        }
        .name{
            background: white;
            position: absolute;
            top: calc(0px);
            color: black;
            width: calc(100%);
            padding: 2px 5px;
            opacity: 0.6;
            transition: ease-in-out 0.3s;
            cursor: pointer;
            text-align: center;
            font-weight: 900;
        }

        .img:hover > .name{
            opacity: 1;
        }
    .buyOption{
        height: 40px;
        font-size: 13pt;
        position: absolute;
        bottom: 0px;
        width: 100%;
        overflow: hidden;
    }
        .buy{
            bottom: 0px;
            position: absolute;

            width: 100%;
            height: 35px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
            box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
            display:-webkit-box;
            display:-ms-flexbox;
            display:flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border-radius: 0 0 15px 15px;
            -webkit-transition: ease-in-out 0.2s;
            -o-transition: ease-in-out 0.2s;
            transition: ease-in-out 0.2s;

        }
        .price{
            font-size: 12pt;
            padding: 0px 0px 2px 0px;
        }
        .out{
            bottom: -35px;
        }
            .B{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                flex-direction: column;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: colum;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack:center;
                -ms-flex-pack:center;
                justify-content:center;

                background: rgb(252,133,7);
                height: 100%;
                color: #fff;
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                text-align: center;
                -webkit-transition: ease-in-out 0.2s;
                -o-transition: ease-in-out 0.2s;
                transition: ease-in-out 0.2s;
            }
            .C{
                width: 1px;
                height: 100%;
                background: #cdcdcd
            }
            .A{
                cursor: pointer;
            }
            .A:hover{
                background: lightskyblue;
            }
            .A:active{
                background: lightcoral;
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
    .min{
        width: 16px;
        height: 4px;
        background: white;
        border-radius: 10px;

    }

    @media all and (max-width: 820px) {
        .name{
            opacity: 0.8;
        }
    }
    @media all and (max-width: 420px) {
        .card{
            transform: scale(0.8);
            margin: -10px -10px;
        }
    }
</style>
