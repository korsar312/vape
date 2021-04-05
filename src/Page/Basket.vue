<template>
    <div className="basket_wrapper">
        <div>
            <div className="buttonWrapper">
                <ButtonOrder/>
            </div>

            <div className="contaiter adapt" style="margin-bottom: 10px">
                <div className="basket">
                    <div style="display: flex; justify-content: center; align-items: center; height: 45px"> <span style="font-size: 17pt">Корзина</span> </div>
                </div>
            </div>
            <div className="contaiter" style="margin-bottom: 100px">
                <div className="basket">
                    <div v-if="items.length==0" style="display: flex; justify-content: center; align-items: center; height: 45px"> <span style="font-size: 14pt">В корзине ничего нет :(</span> </div>
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
    .basket_wrapper{
        display: flex;
        justify-content: center;
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
            width: calc(100vw - 20px);

            overflow: auto;
        }
        .basket_wrapper{
            display: block;
        }
        .wrapper{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 95px;
            margin: 0;
            border-radius: 0;
            font-size: 6vw;
            z-index: 11;
        }
    }
</style>