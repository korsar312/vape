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
        transition: ease-in-out 0.5s;
    }

    .close1{
        transform: rotateZ(135deg);
    }

    .close2{
        transform: rotateZ(45deg);
    }
    .close:hover > .close1{
        transform: rotateZ(540deg);
    }
    .close:hover > .close2{
        transform: rotateZ(540deg);
    }
</style>