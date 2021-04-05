<template>
    <main>
        <div className='main'>
            <div class='main_filtConteiner contaiter' :class="{hideCateg: hideCateg}">

                <div v-on:click="hideCateg=!hideCateg" className='main_filtConteiner1140'>
                    <div class='main_filtConteinerConstruct' :class="{main_filtConteinerConstructOff: hideCateg}">

                    </div>
                </div>

                <div className='shop_shop_filt_name'>
                    <p>Категории</p>
                </div>


                <router-link v-for="items in category" :key="items.id" :to="items.link()">
                    <div className='shop_shop_filt_category'>
                        <p>{{items.name()}}</p>
                        <span className='shop_shop_filt_category_main_arrow '></span>
                    </div>
                </router-link>


            </div>
            <div className='main_mainConteiner'>
                <div className='main_mainConteiner_top'>
                    <div className='main_mainConteiner_top_ad contaiter'>

                        <carousel :settings="settings">
                            <slide v-for="slide in ['./img/el.jpg','./img/el.jpg','./img/el.jpg']" :key="slide">
                                <div>
                                    <img className='carus' :src="require(`${slide}`)"/>
                                    <div className="opaci"></div>
                                </div>
                            </slide>

                            <template #addons>
                                <navigation />
                                <pagination />
                            </template>
                        </carousel>

                    </div>
                    <div className='contaiter main_mainConteiner_top_stock'>
                        <DiscontForTheDay/>
                    </div>
                </div>
                <div className='main_mainConteiner_mid'>
                    <div className='contaiter main_mainConteiner_mid_sell'>
                        <RecommendationOfTheDay/>
                    </div>
                </div>
                <div className='main_mainConteiner_bot'>
                    <div className='main_mainConteiner_bot_hel'>

                        <div className='contaiter'>
                            <div className='main_mainConteiner_bot_hello'>
                                <div className='main_mainConteiner_bot_hello_master'>
                                    <img :src="require(`../img/master.jpg`)"/>
                                </div>
                                <div className='main_mainConteiner_bot_hello_say'>
                                    <h1>Спасибо</h1>
                                    <p>за выбор именно нашего интернет-магазина! <br/><br/>Здесь вам предложат лучшую цену в городе.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='main_mainConteiner_bot_acc '>
                        <div className='main_mainConteiner_bot_a contaiter'>

                            <div className='main_mainConteiner_bot_acc_wrapper'>
                                <div className='main_mainConteiner_bot_acc_wrapper_mainBack'>
                                    <div className='main_mainConteiner_bot_acc_wrapper_mainBack_name'>
                                        <H1>Корзина</H1>
                                    </div>
                                    <div className='main_mainConteiner_bot_acc_wrapper_mainBack_all'>
                                        <p>Всего товаров: {{totalItem}}шт.</p>
                                    </div>
                                </div>
                                <div className='main_mainConteiner_bot_acc_wrapper_img'>
                                    <router-link  :to="{ name: `basket` }">
                                    <div className='main_mainConteiner_bot_acc_wrapper_img_amound'>
                                        <p>{{lengthBasket}}</p>
                                    </div>
                                    <svg id="main_mainConteiner_bot_acc_wrapper_img_svg"  width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                                        <g><title>background</title>
                                            <rect fill="none" height="402" width="582" y="-1" x="-1"/></g>
                                        <g><title fill="#fc8507">Layer 1</title>
                                            <path fill="#fc8507" id="svg_2" d="m59,16l0,-14l-58,0l0,14l-1,0l0,37.259c0,2.614 2.127,4.741 4.742,4.741l50.517,0c2.614,0 4.741,-2.127 4.741,-4.741l0,-37.259l-1,0zm-2.5,0l-5.18,
                                            -6.906l5.094,-5.094l0.586,0l0,12l-0.5,0zm-45.5,0l0,-7c0,-0.024 -0.012,-0.046 -0.014,-0.07c-0.005,-0.064 -0.02,-0.124 -0.036,-0.187c-0.011,-0.042 -0.01,-0.085 -0.027,-0.125c-0.009,
                                            -0.022 -0.027,-0.039 -0.037,-0.061c-0.027,-0.055 -0.065,-0.102 -0.103,-0.152c-0.028,-0.036 -0.044,-0.081 -0.077,-0.113l-4.292,-4.292l47.172,0l-4.292,4.292c-0.032,0.032 -0.049,
                                            0.077 -0.077,0.113c-0.038,0.05 -0.075,0.097 -0.102,0.152c-0.011,0.022 -0.028,0.038 -0.038,0.061c-0.017,0.04 -0.016,0.084 -0.027,0.125c-0.017,0.063 -0.032,0.122 -0.036,0.187c-0.002,
                                            0.024 -0.014,0.046 -0.014,0.07l0,7l-38,0zm-5,0l3,-4.001l0,4.001l-3,0zm45,-4.001l3,4.001l-3,0l0,-4.001zm-48,-7.999l0.586,0l5.094,5.094l-5.18,6.906l-0.5,0l0,-12zm55,49.259c0,1.512 -1.23,
                                            2.741 -2.742,2.741l-50.516,0c-1.512,0 -2.742,-1.229 -2.742,-2.741l0,-35.259l56,0l0,35.259z"/>
                                            <path fill="#fc8507" id="svg_3" d="m42,24c-0.552,0 -1,0.447 -1,1l0,6c0,6.065 -4.935,11 -11,11s-11,-4.935 -11,-11l0,-6c0,-0.553 -0.448,-1 -1,-1s-1,0.447 -1,1l0,6c0,7.168 5.832,13 13,13s13,-5.832 13,-13l0,-6c0,-0.553 -0.448,-1 -1,-1z"/>
                                            <path fill="#fc8507" id="svg_4" d="m20,25c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-2.206 -1.794,-4 -4,-4s-4,1.794 -4,4c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-1.103 0.897,-2 2,-2s2,0.897 2,2z"/>
                                            <path fill="#fc8507" id="svg_5" d="m42,21c-2.206,0 -4,1.794 -4,4c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-1.103 0.897,-2 2,-2s2,0.897 2,2c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-2.206 -1.794,-4 -4,-4z"/></g>
                                    </svg>
                                        </router-link>
                                </div>
                            </div>

                            <ButtonOrder/>

                        </div>
                    </div>


                    <div className='main_mainConteiner_bot_acc_wrapper_img main_mainConteiner_bot_acc_wrapper_imgAdapt'>
                        <router-link  :to="{ name: `basket` }">
                            <div className='main_mainConteiner_bot_acc_wrapper_img_amound'>
                                <p>{{lengthBasket}}</p>
                            </div>
                            <svg id="main_mainConteiner_bot_acc_wrapper_img_svg"  width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                                <g><title>background</title>
                                    <rect fill="none" height="402" width="582" y="-1" x="-1"/></g>
                                <g><title fill="#fc8507">Layer 1</title>
                                    <path fill="#fc8507" id="svg_2" d="m59,16l0,-14l-58,0l0,14l-1,0l0,37.259c0,2.614 2.127,4.741 4.742,4.741l50.517,0c2.614,0 4.741,-2.127 4.741,-4.741l0,-37.259l-1,0zm-2.5,0l-5.18,
                                            -6.906l5.094,-5.094l0.586,0l0,12l-0.5,0zm-45.5,0l0,-7c0,-0.024 -0.012,-0.046 -0.014,-0.07c-0.005,-0.064 -0.02,-0.124 -0.036,-0.187c-0.011,-0.042 -0.01,-0.085 -0.027,-0.125c-0.009,
                                            -0.022 -0.027,-0.039 -0.037,-0.061c-0.027,-0.055 -0.065,-0.102 -0.103,-0.152c-0.028,-0.036 -0.044,-0.081 -0.077,-0.113l-4.292,-4.292l47.172,0l-4.292,4.292c-0.032,0.032 -0.049,
                                            0.077 -0.077,0.113c-0.038,0.05 -0.075,0.097 -0.102,0.152c-0.011,0.022 -0.028,0.038 -0.038,0.061c-0.017,0.04 -0.016,0.084 -0.027,0.125c-0.017,0.063 -0.032,0.122 -0.036,0.187c-0.002,
                                            0.024 -0.014,0.046 -0.014,0.07l0,7l-38,0zm-5,0l3,-4.001l0,4.001l-3,0zm45,-4.001l3,4.001l-3,0l0,-4.001zm-48,-7.999l0.586,0l5.094,5.094l-5.18,6.906l-0.5,0l0,-12zm55,49.259c0,1.512 -1.23,
                                            2.741 -2.742,2.741l-50.516,0c-1.512,0 -2.742,-1.229 -2.742,-2.741l0,-35.259l56,0l0,35.259z"/>
                                    <path fill="#fc8507" id="svg_3" d="m42,24c-0.552,0 -1,0.447 -1,1l0,6c0,6.065 -4.935,11 -11,11s-11,-4.935 -11,-11l0,-6c0,-0.553 -0.448,-1 -1,-1s-1,0.447 -1,1l0,6c0,7.168 5.832,13 13,13s13,-5.832 13,-13l0,-6c0,-0.553 -0.448,-1 -1,-1z"/>
                                    <path fill="#fc8507" id="svg_4" d="m20,25c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-2.206 -1.794,-4 -4,-4s-4,1.794 -4,4c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-1.103 0.897,-2 2,-2s2,0.897 2,2z"/>
                                    <path fill="#fc8507" id="svg_5" d="m42,21c-2.206,0 -4,1.794 -4,4c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-1.103 0.897,-2 2,-2s2,0.897 2,2c0,0.553 0.448,1 1,1s1,-0.447 1,-1c0,-2.206 -1.794,-4 -4,-4z"/></g>
                            </svg>
                        </router-link>
                    </div>


                </div>
            </div>
        </div>

        <div className="recom">
            <div className="recom_recom contaiter">
                <H1 style="text-align: center; font-size: 25pt">ДАННЫЙ САЙТ НИЧЕГО НЕ ПРОДАЕТ,<br/> ТАК КАК БЫЛ СОЗДАН ДЛЯ ТЕСТОВ. </H1>
            </div>
        </div>
    </main>
