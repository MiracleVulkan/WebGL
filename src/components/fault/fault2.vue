<template>
  <div>
      <img :src="this.src">
  </div>
</template>

<script>
export default {
  name:'fault2',
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
      this.price = this.items[1].price;
      this.title = this.items[1].title;
      this.src = this.items[1].img;
      // console.log(this.price);
      })
  }
}
</script>


    

