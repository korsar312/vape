<template>
    <div className="centerFull wrapper">
        <div className="back" v-on:click="show">
        </div>

        <div className="contaiter window">
            <form v-show="!choiceComplete">
                <div style="text-align: center; margin: 10px">
                    <H1>Форма</H1>
                </div>
                <div claccName="inputWrapper">
                    <H2>Ваши данные</H2>
                    <div className="input">
                        <input required autocomplete="tel" v-model="mobil" name="phone" type="tel" className="contaiter inputSelfNumber inputValueO" placeholder="Телефон"/>
                        <input required autocomplete="name" name="name" type="text" className="contaiter inputSelfName inputValueO" placeholder="Имя"/>
                    </div>
                </div>
                <div>
                    <H2>Способ получения</H2>
                    <div className="input centerLight">
                        <button type="button" v-on:click="myChoice(true)" :class="[{ChoiceOn: choice},{contaiter:true},{Choice:true}]" className="contaiter Choice ChoiceOn">Доставка</button>
                        <button type="button" v-on:click="myChoice(false)" :class="[{ChoiceOn: !choice},{contaiter:true},{Choice:true}]" className="contaiter Choice">Самовывоз</button>
                    </div>
                </div>
                <div className="input">
                    <div className="contaiter">
                        <div className="mapWrapper" v-show="choice">
                            <div className="map">
                                <input required autocomplete="address-level2" name="city" type="text" className="contaiter adres adresVal inputValue" placeholder="Город"/>
                                <input required autocomplete="address-line1" name="address" type="text" className="contaiter adres adresVal inputValue" placeholder="Улица"/>
                                <input required autocomplete="home" name="home" type="text" className="contaiter adres adresVal inputValue" placeholder="Дом"/>
                                <input required autocomplete="entrance" name="" type="text" className="contaiter adres adresVal inputValue" placeholder="Подъезд"/>
                                <input required autocomplete="address-line2" name="address-line2" type="text" className="contaiter adres adresVal inputValue" placeholder="Квартира"/>
                            </div>
                        </div>
                        <div className="mapWrapper" v-show="!choice">
                            <div className="map googleMap">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2078.5467911892047!2d49.67807751058962!3d58.60314582815016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x189b906e70213aa8!2zVmFwZSBTaG9wINCf0J7Qn9CQ0KDQmNCc!5e0!3m2!1sru!2sru!4v1615914372601!5m2!1sru!2sru"
                                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div className="selfAdress contaiter">
                                <p>г.Киров ул.Свободы 70</p>
                                <p>Пн-Вс с 10:00 по 23:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input">
                    <H2>Пожелания</H2>
                    <textarea className="contaiter comment"></textarea>
                </div>
                <div className="sumbit">
                    <button className="contaiter buttun" id="BigRedButton" v-on:click="sendRequest($event)" type="button">Заказать!</button>
                    <H1 style="text-align: center; font-size: 15pt">ДАННЫЙ САЙТ НИЧЕГО НЕ ПРОДАЕТ, ТАК КАК БЫЛ СОЗДАН ДЛЯ ТЕСТОВ. </H1>
                </div>
            </form>

            <div className="centerFull HappyWrapper" v-if="choiceComplete">
                <div className="weHappy">
                    Нам дорог ваш заказ!
                </div>
                <div className="wrapperTrackNumber">
                    Номер вашего заказа: <span className="trackNumber">{{numberOrder}}</span>
                </div>
            </div>
            <div className="ButtonClose">
                <ButtonClose v-on:click="show()"/>
            </div>
        </div>

    </div>
</template>