</template>





<script>
    import 'vue3-carousel/dist/carousel.css';
    import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
    import ButtonOrder from "../components/ButtonOrder";
    import RecommendationOfTheDay from "../components/RecommendationOfTheDay";
    import DiscontForTheDay from "../components/DiscontForTheDay";


    export default {
        name: "Main",
        data() {
            return {
                hideCateg:true,
                settings: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                    wrapAround: true,
                    transition: 1000,
                },
                category: this.$store.state.item,
            }
        },
        computed:{
            lengthBasket(){
                return this.$store.state.itemInBasket.length
            },
            totalItem(){
                return this.$store.state.itemInBasket.reduce((sum, current)=>sum+= +current.amount,0)
            }
        },
        components: {
            DiscontForTheDay,
            RecommendationOfTheDay,
            ButtonOrder,
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
    }
</script>





<style scoped>

main{
    color: #4e4e4e;
}
    .main{
        display: flex;
        margin: 10px;
        Justify-content: center;
    }
        .main_filtConteiner{
            width: 300px;
            height: 630px;
        }
            .main_filtConteiner1140{
                display: none;
            }
        .main_filtConteiner {
            height: auto;
        }
                .shop_shop_filt_category{
                    height: 50px;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                }
                .shop_shop_filt_category:hover{
                    background: #eaeaea;
                    cursor: pointer;
                }
                .shop_shop_filt_category p{
                    padding: 17px 0 15px 50px;
                    text-decoration: none;
                    color: black;
                }
            .shop_shop_filt_category_main_arrow{
                height: 5px;
                width: 5px;
                position: absolute;
                background: #222222;
                left: 34px;
                top: 22px;
                transform: rotateZ(45deg);
            }

        .main_mainConteiner{

        }
            .main_mainConteiner_top{
                display: flex;
                Justify-content: center;
            }
                .main_mainConteiner_top_ad{
                    width: 500px;
                    height: 200px;
                }
                .main_mainConteiner_top_stock{
                    width: 300px;
                    height: 200px;
                }
            .main_mainConteiner_mid{

            }
                .main_mainConteiner_mid_sell{
                }
                .main_mainConteiner_mid_sell_name{
                    margin: 5px 10px;
                    text-align: center;
                }
            .main_mainConteiner_bot{
                display: flex;
                Justify-content: center;
            }
                .main_mainConteiner_bot_hello{
                    width: 400px;
                    height: 200px;
                    display: flex;
                }
                .main_mainConteiner_bot_hello_master{
                    height: 160px;
                    width: 160px;
                    margin: 15px;
                    position: relative;
                }
                    .main_mainConteiner_bot_hello_master img{
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 150px;
                        height: 150px;
                    }
                .main_mainConteiner_bot_hello_say{
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    padding-left: 25px;
                }
                    .main_mainConteiner_bot_hello_say h1{
                        font-size: 16pt;
                        margin: -30px 0 0 0px;
                    }
                    .main_mainConteiner_bot_hello_say p{
                        font-size: 12pt;
                        margin: 10px 10px 0 0px;
                    }
                .main_mainConteiner_bot_acc{
                    min-width: 400px;
                    min-height: 200px;
                }
                    .main_mainConteiner_bot_a{
                        min-height: 200px;

                    }
                    .main_mainConteiner_bot_acc_wrapper{
                        margin: 20px 20px 0px 20px;
                        height: 130px;
                        display: flex;
                    }
                        .main_mainConteiner_bot_acc_wrapper_mainBack{
                            width: 260px;
                        }
                            .main_mainConteiner_bot_acc_wrapper_mainBack_name{
                                height: 50px;
                                font-size: 18pt;
                            }
                            .main_mainConteiner_bot_acc_wrapper_mainBack_all{
                                height: 60px;
                                border-top: 3px solid black;
                                border-bottom: 3px solid black;
                            }
                            .main_mainConteiner_bot_acc_wrapper_mainBack_all p{
                                margin-top: 35px;
                                font-size: 14pt;
                            }
                            .main_mainConteiner_bot_acc_wrapper_imgAdapt{
                                display: none;
                            }
                        .main_mainConteiner_bot_acc_wrapper_img{
                            width: 80px;
                            height: 80px;
                            margin: 40px 0 0 18px;
                            border-radius: 30%;
                            border: 1px solid #fc8507;
                            position: relative;
                        }
                            .main_mainConteiner_bot_acc_wrapper_img_amound{
                                background: #fff;
                                z-index: 2;
                                border-radius: 50%;
                                border: 1px solid #fc8507;
                                position: absolute;
                                width: 25px;
                                height: 25px;
                                bottom: -2px;
                                right: -2px;
                                display: flex;
                                justify-content: center;

                            }
                            .main_mainConteiner_bot_acc_wrapper_img_amound p{
                                margin-top: 5px;
                                font-size: 12pt;
                                font-weight: bold ;
                            }
                            #main_mainConteiner_bot_acc_wrapper_img_svg{
                                width: 60px;
                                height: 60px;
                                position: absolute;
                                top: 10px;
                                left: 10px;
                            }

