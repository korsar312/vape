<template>
    <div className="wrapper">
        <div className="back" v-on:click="show">
        </div>


        <div className="wrap">
            <div className="nameWindow">
                <div className="ButtonClose">
                    <ButtonClose v-on:click="show()"/>
                </div>
            </div>


                <div class="contaiter window">
                    <div className="window2">
                        <div className="ras wrapImg">
                            <span className=" contaiter name">{{item.name}}</span>
                            <img className="contaiter img" v-if="showDetail()" :src="require(`./img_item${item.img}`)"/>
                        </div>
                        <div className="ras param">

                            <H1>Характеристики</H1>
                            <div v-for="item of renderCateg()" :key="item">
                                <div className="ent">
                                    <div className="enti key">{{item[0]}}:</div>
                                    <div className="enti space"></div>
                                    <div className="enti val">{{item[1]}}</div>
                                </div>

                            </div>
                        </div>
                        <div v-if="item.descript" className="ras descr">
                            <H1>Описание</H1>
                             <span>{{item.descript}}</span>
                        </div>
                        <div className="ent2">
                            <div className="id">
                                <div>Стоимость</div>

                                <div class="price1" v-if="!Object.prototype.hasOwnProperty.call(item, 'discont')">₽ {{item.price}}</div>
                                <div class="price2" v-if="Object.prototype.hasOwnProperty.call(item, 'discont')">
                                    <div> <strike>₽ {{item.price}}</strike> </div>
                                    <div>₽ {{item.price - (Math.round(item.price / 100 * parseInt(item.discont)))}}</div>
                                </div>

                            </div>
                            <div className="spaces"></div>
                            <div className="id"><div>Артикул</div><div>{{item.id}}</div></div>
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
                            </div>
                        </div>
                    </div>
            </div>


        </div>
    </div>
</template>





<script>
    import ButtonClose from "./ButtonClose";
    export default {
        name: "ItemOpen",
        components: {ButtonClose},
        watch: {
            amount: function(){
                let word = String(this.amount).split('').map(i=>{
                    if(i>=0 && i<=9){return i}
                }).join('')
                word == 0 ? word = 1 : ''
                this.amount = Number(word)
                this.item.amount = Number(word)
                this.$store.commit('setCookie');
            }
        },
        computed:{
            item(){
                return this.$store.state.detailItem
            },
            amount(){
                return this.item.amount
            },
            buyCheck(){
                if(this.$store.state.itemInBasket.includes(this.item)){
                    return true
                }
                return false
            }
        },
        methods:{
            show(){
                this.$store.commit('showDetailItemOff');
            },
            showDetail(){
                return this.$store.state.showAny.showDetailItem
            },
            renderCateg(){
                let arr = []
                for(let i in this.$store.state.detailItem){
                    if(
                        i=='name'   ||
                        i=='price'  ||
                        i=='id'
                    ){continue}

                    if(Object.keys(this.$store.state.rename).includes(i)){
                        arr.push([this.$store.state.rename[i], this.$store.state.detailItem[i]])
                    }
                }
                return arr
            },

            addToBasket(){
                this.$store.dispatch('addBasket', this.item);
            },

            showDetailItem(){
                this.$store.commit('showDetailItem', this.item);
            },

            add(){
                this.item.amount++
            },

            del(){
                if(this.item.amount<=1){this.removeInBasket()}
                this.item.amount--
            },
            removeInBasket(){
                this.$store.dispatch('removeBasket', this.item);
            },
        }
    }
</script>





<style scoped>
    H1{
        text-align: center;
        font-size: 15pt;
        margin: 5px;
        font-weight: 600;
    }
    .wrapper{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: fixed;

        width: 100%;
        height: 100%;
        z-index: 100;
    }
    .back{
        width: 100%;
        height: 100%;
        opacity: 0.2;
        position: fixed;
        background: black;
    }
    .window{
        width: 400px;
        opacity: 1;
        z-index: 2;
        position: relative;
    }
    .window2{
        margin-bottom: 35px;
        overflow: auto;
    }
    .ras{
        margin: 15px;
        position: relative;
    }
    .name{
        font-weight: 900;
        position: absolute;
        top: -15px;
        left: 50%;
        -webkit-transform: translate(-50%, 0%);
        -ms-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        border-radius: 0 0 20px 20px;
        margin: 0;
        padding: 7px 15px 0px 15px;
        font-size: 16pt;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .img{
        width: 100%;
        margin: 0;
    }
    .ent{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .key{
        text-align: left;
        margin: 2px 0;
    }
    .val{
        text-align: right;
        margin: 2px 0;
    }
    .space{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin: 2px 0;
        border-bottom: 1px #cccccc dotted;
    }
    .spaces{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .ent2{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 10px 40px;
    }
    .price1{
        text-align: center;
        font-size: 16pt;
    }
    .price2{
        text-align: center;
        font-size: 12pt;
    }
    .id{
        text-align: center;
        font-size: 16pt;
    }
    .ButtonClose{
        position: absolute;
        top: 5px;
        right: 0px;
        z-index: 32;
    }
    .nameWindow{
        margin: 0 0 20px 0;
        position: relative
    }


    .buyOption{
        height: 40px;
        font-size: 13pt;
        position: absolute;
        bottom: 0;
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
        .wrapper{
            margin: 0px
        }
        .wrap{
            width: 100%;
            height:100%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }
        .window{
            width: calc(100% - 35px);
            height: calc(100% - 35px);
            margin: 0px;
            overflow: auto;
        }
        .window2{
            height: calc(100% - 35px);
        }
        .nameWindow{
            margin: 0;
        }
        .name{
            position: absolute;
            top: -15px;
            border-radius: 0 0 20px 20px;
            margin: 0;
            padding: 7px 15px 0px 15px;
            font-size: 16pt;
            text-align: center;
        }
        .img{
            width: 70vw;
            background-size:contain;
            -ms-flex-item-align: start;
            align-self: flex-start;
        }
        .wrapImg{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            height: auto;
            position: relative;
        }
        .ButtonClose{
            position: fixed;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: right;
            -ms-flex-pack: right;
            justify-content: right;
            top: 5px;
            left: calc(100vw - 35px);
        }

    }
</style>