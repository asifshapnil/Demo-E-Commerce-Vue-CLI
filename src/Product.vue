<template>
   <div>
        <div class="el1" id="sidebar">
          <sidebar :cartItem="cartItems"> </sidebar>
            
        </div>

        <div class="el1" id="products">
          <input type="text" class="search" v-model="searchQuery" placeholder="Search by name">

          <div>
            <div v-for="item, key in li" class="product">
            {{ item.title }} <br>
            {{ item.price }}BDT <br> <br>
                 
            <br>
            <button @click=cart(key) class="cartbtn crt">Cart</button>
            <!-- <div v-if="item.cart"  class="crt">
              <button type="button" @click=increase(key) class="btn btn-outline-primary">+</button>
              <input type="text" disabled v-model="item.qty" class="qty">
              <button type="button" @click=decrease(key) class="btn btn-outline-primary">-</button>
            </div> -->
            <br>
        </div>
          </div>
      </div>
   </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  components:{
    "sidebar":Sidebar
  },
  props:['li', 'temp'],
  data () {
    return {
      cartItems:[],
      mutableList:[],
      totalTK:10,
      searchQuery:'',
      searchCat:'',
      sum:0
    }
  },
  mounted(){
    if(localStorage.cartItems){
      this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    }
  },
  methods: {
      increase(key){
          if(this.li[key].qty < 10 ){
            this.li[key].qty += 1;
            this.li[key].total =  this.li[key].price * this.li[key].qty;
            this.totalTK = this.li.map((item)=>{
              return item.total;
            });
            let checkitem = this.cartItems.filter((item)=> item.title == this.li[key].title);
            if(checkitem.length > 0){
              alert('item allready added');
            }else{
              this.cartItems.push(this.li[key]);  
              localStorage.setItem("cartItems", JSON.stringify(this.cartItems));

            }
          }
      },
      decrease(key){
        if(this.li[key].qty > 0 ){
            this.li[key].qty -= 1;
            this.li[key].total =  this.li[key].price * this.li[key].qty;
            // this.totalTK = this.li.reduce((item, next) => {
            //   return item.total + next.total;
            // });
            this.totalTK = this.li.map((item)=>{
              return item.total;
            });
            let checkitem = this.cartItems.filter((item)=> item.title == this.li[key].title);
            if(checkitem.length > 0){
              alert('item allready added');
            }else{
              this.cartItems.push(this.li[key]);
              this.mutableList= JSON.parse(this.cartItems);
            }
        }        
      },
      cart(key){
            let checkitem = this.cartItems.filter((item)=> item.title == this.li[key].title);
            if(checkitem.length > 0){
              alert('item allready added');
            }else{      
              this.li[key].qty += 1;
              this.li[key].total =  this.li[key].price * this.li[key].qty;
              this.$children[0].totalTK = this.li.map((item)=>{
                return item.total;
              });
              this.cartItems.push(this.li[key]);

              localStorage.setItem("cartItems", JSON.stringify(this.cartItems));

            }
      }
  },
  computed:{
        
  },
  watch:{
        searchQuery(){
          if (this.searchQuery.length > 0) {
            this.li = this.temp.filter((item) => {
              return item.title.match(this.searchQuery)
            })
          }else{
            this.li = this.temp
          }
        }
    }
}
</script>

<style scoped>
.product{
    width: 150px;
    height: 150px;
    background-color: #999;
    color: #fff;
    padding: 5%;
    float: left;
    margin: 2%;
    /* margin-top: 5%; */
}

.qty{
  width: 20px;
  margin: 0px;
}
.btn{
  width: 20px;
  margin: 0px;

}
.crt{
  float: left;
  margin-top: 40%;
  margin-right: 5px;

}
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
.search{
  margin-left: 2%;
  padding-right: 13%;
  padding-left: 13%;
  padding-top: 2%;
  padding-bottom: 2%;
}
</style>
