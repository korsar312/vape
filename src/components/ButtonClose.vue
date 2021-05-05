<template>
    <button class="close">
        <div class="closeU close1"></div>
        <div class="closeU close2"></div>
    </button>
</template>

<script>
    export default {
        name: "ButtonClose"
    }
</script>

<style scoped>
    .close{
        width: 30px;
        height: 30px;
        border: 2px solid white;
        background: red;
        border-radius: 50%;
        position: relative;


    }
    .closeU{
        width: 16px;
        height: 0px;
        border: 2px solid white;
        background: white;
        position: absolute;
        top: 11px;
        right: 3px;
        border-radius: 2px;
        -webkit-transition: ease-in-out 0.5s;
        -o-transition: ease-in-out 0.5s;
        transition: ease-in-out 0.5s;
    }

    .close1{
        -webkit-transform: rotateZ(135deg);
        -ms-transform: rotate(135deg);
        transform: rotateZ(135deg);
    }

    .close2{
        -webkit-transform: rotateZ(45deg);
        -ms-transform: rotate(45deg);
        transform: rotateZ(45deg);
    }
    .close:hover > .close1{
        -webkit-transform: rotateZ(540deg);
        -ms-transform: rotate(540deg);
        transform: rotateZ(540deg);
    }
    .close:hover > .close2{
        -webkit-transform: rotateZ(540deg);
        -ms-transform: rotate(540deg);
        transform: rotateZ(540deg);
    }
</style>