.recom{
    display: flex;
    justify-content: center;
}
    .recom_recom{
        width: 1140px;
        height: 400px;
    }
.opaci{
    width: 100%;
    z-index: 5;
    position: absolute;
    height: 100%;
    top: 0;
}

@media all and (max-width: 1140px) {
    .main_filtConteiner {
        position: fixed;
        border-radius: 0 40px 40px 0;
        height: 400px;
        width: 230px;
        top: calc(50% - 200px);
        left: 0;
        margin: 0;
        z-index: 2;
        overflow: visible;
        transition: ease-in-out 0.3s;
    }
    .hideCateg{
        left: -230px;
    }
        .main_filtConteiner1140{
            display: block;
            position: absolute;
            border-radius: 50%;
            top: calc(50% - 28px);
            right: -30px;
            width: 50px;
            height: 50px;
            background: #fc8507;
            border: 6px solid #fff;
            cursor: pointer;
            z-index: 100;
        }
            .main_filtConteinerConstruct{
                position: absolute;
                width: 20px;
                height: 20px;
                left: calc(50% - 7px);
                top: calc(50% - 12px);
                border-right: 4px solid white;
                border-top: 4px solid white;
                transform: rotateZ(-135deg);
                transition: ease-in-out 0.3s;
            }
            .main_filtConteinerConstructOff{
                left: calc(50% - 10px);
                transform: rotateZ(-135deg) scale(-1, -1);
            }
    .recom_recom{
        width: 820px;

    }
}

