<template>
    <div class="centerFull wrapper">
        <div class="centerFull contaiter content">
            <div>
                <p class="centerFull quest">Вам уже есть 18 лет?</p>
            </div>
            <div class=centerFull>
                <div v-on:click="yes()" class="centerFull contaiter butt">Да</div>
                <div v-on:click="no()" class="centerFull contaiter butt">Нет</div>
            </div>
        </div>
        <div class="back">
        </div>
    </div>
</template>

<script>
    export default {
        name: "YouOld",
        data(){
            return{

            }
        },
        methods:{
            yes(){
                this.$store.commit("setOld")
                this.$store.state.showOld = false
            },
            no(){
                window.close()
            },
        },
    }
</script>

<style scoped>
    .wrapper{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
        .back{
          position: fixed;
          width: 100%;
          height: 100%;
          opacity: 0.3;
          background: #fff;
        }
        .content{
            opacity: 1;
            width: 240px;
            height: 100px;
            z-index: 10;
            flex-direction: column;
            border: 3px solid #fc8507;
            padding: 5px;
        }

            .quest{
              font-size: 17pt;
            }
            .butt{
                height: 40px;
                width: 90px;
                color: white;
                background: #fc8507;
                border: none;
                transition: ease-in-out 0.2s;
                cursor: pointer;
            }
            .butt:hover{
                transform: scale(0.97);
            }
            .butt:active{
                transform: scale(0.85);
            }

    @media all and (max-width: 820px) {

    }
</style>
