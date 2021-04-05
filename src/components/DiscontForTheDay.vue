<template>
    <div className="wrapper">
        <div>
            <ItemInline v-for="item in renderItem"
                   :key="item"
                   :render_Item="item"
            />
        </div>
    </div>
</template>

<script>
    import ItemInline from "./ItemInline";


    export default {
        name: "DiscontForTheDay",
        components: {ItemInline},
        data(){
            return{
                renderItem: this.$store.state.itemDiscont,
            }
        },
    }
</script>

<style scoped>
    .wrapper{
        overflow: auto;
        height: 200px;
    }

</style>