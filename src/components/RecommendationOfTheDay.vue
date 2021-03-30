<template>
    <div style="display: flex; justify-content: center">


        <carousel :settings="settings"  style="width: 820px;">
            <slide v-for="slide in renderItem" :key="slide">

                <Item :render_Item="slide" />

            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>

    </div>
</template>

<script>
    import Item from "./Item";
    import 'vue3-carousel/dist/carousel.css';
    import {Carousel, Navigation, Slide} from "vue3-carousel";

    export default {
        name: "RecommendationOfTheDay",
        components: {
            Item,
            Carousel,
            Slide,
            Navigation,
        },
        data(){
            return{
                settings: {
                    itemsToShow: 4,
                    snapAlign: 'left',
                    wrapAround: true,
                    transition: 1000,
                },
            }
        },
        computed: {
            renderItem(){
                let date = new Date()
                let date1 = '' + date.getFullYear() + date.getMonth() + date.getDate()
                let date2 = date1
                let allItems = Object.values((this.$store.state.item)).map(i=>i.items).flat().sort(()=>this.mulberry32(--date1)()-this.mulberry32(++date2)())
                allItems.splice(12)
                return allItems
            },
        },
        methods:{
            mulberry32(a) {
                return function() {
                    let t = a += 0x6D2B79F5;
                    t = Math.imul(t ^ t >>> 15, t | 1);
                    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
                    return ((t ^ t >>> 14) >>> 0) / 4294967296;
                }
            }
        },
    }
</script>

<style scoped>
    .product-wrap {
        min-height:210px;
    }
</style>