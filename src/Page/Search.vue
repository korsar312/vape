<template>
    <div class="centerLight">
        <div>

            <div class="adapt centerFull contaiter">
               <span>Результаты поиска</span>
            </div>
            <div class="contaiter">
                <div class="centerLight search_wrapper">
                    <div v-if="itemInSearch.length == 0" style="display: flex; justify-content: center; align-items: center;">
                        <H1>Поиск не дал результатов</H1>
                    </div>
                    <Item v-for="item in itemInSearch"
                          :key="item"
                          :render_Item="item"
                    />
                </div>
            </div>


        </div>
    </div>


</template>

<script>
    import Item from "../components/Item";


    export default {
        name: "Search",
        components: {Item},
        computed:{
            itemInSearch(){
                return this.$store.state.itemInSearch
            },
            valueSearch(){
                try {
                    return this.$route.params.value.split(' ').map(i=>i)
                }
                catch (e) {
                    return []
                }

            }

        },
        methods:{
            seatcher(){
                this.$store.state.itemInSearch = []

                let allItem = []
                for(let item in this.$store.state.item){
                    allItem.push(this.$store.state.item[item].items)
                }
                allItem = allItem.flat()

                if(this.valueSearch.length == 1 && this.valueSearch[0] == '…'){
                    this.$store.state.itemInSearch = allItem
                    return
                }

                this.valueSearch.forEach(i=>{
                    allItem.forEach(j=>{
                        Object.values(j).forEach(k=>{
                            if(typeof k == 'string'){
                                if(k.toLowerCase().includes(i) && !this.itemInSearch.includes(j)){
                                    this.$store.state.itemInSearch.push(j)
                                }
                            }
                        })
                    })
                })
            }
        },
        watch: {
            valueSearch: function(){
                this.seatcher()
            }
        },
        mounted() {
            this.seatcher()
        },
    }
</script>

<style scoped>
    .search_wrapper{
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 1140px;
        min-height: 50px;
        overflow: auto;
    }
    H1{
        font-size: 16pt;
    }
    .adapt{
        display: none;
    }
    @media all and (max-width: 1140px) {
        .search_wrapper {
            width: 820px;
        }
    }
    @media all and (max-width: 820px) {
        .search_wrapper{
            width: calc(100vw - 25px);
            max-height: calc((var(--vh, 1vh) * 100) - 135px);
        }
        .adapt{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 50px;
            font-size: 17pt
        }
    }

</style>