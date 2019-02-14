<template>
<div>
  <div v-for="cart, key in cartItem">
    <h4>{{ cart.title }}</h4>
    <h5>{{ cart.price }} BDT</h5>
    <h5> {{ cart.total }} BDT for this item. </h5>      
    <button type="button" @click=increase(key) class="btn btn-outline-primary">+</button>
    <input type="text" disabled v-model="cart.qty" class="qty">
    <button type="button" @click=decrease(key) class="btn btn-outline-primary">-</button>
            

            
    <hr>
  </div>
  <h3>Total {{ sum }} BDT </h3>

</div>
        
</template>

<script>
export default {
  props:['cartItem'],
  data () {
    return {
      totalTK:0,
      sum:0,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
     increase(key){
          if(this.cartItem[key].qty < 10 ){
            this.cartItem[key].qty += 1;
            this.cartItem[key].total =  this.cartItem[key].price * this.cartItem[key].qty;
            this.totalTK = this.cartItem.map((item)=>{
              return item.total;
            });
          }
      },
      decrease(key){
        if(this.cartItem[key].qty > 0 ){
            this.cartItem[key].qty -= 1;
            this.cartItem[key].total =  this.cartItem[key].price * this.cartItem[key].qty;
            // this.totalTK = this.cartItem.reduce((item, next) => {
            //   return item.total + next.total;
            // });
            this.totalTK = this.cartItem.map((item)=>{
              return item.total;
            });
        }        
      }
  },
  watch:{
    totalTK(){
          this.sum = this.totalTK.reduce((a, b) => a + b, 0);
        }
  }
}
</script>

<style scoped>
ul{
    padding: 5%;
    background-color: #565; 
    list-style-type: none;
}
li{
    padding: 5%;
    color: #fff;
    list-style-type: none;
}
li:hover{
    padding: 5%;
    color: #fff;
    font-size: 18px;
    border-bottom:2px solid #000 ; 
}

.qty{
  width: 20px;
  margin: 0px;
}
.btn{
  width: 20px;
  margin: 0px;

}
</style>
