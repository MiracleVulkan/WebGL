<template>
  <div>
    <h1>{{this.title}}</h1>
    <div  v-for="info in imagePath">
      <div class="imagDiv"> 
        <img :src="info.img" class="imagClass">
      </div>
      <p>{{info.content}}</p>
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
          content:undefined
      }
  },
  beforeCreate(){
      this.$http.get('/api/goods').then((data) => {
      this.items = data.body.data;
      this.price = this.items[0].price;
      this.title = this.items[0].title;
      this.src = this.items[0].img;
      this.content = this.items[0].content;
      })
  },
  computed:{
    computeItems:function(){
      this.items = data.body.data;
    },
    imagePath:function(){
      let imginfo = [];
      if(this.items.length !== 0) //因为第一次为空
      {
        for (let index = 0; index < this.items.length; index++) {
          let object = {};
          object.img = require("../../assets/" + this.items[index].img);
          object.content = this.items[index].content;
          console.log(this.items[index].chapter);
          imginfo.push(object);
          
        }
        console.log(imginfo);
        return imginfo;
      }
    }
  }
}
</script>



<style>
.imagDiv{
  text-align: center; width: 100%;height:200px; line-height:200px;
}

.imagClass{
  display: inline-block; vertical-align: middle;height: 200px;text-align: center; 
}
</style>


    

