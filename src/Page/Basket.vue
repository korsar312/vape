<template>
    <div className="centerLight basket_wrapper">
        <div>
            <div className="buttonWrapper">
                <ButtonOrder v-show="$store.state.itemInBasket.reduce((s, c) => s += (c.price * c.amount), 0) != 0"/>
            </div>

            <div className="contaiter adapt" style="margin-bottom: 10px">
                <div className="basket">
                    <div class="centerFull adapty">
                        <span style="font-size: 17pt">Корзина</span>
                    </div>
                </div>
            </div>
            <div className="contaiter" style="margin-bottom: 100px">
                <div className="basket basket_wrap">
                    <div v-if="items.length==0" class="centerFull" style="height: 45px"> <span style="font-size: 14pt">В корзине ничего нет :(</span> </div>
                    <ItemInBasket v-for="item in items" :key="item" :render_Item="item"/>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
    import ButtonOrder from "../components/ButtonOrder";
    import ItemInBasket from "../components/ItemInBasket";


    export default {
        name: "Basket",
        components: {
            ItemInBasket,
            ButtonOrder

        },
        data(){
            return{
                items: this.$store.state.itemInBasket,
            }
        },
    }
</script>




<style scoped>
    .adapt{
        display: none;
    }
    .basket{
        width:1140px;
        min-height: 50px;
    }
    .buttonWrapper{
        text-align: center;
    }
    @media all and (max-width: 1140px) {
        .basket {
            width: 820px;
        }
    }
    @media all and (max-width: 820px) {
        .adapt{
            display: block;
        }
        .basket{
            width: calc(100vw - 25px);
            overflow: auto;
        }
        .basket_wrap{
            max-height: calc((var(--vh, 1vh) * 100) - 220px);
        }
        .wrapper{
            position: fixed;
            bottom: 52px;
            left: 0;
            width: 100%;
            height: 85px;
            margin: 0;
            border-radius: 0;
            font-size: 6vw;
            z-index: 3;
        }
        .adapty{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 50px;
            font-size: 17pt
        }
    }
</style>
