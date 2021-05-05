<template>

    <header className='header'>
        <div className='headerTop'>
            <div className='headerWrapper'>


                <div className='header_forShop'>
                    <div className='header_forShop_ header_forShop_loc'>
                        <span>Киров</span>
                    </div>
                    <div className='header_forShop_'>
                        <a href="https://www.pokurim43.ru/">Кальянная</a>
                    </div>

                    <div className='header_forShop_'>
                        <router-link :to="'/delivery'">
                            <span>Доставка</span>
                        </router-link>
                    </div>


                    <div className='header_forShop_ header_forShop_num'>
                        <a href="tel:+79058708380">+7(905)-870-83-80</a>
                    </div>
                </div>


            </div>
        </div>
        <div className="headerBot">
            <div className="headerWrapper">


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

                                    <div className='centerFull header_forSite_basket_img3'>
                                        <p>{{lengthBasket}}</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div className="search_wrap">
                        <input v-on:keyup.enter="search()" placeholder="Поиск по сайту" className="header_forSite_search" type="search" v-on:keydown="validInput" v-model="message"/>

                        <svg v-on:click="search()" class="search_ico" enable-background="new 0 0 64 64" height="32px" id="Icons" version="1.1" viewBox="0 0 64 64" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g><g><path d="M58,52L44,38c-0.583-0.583-1.292-0.875-2-0.875c-0.253,0-0.503,0.051-0.75,0.125l-1.979-1.979
                            C41.604,32.116,43,28.227,43,24c0-10.495-8.505-19-19-19S5,13.505,5,24s8.505,19,19,19c4.226,0,8.116-1.396,11.271-3.729
                            l1.979,1.979C36.968,42.189,37.209,43.209,38,44l14,14c0.583,0.583,1.292,0.875,2,0.875s1.417-0.292,2-0.875l2-2
                            C59.166,54.834,59.166,53.166,58,52z M24,42c-9.925,0-18-8.075-18-18S14.075,6,24,6s18,8.075,18,18S33.925,42,24,42z
                            M37.733,40.319l-1.653-1.653c0.942-0.777,1.809-1.644,2.586-2.586l1.653,1.653C40.211,37.817,40.102,37.898,40,38l-2,2
                            C37.898,40.102,37.817,40.211,37.733,40.319z M57.293,55.293l-2,2c-0.38,0.381-0.828,0.582-1.293,0.582s-0.913-0.201-1.293-0.582
                            l-14-14c-0.773-0.773-0.773-1.813,0-2.586l2-2c0.38-0.381,0.828-0.582,1.293-0.582s0.913,0.201,1.293,0.582l14,14
                            C58.066,53.48,58.066,54.52,57.293,55.293z" fill="#37474F"/><path d="M33.546,14.454c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707
                            c2.361,2.361,3.662,5.501,3.661,8.841c-0.001,3.339-1.301,6.477-3.661,8.837c-4.874,4.873-12.803,4.873-17.678,0
                            c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707c2.632,2.632,6.089,3.947,9.546,3.947s6.914-1.315,9.546-3.947
                            c2.549-2.549,3.953-5.938,3.954-9.544C37.5,20.396,36.097,17.004,33.546,14.454z" fill="#37474F"/><g>
                            <path d="M24,8C15.178,8,8,15.178,8,24s7.178,16,16,16s16-7.178,16-16S32.822,8,24,8z M24,39
                            c-8.284,0-15-6.716-15-15S15.716,9,24,9s15,6.716,15,15S32.284,39,24,39z" fill="#37474F"/></g></g></g>
                        </svg>
                    </div>

                </div>


            </div>
        </div>
    </header>

    <nav className="headerMob" v-show="!($store.state.showAny.showOrdering || $store.state.showAny.showDetailItem)">
        <div class="hederHub" v-on:click="showFunc()">
            <router-link class="centerFull rout" :to="{name: 'main'}">
                <div class="centerFull hederHub_ico">
                    <svg style="width: 25px; height: 25px;" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <title/><g id="Fill"><path d="M18.12,2.88a3.08,3.08,0,0,0-4.24,0L1.29,15.46l1.42,1.42L5,14.59V27a3,3,0,0,0,3,3H24a3,3,0,0,0,
                        3-3V14.59l2.29,2.29,1.42-1.42ZM14,28V21h4v7Zm11-1a1,1,0,0,1-1,1H20V19H12v9H8a1,1,0,0,1-1-1V12.59l8.29-8.3a1,1,0,0,1,1.42,0L25,12.59Z"/></g>
                    </svg>
                </div>
                Главная
            </router-link>
        </div>

        <div class="hederHub">
            <div v-on:click="showFunc('showCategor')" class="rout centerFull">
                <div class="centerFull hederHub_ico">
                    <svg data-name="Layer 2" style="width: 20px; height: 20px;" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.933,15.055H3.479A3.232,3.232,0,0,1,.25,11.827V3.478A3.232,3.232,0,0,1,3.479.25h8.454a3.232,3.232,0,0,1,3.228,3.228v8.349A3.232,3.232,0,0,1,11.933,15.055ZM3.479,2.75a.73.73,0,
                        0,0-.729.728v8.349a.73.73,0,0,0,.729.728h8.454a.729.729,0,0,0,.728-.728V3.478a.729.729,0,0,0-.728-.728Z"/><path d="M11.974,34.75H3.52A3.233,3.233,0,0,1,.291,31.521V23.173A3.232,3.232,0,0,
                        1,3.52,19.945h8.454A3.232,3.232,0,0,1,15.2,23.173v8.348A3.232,3.232,0,0,1,11.974,34.75ZM3.52,22.445a.73.73,0,0,0-.729.728v8.348a.73.73,0,0,0,.729.729h8.454a.73.73,0,0,0,.728-.729V23.173a.729.729,0,0,0-.728-.728Z"/>
                        <path d="M31.522,34.75H23.068a3.233,3.233,0,0,1-3.229-3.229V23.173a3.232,3.232,0,0,1,3.229-3.228h8.454a3.232,3.232,0,0,1,3.228,3.228v8.348A3.232,3.232,0,0,1,31.522,34.75Zm-8.454-12.3a.73.73,0,0,0-.729.728v8.348a.73.73,0,0,0,
                    .729.729h8.454a.73.73,0,0,0,.728-.729V23.173a.729.729,0,0,0-.728-.728Z"/><path d="M27.3,15.055a7.4,7.4,0,1,1,7.455-7.4A7.437,7.437,0,0,1,27.3,15.055Zm0-12.3a4.9,4.9,0,1,0,4.955,4.9A4.935,4.935,0,0,0,27.3,2.75Z"/>
                    </svg>
                </div>
                Категории
            </div>

            <div class="categorAdapt" :class="{openClass: show.showCategor}">
              <router-link v-for="items in $store.state.item" :key="items.id" :to="items.link()">
                  <div v-on:click="showFunc()" className='thisCategor'>
                      <p>{{items.name()}}</p>
                  </div>
              </router-link>
            </div>
        </div>

        <div class="hederHub" v-on:click="showFunc()">
            <router-link class="centerFull rout" :to="{name: 'basket'}">
                <div class="centerFull hederHub_ico">
                    <svg style="width: 25px; height: 25px;" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="Fill"><path d="M10,24a3,3,0,1,0,3,3A3,3,0,0,0,10,24Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,10,28Z"/>
                        <path d="M22,24a3,3,0,1,0,3,3A3,3,0,0,0,22,24Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,22,28Z"/><path d="M6.78,6,6.35,4.27A3,3,0,0,0,3.44,2H2V4H3.44a1,1,0,0,1,1,.76L8,19.24H8l.37,1.49A3,3,0,0,
                    0,11.31,23H25V21H11.31a1,1,0,0,1-1-.76l-.12-.5L25,16.25a3,3,0,0,0,2.23-2.19l2-8.06Zm18.55,7.58a1,1,0,0,1-.75.73L9.73,17.8,7.28,8H26.72Z"/></g>
                    </svg>
                </div>
                Корзина
            </router-link>
        </div>

        <div class="hederHub">

            <div v-on:click="showFunc('showMore')" class="rout centerFull">
                <div class="centerFull hederHub_ico">
                    <svg style="width: 25px; height: 25px;" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/>
                        <g id="Fill"><path d="M16,13a3,3,0,1,0,3,3A3,3,0,0,0,16,13Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,16,17Z"/>
                        <path d="M24,13a3,3,0,1,0,3,3A3,3,0,0,0,24,13Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,24,17Z"/><path d="M8,13a3,3,0,1,0,3,3A3,3,0,0,0,8,13Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,8,17Z"/></g>
                    </svg>
                </div>
                Ещё
            </div>

            <div class="categorAdapt" :class="{openClass: show.showMore}">
                <div className="search_wrap">
                    <input v-on:keyup.enter="search()" placeholder="Поиск по сайту" className="header_forSite_search" type="search" v-on:keydown="validInput" v-model="message"/>

                    <svg v-on:click="search()" class="search_ico" enable-background="new 0 0 64 64" height="32px" id="Icons" version="1.1" viewBox="0 0 64 64" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g><g><path d="M58,52L44,38c-0.583-0.583-1.292-0.875-2-0.875c-0.253,0-0.503,0.051-0.75,0.125l-1.979-1.979
                            C41.604,32.116,43,28.227,43,24c0-10.495-8.505-19-19-19S5,13.505,5,24s8.505,19,19,19c4.226,0,8.116-1.396,11.271-3.729
                            l1.979,1.979C36.968,42.189,37.209,43.209,38,44l14,14c0.583,0.583,1.292,0.875,2,0.875s1.417-0.292,2-0.875l2-2
                            C59.166,54.834,59.166,53.166,58,52z M24,42c-9.925,0-18-8.075-18-18S14.075,6,24,6s18,8.075,18,18S33.925,42,24,42z
                            M37.733,40.319l-1.653-1.653c0.942-0.777,1.809-1.644,2.586-2.586l1.653,1.653C40.211,37.817,40.102,37.898,40,38l-2,2
                            C37.898,40.102,37.817,40.211,37.733,40.319z M57.293,55.293l-2,2c-0.38,0.381-0.828,0.582-1.293,0.582s-0.913-0.201-1.293-0.582
                            l-14-14c-0.773-0.773-0.773-1.813,0-2.586l2-2c0.38-0.381,0.828-0.582,1.293-0.582s0.913,0.201,1.293,0.582l14,14
                            C58.066,53.48,58.066,54.52,57.293,55.293z" fill="#37474F"/><path d="M33.546,14.454c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707
                            c2.361,2.361,3.662,5.501,3.661,8.841c-0.001,3.339-1.301,6.477-3.661,8.837c-4.874,4.873-12.803,4.873-17.678,0
                            c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707c2.632,2.632,6.089,3.947,9.546,3.947s6.914-1.315,9.546-3.947
                            c2.549-2.549,3.953-5.938,3.954-9.544C37.5,20.396,36.097,17.004,33.546,14.454z" fill="#37474F"/><g>
                            <path d="M24,8C15.178,8,8,15.178,8,24s7.178,16,16,16s16-7.178,16-16S32.822,8,24,8z M24,39
                            c-8.284,0-15-6.716-15-15S15.716,9,24,9s15,6.716,15,15S32.284,39,24,39z" fill="#37474F"/></g></g></g>
                        </svg>
                </div>
                <router-link :to="{ name: `delivery` }">
                    <div v-on:click="showFunc()" className='thisCategor'>
                        <p>Доставка</p>
                    </div>
                </router-link>
            </div>
        </div>
    </nav>

