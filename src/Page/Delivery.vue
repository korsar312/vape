<template>
    <div className="centerFull wrapper">
        <div className="contaiter info">
            <H1>Информация по доставке</H1>
            <div>
                <ul>
                    <li>Доставка в пределах Кирова - 100р</li>
                    <li>Доставка за пределы Кирова - 100р + 10р за 1км</li>
                    <li>Доставка в другой город осуществляется средствами почты России или СДЭК</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Delivery"
    }
</script>

<style scoped>
    .wrapper{
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .info{
        width: 1140px;
    }
    h1{
        font-size: 16pt;
        margin: 10px 0 20px 0;
        text-align: center;
    }
    li{
        margin: 10px 0 10px 40px;
        list-style-type: disc;
    }

    @media all and (max-width: 1140px) {
        .info {
            width: 820px;
        }
    }
    @media all and (max-width: 820px) {
        .wrapper{
            position: absolute;
            width: 100%;
            height: calc(100% - 70px);
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }
        .info{
            width: calc(100vw - 20px);
        }
    }
</style>