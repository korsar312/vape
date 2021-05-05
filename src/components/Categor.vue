<template>

    <div className='shop_shop_filt_category '>
        <p className="p_text" v-on:click="e=>landCategor(e)">{{categ_data[1]}}</p>

        <span className=" shop_shop_filt_category_arrowON">
        </span>

        <div className='shop_shop_filt_category_inner'>
            <div className='inner innerON' v-for="item in innerCategor()" :key="item">
                <input type="checkbox" v-bind:id="categ_data[0] +' '+ item" v-bind:name="categ_data[0]" v-bind:value="item" className="inputFilter">
                <label v-bind:for="categ_data[0] +' '+ item">{{item}}</label>
            </div>
        </div>
    </div>

</template>





<script>
    export default {
        name: "Categor",
        props:{
            categ_data:{
                type: String,
                default(){
                    return ''
                }
            },
            item_data:{
                type: Object,
                default(){
                    return {}
                }
            },
        },
        methods:{
            innerCategor(){
                let set = new Set()
                this.item_data.items.forEach(i=>{
                    set.add(i[this.categ_data[0]])
                })
                return Array.from(set).sort((a,b)=>parseInt(b)-parseInt(a))
            },
            landCategor(e){
                e.target.parentElement.querySelectorAll('.inner').forEach(i=>{i.classList.toggle('innerON')})
                e.target.parentElement.querySelector('.shop_shop_filt_category_arrowON').classList.toggle('shop_shop_filt_category_arrow')
            }
        }
    }
</script>





<style scoped>

    .shop_shop_filt_category_arrowON{
        height: 8px;
        width: 8px;
        position: absolute;
        border-right: 1px solid #222222;
        border-bottom: 1px solid #222222;
        left: 34px;
        top: 17px;
        -webkit-transform: rotateZ(45deg);
        -ms-transform: rotate(45deg);
        transform: rotateZ(45deg);
    }
    .shop_shop_filt_category_arrow{
        top: 22px;
        -webkit-transform: rotateZ(225deg);
        -ms-transform: rotate(225deg);
        transform: rotateZ(225deg);
    }
    .shop_shop_filt_category_inner{
    }

    .inner{
        height: 15px;
        opacity: 1;
        -webkit-transition: height ease-in-out 0.3s, opacity ease-in-out 0.3s 0.3s, margin ease-in-out 0.3s;
        -o-transition: height ease-in-out 0.3s, opacity ease-in-out 0.3s 0.3s, margin ease-in-out 0.3s;
        transition: height ease-in-out 0.3s, opacity ease-in-out 0.3s 0.3s, margin ease-in-out 0.3s;
        margin: 10px 20px;
    }
    .innerON{
        height: 0px;
        opacity: 0;
        -webkit-transition: height ease-in-out 0.3s 0.3s, opacity ease-in-out 0.3s, margin ease-in-out 0.3s 0.3s;
        -o-transition: height ease-in-out 0.3s 0.3s, opacity ease-in-out 0.3s, margin ease-in-out 0.3s 0.3s;
        transition: height ease-in-out 0.3s 0.3s, opacity ease-in-out 0.3s, margin ease-in-out 0.3s 0.3s;
        margin: 0px;
    }
    .inner label{
        margin: 0 5px;
    }

    .shop_shop_filt_category:hover{
        cursor: auto;
    }
    .shop_shop_filt_category p{
        padding: 0px 0 0px 0px;
        padding: 17px 0 17px 50px;;
        cursor: pointer;
    }
</style>