</template>





<script>
    export default {
        name: "Header",
        computed:{
            lengthBasket(){
                let sum = 0
                for(let i of this.$store.state.itemInBasket){
                    sum += +i.amount
                }
                return sum
            },
        },
        data() {
            return {
                message: '',
                show:{
                    showCategor: false,
                    showMore: false,
                },
            }
        },
        watch: {
            message: function(){
                let word = this.message.split('').map(i=>{
                    if(this.validSym(i,true)){return i}
                }).join('')
                this.message = word
            }
        },
        methods:{
            showFunc(show = null){
                for(let i in this.show){
                    if (show != i){this.show[i] = false}
                    else if (show == i){this.show[i] = !this.show[i]}
                }
            },
            validSym(sym, val){
                if(
                    (sym.charCodeAt() < 65 ||
                        sym.charCodeAt() > 90) &&
                    (sym.charCodeAt() < 44 ||
                        sym.charCodeAt() > 46) &&
                    (sym.charCodeAt() < 48 ||
                        sym.charCodeAt() > 57) &&
                    (sym.charCodeAt() < 1040 ||
                        sym.charCodeAt() > 1105) &&
                    (sym.charCodeAt() < 97 ||
                        sym.charCodeAt() > 122) &&
                    sym.charCodeAt() != 32 ){
                        val = !val
                }
                return val
            },
            validInput(event){          //если удалить, то впринципе ничего не поменяется
                //alert(event.key.charCodeAt())
                if(this.validSym(event.key,false)){return event.preventDefault()}
                return true
            },
            search(){
                this.showFunc()
                if (this.message == ''){
                    this.$router.push({ path: `/search/…` })
                    return
                }
                this.$router.push({ path: `/search/${this.message.toLowerCase()}` })
            },
        }
    }
