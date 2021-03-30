<template>
    <div className="wrapper">
        <div className="back" v-on:click="show">
        </div>

        <div className="contaiter window">
            <form v-show="!choiceComplete">
                <div style="text-align: center">
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
                    <div className="input inputChoice">
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
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2078.5467911892047!2d49.67807751058962!3d58.60314582815016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x189b906e70213aa8!2zVmFwZSBTaG9wINCf0J7Qn9CQ0KDQmNCc!5e0!3m2!1sru!2sru!4v1615914372601!5m2!1sru!2sru"
                                        width="540" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
                    <button className="contaiter buttun" v-on:click="sendRequest()" type="button">Заказать!</button>
                    <p> <b>*Оплата</b> производится только по факту получения товара, <b>наличным</b> или <b>безналичным</b> способом.</p>
                </div>
            </form>

            <div className="HappyWrapper" v-if="choiceComplete">
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
                return this.$store.state.itemInBasket.reduce((s, c) => s += (c[0].price * c[1]), 0)
            },
        },
        methods:{
            myChoice(a){
                this.choice = a
            },
            show(){
                this.$store.commit('show');
            },
            sendRequest(){
                if(this.$store.state.itemInBasket.length == 0){
                    alert('У вас пустая корзина')
                    return;
                }
                let valid = true
                for(let i of document.body.querySelectorAll('.inputValueO')) {
                    if(i.value == ''){
                        setTimeout((a,b)=>{b.placeholder = a},1000,i.placeholder,i)
                        i.placeholder = 'Заполните это поле'

                        valid = false
                    }
                }
                if(this.choice){
                    for(let i of document.body.querySelectorAll('.adresVal')){
                        if(i.value == ''){
                            setTimeout((a,b)=>{b.placeholder = a},1000,i.placeholder,i)
                            i.placeholder = 'Заполните это поле'

                            valid = false
                        }
                    }
                }

                if(!valid){
                    return
                }

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
                    for(let objEl in arrEl[0]){
                        if(Object.keys(this.$store.state.renameForSend).includes(objEl)){
                            message += `${this.$store.state.renameForSend[objEl]}:  ${arrEl[0][objEl]}` + " %0A"
                        }
                    }
                    message += `В количестве ${arrEl[1]} шт.` + " %0A %0A"
                }
                message += `Всего на сумму: ${this.totalPrice}` + " %0A"
                this.numberOrder = Math.round(Math.random()*10000000)
                message += `                                                                  Номер заказа: ${this.numberOrder}`

                let tok = `1662190836:AAGFJexo_sQVuUDszhnFMuLhBRPVwT_xuJ4`
                let url = `https://api.telegram.org/bot${tok}/sendMessage?chat_id=-421133281&text=`
                let xhttp = new XMLHttpRequest()
                xhttp.open('GET',url + message, true)
                xhttp.send()
                this.choiceComplete = true
            },
        },

    }
</script>





<style scoped>
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;

        width: 100%;
        height: 100%;
        z-index: 10;
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
    .inputChoice{
        display: flex;
        justify-content: center
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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
    }
    .ButtonClose{
        position: absolute;
        top: -10px;
        right: -10px;
    }

</style>
