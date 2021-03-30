<template>
    <div class="wrapper">
        <div class="contaiter search_wrapper">
            <div v-if="itemInSearch.length == 0">
                <H1>Поиск не дал результатов</H1>
            </div>
            <Item v-for="item in itemInSearch"
                  :key="item"
                  :render_Item="item"
            />
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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 1140px;
    }
    .wrapper{
        display: flex;
        justify-content: center;
    }
    H1{
        font-size: 16pt;
        margin: 10px;
    }
</style>