<template>
    <div className='Catal_shop '>
        <div className='Catal_shop_shop'>
            <div className='Catal_shop_shop_filt contaiter'>
                <div className='shop_shop_filt_name'>
                    <p>Фильтр</p>
                </div>


                <div className='Catal_shop_shop_filt_category '>
                    <p className="p_text" v-on:click="e=>landCategor(e)">Цена</p>

                    <span className="Catal_shop_shop_filt_category_arrowON ">
                    </span>

                    <div className="Catal_inner Catal_innerON">
                        <span>от: </span><input className="contaiter Catal_contaiter2" type="number" min="100" step="any" />
                    </div>
                    <div className="Catal_inner Catal_innerON">
                        <span>до: </span><input className="contaiter Catal_contaiter2" type="number" min="100" step="any" />
                    </div>
                </div>


                <Categor v-for="item in renderCateg"
                         :key="item"
                         :categ_data="item"
                         :item_data="obj"
                />

                <button v-on:click="calcFiltObj()" className="contaiter" type="button">Поехали</button>
            </div>

            <div  className='contaiter Catal_shop_shop_item'>
                <div className="Catal_wordpage">
                    <Item v-for="item in renderItem"
                          :key="item"
                          :render_Item="item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>


========================================================================================================================


<script>
    import Item from '../components/Item';
    import Categor from '../components/Categor';


    export default {
        name: "Catalogue_liq",
        data() {
            return {
                obj: this.$store.state.item.pods,
                renderItem: [],
            }
        },
        mounted() {
            this.renderItem = this.obj.items()
        },
        components: {
            Item,
            Categor
        },
        computed:{
            renderCateg(){return this.obj.categ()},
        },
        methods:{
            landCategor(e){
                e.target.parentElement.querySelectorAll('.Catal_inner').forEach(i=>{i.classList.toggle('Catal_innerON')})
                e.target.parentElement.querySelector('.Catal_shop_shop_filt_category_arrowON').classList.toggle('Catal_shop_shop_filt_category_arrow')
            },
            calcFiltObj(){
                this.renderItem.splice(0)
                let arr = []
                document.body.querySelectorAll(".inputFilter").forEach(i=>{
                    if(i.checked) {
                        this.obj.items().filter(j=>{
                            if(j[i.name] == i.value){
                                arr.push(j)
                            }
                        })
                    }
                })
                if(arr.length == 0){this.renderItem= this.obj.items().slice()}
                else{this.renderItem = arr.slice()}
            },
        }
    }
</script>


========================================================================================================================


<style>

</style>
