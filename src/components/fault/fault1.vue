<template>
  <div>
      <div>
        <p>{{this.src}}</p>
        <img :src="this.src">
      </div>
  </div>
</template>

<script>
export default {
  name:'fault1',
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
      this.price = this.items[0].price;
      this.title = this.items[0].title;
      this.src = this.items[0].img;
      // console.log(this.price);
      })
  }
}
</script>


    

