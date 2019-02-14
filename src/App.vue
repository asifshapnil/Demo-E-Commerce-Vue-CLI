<template>
  <div id="app">
      <product :li="list" :temp="temps"></product>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list:[
          {
            title:'mobile',
            qty:0,
            price:59,
            total:0,
            cart:false
          },
          {
            title:'laptop',
            qty:0,
            price:35,
            total:0,
            cart:false

          },
          {
            title:'macbook',
            qty:0,
            price:46,
            total:0,
            cart:false

          },
          {
            title:'iphone',
            qty:0,
            price:33,
            total:0,
            cart:false

          },
          {
            title:'iphone',
            qty:0,
            price:33,
            total:0,
            cart:false

          }




      ],
      temps:[
          {
            title:'mobile',
            qty:0,
            price:59,
            total:0,
            cart:false
          },
          {
            title:'laptop',
            qty:0,
            price:35,
            total:0,
            cart:false

          },
          {
            title:'macbook',
            qty:0,
            price:46,
            total:0,
            cart:false

          },
          {
            title:'iphone',
            qty:0,
            price:33,
            total:0,
            cart:false

          },
          {
            title:'iphone',
            qty:0,
            price:33,
            total:0,
            cart:false

          }

      ],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#sidebar{
  width: 200px;
  margin: 5%;
  height: 100vh;
}

#products{
  width: 800px;
  margin: 5%;
  height: 100vh;

}
.el1{
  float: left;
}
</style>
