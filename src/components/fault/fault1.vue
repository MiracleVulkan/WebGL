<template>
  <div>
      <div>
        <img :src="imagePath">
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
          src:"fault1.jpg",
          title:"fruit",
      }
  },
  beforeCreate(){
      this.$http.get('/api/goods').then((data) => {
      this.items = data.body.data;
      this.price = this.items[0].price;
      this.title = this.items[0].title;
      this.src = this.items[0].img;
      })
  },
  computed:{
    computeItems:function(){
    },
    imagePath:function(){
      if(this.src !== undefined) //因为第一次为空
      {
        let imginfo = require("../../assets/" + this.src);
        return imginfo;
      }
    }
  }
}
</script>


    

