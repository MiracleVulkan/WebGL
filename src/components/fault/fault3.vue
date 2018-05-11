<template>
  <div>
      <p>Hello,this is fault3</p>
      <img :src="this.src">
  </div>
</template>

<script>
export default {
  name:'fault3',  
    data(){
      return {
          items:[],
          price:0.0,
          src:"src",
          title:"fruit"
      }
  },
  created(){
      this.$http.get('/api/goods').then((data) => {
      this.items = data.body.data;
      this.price = this.items[2].price;
      this.title = this.items[2].title;
      this.src = this.items[2].img;
      // console.log(this.price);
      })
  }
}
</script>


    

