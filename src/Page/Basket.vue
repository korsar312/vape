<template>
    <div className="basket_wrapper">
        <div>
            <div className="buttonWrapper">
                <ButtonOrder/>
            </div>

            <div className="basket contaiter">
                <ItemInBasket v-for="item in items" :key="item" :render_Item="item"/>
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
    .basket_wrapper{
        display: flex;
        justify-content: center;
    }
    .basket{
        width: 1140px;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        min-height: 50px;
    }
    .item{
        width: 265px;
        height: 300px;
    }
    .buttonWrapper{
        text-align: center;
    }
</style>