@media all and (max-width: 820px) {
    .main{
        margin: 0;
    }
    .main_filtConteiner{
        display: none;
    }
    .main_mainConteiner{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: auto;
        overflow-x: hidden;
    }
        .main_mainConteiner_top{
            flex-direction: column;
            align-items: center;
        }
            .main_mainConteiner_top_ad{
                width: calc(100vw - 20px);
                height: auto;
            }
                .carus{
                    width: calc(100vw - 20px);
                }
            .main_mainConteiner_top_stock{
                width: calc(100vw - 20px);
            }
            .main_mainConteiner_mid_sell{
                width: calc(100vw - 20px);
            }
        .main_mainConteiner_bot{
            width: 100%;
            flex-wrap: wrap;
            align-items: center;
        }
        .main_mainConteiner_bot_hello{
            width: calc(100vw - 20px);
        }
        .main_mainConteiner_bot_acc {
            display: none;
        }
        .main_mainConteiner_bot_acc_wrapper_imgAdapt{
            display: block;
            position: fixed;
            bottom: 10px;
            right: 10px;
            border: 3px solid #fc8507;
            background: white;
            opacity: 0.7;
        }
        .main_mainConteiner_bot_hello_master{
            min-width: 130px;
        }
        .recom_recom{
            display: none;
        }
}

</style>