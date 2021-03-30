<template>

  <Ordering v-if="show"/>
  <ItemOpen v-show="showDetail"/>

  <Header />

  <router-view>

  </router-view>




</template>





<script>
  /* eslint-disable vue/no-unused-components */
  import Header from './components/Header';
  import router from './router/router';
  import Ordering from "./components/Ordering";
  import ItemOpen from "./components/ItemOpen";


  export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed:{
    show(){
      return this.$store.state.showOrdering
    },
    showDetail(){
      return this.$store.state.showDetailItem
    }
  },
  mounted() {
    this.$store.commit("getCookie")
  },
  components: {
    ItemOpen,
    Header,
    router,
    Ordering,
  }
}
</script>





<style>
  @import './clear.module.css';
a{
  text-decoration: none;
}


  .contaiter{
    font-family: "Times New Roman","Helvetica","Arial",sans-serif;
    border-radius: 15px;
    margin: 10px 10px;
    box-shadow: 0px 0px 3px 1px rgba(34, 60, 80, 0.1);
    background: #fff;
    overflow: hidden;
  }

  .shop_shop_filt_name {
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    border-bottom: 1px solid #eaeaea;
  }
  .shop_shop_filt_name p{
    font-size: 16pt;
  }




</style>
