<template>
    <div className="wrapper">
        <div className="back" v-on:click="show">
        </div>


        <div className="window">
            <div className="nameWindow">
                <span className=" contaiter name">{{item.name}}</span>
                <div className="ButtonClose">
                    <ButtonClose v-on:click="show()"/>
                </div>
            </div>

            <div className="contaiter window">
                <div className="ras wrapImg">
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
                    <div className="price">
                        <div>Стоимость</div>

                        <div v-if="!Object.prototype.hasOwnProperty.call(item, 'discont')">₽ {{item.price}}</div>
                        <div v-if="Object.prototype.hasOwnProperty.call(item, 'discont')">
                            <div> <strike>₽ {{item.price}}</strike> </div>
                            <div>₽ {{item.price - (Math.round(item.price / 100 * parseInt(item.discont)))}}</div>
                        </div>

                    </div>
                    <div className="spaces"></div>
                    <div className="id"><div>Артикул</div><div>{{item.id}}</div></div>
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
        computed:{
            item(){
                return this.$store.state.detailItem
            }
        },
        methods:{
            show(){
                this.$store.commit('showDetailItemOff');
            },
            showDetail(){
                return this.$store.state.showDetailItem
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
            }
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
        display: flex;
        justify-content: center;
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
    .ras{
        margin: 15px;
        position: relative;
    }
    .name{
        text-align: center;
        font-size: 16pt;
        font-weight: 900;
        padding: 20px 15px 30px 15px;
        border-radius: 20px 20px 0px 00px;
        box-shadow: none;
        z-index: 32;
        position: relative;

    }
    .img{
        width: 100%;
        margin: 0;
    }
    .ent{
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
        flex: 1;
        margin: 2px 0;
        border-bottom: 1px #cccccc dotted;
    }
    .spaces{
        flex: 1;
    }
    .ent2{
        display: flex;
        margin: 10px 40px;
    }
    .price{
        text-align: center;
        font-size: 16pt;
    }
    .id{
        text-align: center;
        font-size: 16pt;
    }
    .ButtonClose{
        position: absolute;
        top: -30px;
        left: 0px;
        z-index: 32;
    }
    .nameWindow{
        margin: 0 0 20px 0;
        position: relative
    }

    @media all and (max-width: 820px) {
        .wrapper{
            margin: 0px
        }
        .window{
            width: 100%;
            height: 100%;
            margin: 0px;
            border-radius: 0;
            overflow: auto;
        }
        .nameWindow{
            margin: 0;
        }
        .name{
            position: absolute;
            top:0;
            right: 30px;
            border-radius: 0 0 0 20px;
            margin: 0;
            padding: 15px 15px 10px 10px;
            font-size: 5vw;
        }
        .img{
            width: 70vw;
            background-size:contain;
            align-self: flex-start;
        }
        .wrapImg{
            display: flex;
            justify-content: center;
            height: auto;
        }
        .ButtonClose{
            position: fixed;
            display: flex;
            justify-content: right;
            top: 0px;
            left: calc(100vw - 35px);
        }

    }

</style>