<script>


    import ButtonClose from "./ButtonClose";
    export default {
        name: "Ordering",
        components: {ButtonClose},
        data(){
            return{
                choice: true,
                choiceComplete: false,
                numberOrder: '',
                mobil: '',
                loading: false,
            }
        },
        watch: {
            mobil: function(){
                let word = this.mobil.split('').map(i=>{
                    if(
                        (i.charCodeAt() >= 40 && i.charCodeAt() <= 45) ||
                        (i >= 0 && i <= 9) ||
                        i.charCodeAt() == 32 ){
                                return i}
                }).join('')
                this.mobil = word
            }
        },
        computed: {
            totalPrice() {
                return this.$store.state.itemInBasket.reduce((s, c) => s += (c.price * c.amount), 0)
            },
        },
        methods:{
            myChoice(a){
                this.choice = a
            },
            show(){
                this.$store.commit('show');
            },
            sendRequest(event){
                if(this.$store.state.itemInBasket.length == 0){
                    alert('У вас пустая корзина')
                    return;
                }
                let valid = true
                for(let i of document.body.querySelectorAll('.inputValueO')) {
                    if(i.value == ''){
                        if (i.placeholder == 'Заполните это поле'){valid = false}
                        else{
                            setTimeout((a,b)=>{b.placeholder = a},1000,i.placeholder,i)
                            i.placeholder = 'Заполните это поле'
                        }

                        valid = false
                    }
                }
                if(this.choice){
                    for(let i of document.body.querySelectorAll('.adresVal')){
                        if(i.value == ''){
                            if (i.placeholder == 'Заполните это поле'){valid = false}
                            else{
                                setTimeout((a,b)=>{b.placeholder = a},1000,i.placeholder,i)
                                i.placeholder = 'Заполните это поле'
                            }

                            valid = false
                        }
                    }
                }

                if(!valid){
                    return
                }

                if(this.loading){return}
                this.loading = true

                let curs = event.target.style.cursor
                let back = event.target.style.background
                event.target.style.cursor = 'wait';
                event.target.style.background = 'rgb(204, 204, 204)'

                let name = document.body.querySelector('.inputSelfName').value
                let number = "%2b" + document.body.querySelector('.inputSelfNumber').value
                let typeDeliv = this.choice
                let adress = []
                Array.prototype.forEach.call(document.body.querySelectorAll('.adres'),(sum)=>adress.push(' ' + sum.placeholder + ' ' + sum.value))
                let coment = document.body.querySelector('.comment').value

                let message = `Клиент ${name} с номером ${number} `
                typeDeliv ? message += `заказал доставку по адресу:` + " %0A" + `${adress}` : message += `заказал самовывоз`
                if(coment.length>0){
                    message += " %0A" + `и оставил пожелание: ${coment}`
                }
                message += " %0A" + " %0A"

                for(let arrEl of this.$store.state.itemInBasket){
                    for(let objEl in arrEl){
                        if(Object.keys(this.$store.state.renameForSend).includes(objEl)){
                            message += `${this.$store.state.renameForSend[objEl]}:  ${arrEl[objEl]}` + " %0A"
                        }
                    }
                    message += `В количестве ${arrEl.amount} шт.` + " %0A %0A"
                }
                message += `Всего на сумму: ${this.totalPrice}` + " %0A"
                this.numberOrder = Math.round(Math.random()*10000000)
                message += `                                                                  Номер заказа: ${this.numberOrder}`

                let tok = `1662190836:AAGFJexo_sQVuUDszhnFMuLhBRPVwT_xuJ4`
                let chatId = `-421133281`

                let url = `https://api.telegram.org/bot${tok}/sendMessage?chat_id=${chatId}&text=`
                let xhttp = new XMLHttpRequest()
                xhttp.open('GET',url + message, true)
                xhttp.send()

                let th = this
                xhttp.onload = function() {
                    if (xhttp.status != 200) {alert(`Ошибка ${xhttp.status}: ${xhttp.statusText}`)}
                    else {
                        th.choiceComplete = true
                    }
                };

                xhttp.onerror = function() {
                    alert("Запрос не удался");
                    th.loading = false
                    event.target.style.cursor = curs
                    event.target.style.background = back
                };

            },
        },

    }
</script>





<style scoped>
    .wrapper{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 101;
    }
    .back{
        width: 100%;
        height: 100%;
        opacity: 0.2;
        position: fixed;
        background: black;
    }
    .window{
        width: 600px;
        height: 800px;
        opacity: 1;
        z-index: 2;
        position: relative;
        overflow: visible;
    }
    input{
        height: 40px;
        border: 1px solid #eaeaea;
        background: #eaeaea;
        box-shadow: none;
        padding: 0 10px;
    }
    .input{
        text-align: center;
        margin: 0 0 20px 0;
    }
    form{
        margin: 20px;
    }
    H2{
        font-size: 17pt;
    }
    H1{
        font-size: 20pt;
    }
    .Choice{
        height: 50px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        transition: ease-in-out 0.5s;
    }
    .ChoiceOn{
        background: #fc8507;
        color: white;
        box-shadow: none;
    }
    .mapWrapper{
        height: 200px;
        position: relative;
    }
    .selfAdress{
        position: absolute;
        width: 190px;
        height: 40px;
        top: 0px;
        right: 0px;
        background: white;
        padding-top: 5px;
    }
    .adres{
        width: 220px;
        text-align: center;
    }
    .comment{
        width: 520px;
        height: 150px;
        padding: 10px;
        border: 1px solid #fc8507;
        resize: none
    }
    .buttun{
        width: 250px;
        height: 50px;
        border: none;
        color: white;
        background: #fc8507;
        font-size: 15pt;
        margin: 0px 30px 0px 10px;
    }
    .sumbit{
        display: flex;
        align-items: center;
    }
    b{
        font-weight: 900;
        font-size: 110%;
    }
    .HappyWrapper{
        flex-direction: column;
        height: 100%;
    }
    .ButtonClose{
        position: absolute;
        top: -10px;
        right: -10px;
    }
    @media all and (max-width: 820px) {
        .wrapper{
        }
        .window{
            position: block;
            width: 100%;
            height: 100%;
            margin: 0;
            border-radius: 0;
        }
        form{
            display: flex;
            flex-direction: column;
            height: calc(100% - 5px);
            overflow: auto;
            margin: 5px;
        }
        .mapWrapper{
            overflow: auto;
        }
        .sumbit{
            margin: 0 0 10px 0;
            flex-direction: column;
            align-items: center;
        }
        .buttun{
            margin: 5px;
            min-width: 85px;
        }
        h2{
            text-align: center;
        }
        .googleMap{
            height: 100%;
        }
        .close{
            top: 10px;
            right: 10px;
        }
        .comment{
            width: calc(100vw - 120px);
            height: 100px;
        }
    }

</style>
