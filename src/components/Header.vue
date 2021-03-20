<template>
    <header className='header'>
        <div className='header_forShop'>
            <div className='header_forShop_ header_forShop_loc'>
                Киров
            </div>
            <div className='header_forShop_'>
                Магазин
            </div>
            <div className='header_forShop_'>
                О нас
            </div>
            <div className='header_forShop_ header_forShop_num'>
                +7(916)-758-54-09
            </div>
        </div>

        <div className='header_forSite'>

            <router-link :to="{name: 'main'}">
                <div className='header_forSite_name'>
                    <img style="width: 400px; height: 50px; padding-top: 5px;" :src="require('../img/name.png')">
                </div>
            </router-link>

            <div className='header_forSite_basket'>
                <div className='header_forSite_basket_img'>
                    <router-link  :to="{ name: `basket` }">
                        <div className='header_forSite_basket_img2'>
                            <svg width="33" height="36" xmlns="http://www.w3.org/2000/svg">

                                <g>
                                    <title>background</title>
                                    <rect fill="none" id="canvas_background" height="38" width="35" y="-1" x="-1"/>
                                </g>
                                <g>
                                    <title>Layer 1</title>
                                    <path stroke="null" fill="#fc8507" id="svg_2" d="m23.758998,16.416775c0,0.406398 0.329234,0.734897 0.734897,0.734897s0.734897,-0.328499 0.734897,-0.734897c0,-1.621183 -1.318406,-2.939589 -2.939589,-2.939589s-2.939589,1.318406 -2.939589,2.939589c0,0.406398 0.329234,0.734897 0.734897,0.734897s0.734897,-0.328499 0.734897,-0.734897c0,-0.810592 0.659203,-1.469794 1.469794,-1.469794s1.469794,0.659203 1.469794,1.469794z"/>
                                    <path fill="#fc8507" id="svg_3" d="m9.334696,12.408741c-2.206,0 -4,1.794 -4,4c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-1.103 0.897,-2 2,-2s2,0.897 2,2c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-2.206 -1.794,-4 -4,-4z"/>
                                    <path stroke="null" fill="#fc8507" id="svg_4" d="m29.67229,8.496255l0,-7.460009l-28.200621,0l0,7.460009l-0.613057,0l0,24.511457l29.426735,0l0,-24.511457l-0.613057,0zm-1.532642,0l-3.175635,-3.679916l3.122912,-2.714377l0.359251,0l0,6.394293l-0.306528,0zm-20.537409,0l0,-3.730004c0,-0.012789 -0.007357,-0.024511 -0.008583,-0.0373c-0.003065,-0.034103 -0.012261,-0.066074 -0.02207,-0.099644c-0.006744,-0.02238 -0.006131,-0.045293 -0.016553,-0.066607c-0.005518,-0.011723 -0.016553,-0.020781 -0.022683,-0.032504c-0.016553,-0.029307 -0.039849,-0.054351 -0.063145,-0.080994c-0.017166,-0.019183 -0.026975,-0.043161 -0.047205,-0.060213l-2.631241,-2.287025l21.56244,0l-2.631241,2.287025c-0.019618,0.017051 -0.03004,0.04103 -0.047205,0.060213c-0.023296,0.026643 -0.045979,0.051687 -0.062532,0.080994c-0.006744,0.011723 -0.017166,0.020249 -0.023296,0.032504c-0.010422,0.021314 -0.009809,0.04476 -0.016553,0.066607c-0.010422,0.03357 -0.019618,0.065009 -0.02207,0.099644c-0.001226,0.012789 -0.008583,0.024511 -0.008583,0.0373l0,3.730004l-15.939481,0zm-3.065285,0l1.839171,-2.131964l0,2.131964l-1.839171,0zm20.23088,-2.131964l1.839171,2.131964l-1.839171,0l0,-2.131964zm-22.070051,-4.262329l0.359251,0l3.122912,2.714377l-3.175635,3.679916l-0.306528,0l0,-6.394293zm26.36145,29.840034l-26.974507,0l0,-22.380026l26.974507,0l0,22.380026z"/>
                                    <path stroke="null" fill="#fc8507" id="svg_5" d="m22.26521,16.479863c-0.439661,0 -0.796487,0.35603 -0.796487,0.796487l0,4.77892c0,3.073642 -2.500968,5.575407 -5.575407,5.575407s-5.575407,-2.501765 -5.575407,-5.575407l0,-4.77892c0,-0.440457 -0.356826,-0.796487 -0.796487,-0.796487s-0.796487,0.35603 -0.796487,0.796487l0,4.77892c0,3.952964 3.216213,7.168381 7.168381,7.168381s7.168381,-3.215417 7.168381,-7.168381l0,-4.77892c0,-0.440457 -0.356826,-0.796487 -0.796487,-0.796487z"/>
                                </g>
                            </svg>

                            <div className='header_forSite_basket_img3'>
                                <p>{{lengthBasket}}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div>
                <input placeholder="Поиск по сайту" className="header_forSite_search" type="search"/>
            </div>

        </div>
    </header>
</template>





<script>
    export default {
        name: "Header",
        computed:{
            lengthBasket(){
                return this.$store.state.itemInBasket.length
            }
        },
        data() {
            return {

            }
        },
    }
</script>





<style scoped>
header{
    box-shadow: 0px 5px 15px 5px rgba(34, 60, 80, 0.1);
    margin: 0  0 20px 0;
    color: white;
}
    .header_forShop{
        height: 40px;
        background: #fc8507;
        display: flex;
        Justify-content: center;
    }
        .header_forShop_{
            min-width: 280px;
            text-align: center;
            padding-top: 10px;
        }
        .header_forShop_loc{
            text-align: left;
        }
        .header_forShop_num{
            text-align: right;
        }
    .header_forSite{
        height: 60px;
        background: #fff;
        display: flex;
        Justify-content: center;
    }
        .header_forSite_name{

        }
        .header_forSite_search{
            background: #eaeaea;
            width: 250px;
            height: 40px;
            margin: 10px 0 0 20px;
            border-radius: 10px;
            border: none;
            padding: 0 20px;
        }
        .header_forSite_basket{
            width: 50px;
            margin: 8px 10px 8px 372px;
        }
            .header_forSite_basket_img{
                width: 41px;
                height: 40px;
                border: 2px solid #fc8507;
                border-radius: 10px;
                position: relative;
            }
                .header_forSite_basket_img2{
                    margin: 3px 5px;
                }
                .header_forSite_basket_img3{
                    background: white;
                    position: absolute;
                    bottom: -2px;
                    right: -2px;
                    width: 15px;
                    height: 15px;
                    border: 2px solid #fc8507;
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                    .header_forSite_basket_img3 p{
                        color: black;
                        font-size: 9pt;
                    }

</style>