</script>





<style scoped>
    header{
        box-shadow: 0px 5px 15px 5px rgba(34, 60, 80, 0.1);
        margin: 0  0 20px 0;
        color: white;
    }
    .headerWrapper{
        display: flex;
        justify-content: center;
    }

    .headerTop{
        background: #fc8507;
        height: 40px;
    }
    .header_forShop{
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

    .headerBot{
        background: #fff;
        height: 60px;
    }

    .header_forSite{
        display: flex;
        Justify-content: center;
    }
    .header_forSite_name{

    }

    .search_wrap{
        position:relative;
    }
    .search_ico{
        position: absolute;
        top: 13px;
        right: 5px;
        cursor: pointer;
        transition: ease-in-out 0.3s;
    }
    .search_ico:hover{
        transform: scale(1.2);
    }
    .header_forSite_search{
        background: #eaeaea;
        width: 230px;
        height: 40px;
        margin: 10px 0 0 20px;
        border-radius: 10px;
        border: none;
        padding: 0 40px 0 20px;
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
        overflow: hidden;
    }
    .header_forSite_basket_img3 p{
        color: black;
        font-size: 8pt;
    }


    a{
        color: white;
    }
    .headerMob{
        display: none;
    }


    @media all and (max-width: 1140px) {
        .header_forShop_{
            min-width: 200px;
        }
        .header_forSite_basket{
            margin: 8px 10px 8px 50px;

        }
    }

    @media all and (max-width: 820px) {
        .header{
            display: none;
        }
        .headerMob{
            display: flex;
            position: fixed;
            bottom: 0px;
            width: 100%;
            height: 50px;
            z-index: 4;
            background: #fff;
            border-top: 1px solid grey;
            border-bottom: 1px solid grey;
        }
        .hederHub{
            flex: 1;
            color: dimgrey;
            transition: ease-in-out 0.3s;
            cursor: pointer;
            font-size: 12pt;
            position: relative;
        }
        .hederHub a{color:dimgrey}
        .hederHub:hover{
            background: #cdcdcd;
        }
        .categorAdapt{
            position: fixed;
            width: 0%;
            height: calc(100% - 52px);
            top: 0;
            right: 0;
            background: #fff;
            transition: ease-in-out 0.2s  0.2s;
            cursor: auto;
            visibility: hidden;
            overflow: hidden;
        }
        .openClass{
            width: 100%;
            transition: ease-in-out 0.2s;
            visibility: visible;
        }
        .rout{
            width: 100%;
            height: 100%;
            flex-direction: column;

        }
        .thisCategor{
            padding: 10px ;
            border-bottom: 1px solid #cdcdcd;
            font-size: 14pt;
            color: black;
        }
        .thisCategor:hover{
            background: #cdcdcd;
        }
        .search_wrap{
            padding: 20px;
            border-bottom: 1px solid #cdcdcd;

        }
        .header_forSite_search{
            width: calc(100% - 55px);
            margin: 0;
            padding: 0 35px 0 20px;
        }
        .search_ico{
            top: 25px;
            right: 25px;
        }
        .hederHub_ico{
            width: 25px;
            height: 25px;
        }
    }


</style>
