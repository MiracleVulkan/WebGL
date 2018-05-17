<template>
  <div id="home">
    <div>
      <img src="../assets/logo.png" @click="modelhtml">
      <img src="../assets/logo.png" @click="$goRoute('/fault1')">
      <div class="fault">
        <img :src="imgsrc.src" v-for="imgsrc in imginformation" @click="$goRoute('/fault2')">
      </div>
      <div class="resolution">
        <!-- <img :src="imgsrc.src" v-for="imgsrc in imginformation" @click="showinfo(imgsrc,'resolution')"> -->
        <img :src="imgsrc.src" v-for="imgsrc in imginformation" @click="$goRoute(imgsrc.path)">
      </div>
      <!-- <modal :dialogtablevisible="dialogtablevisible" :showmode="showmode" @updatevalue="updatevalue"></modal> -->
    </div>
  </div>
</template>

<script>
import modal from '../Modal'

export default {
  name: 'App',
  data(){
    return {
        imgsrcs:[
          {src:"logo.png",
          name:"fault1",
          path:"/fault1"},
          {src:"logo.png",
          name:"fault2",
          path:"/fault2"},
          {src:"logo.png",
          name:"fault3",
          path:"/fault3"}
        ],
        dialogtablevisible:false,
        showmode:"default",
        imginfo:"logo.png",
    }
  },
  components:{
    modal
  },
  computed:{
    imginformation:function(){
      var imgtemp = [];
      
      for(var i = 0;i< this.imgsrcs.length;i++)
      {
        let imginfo = {};
        imginfo.src=require("../assets/" + this.imgsrcs[i].src);
        imginfo.name = this.imgsrcs[i].src;
        imginfo.path = this.imgsrcs[i].path;
        imgtemp.push(imginfo);
      }
      return imgtemp;
    },

  },
  methods:{
    show(){
      this.dialogtablevisible = true;
    },
    modelhtml(){
        window.location.assign("./src/model/model.html");
    },
    showinfo(imgsrc,type){
      this.dialogtablevisible = true;
      this.showmode=type;
      this.imginfo = imgsrc;
      
    },
    updatevalue(value){
      this.dialogtablevisible = value;
    }
  }
}
</script>

<style>
  .fault{
    text-align: center;
    margin-top: 50px;
    position: relative;
    margin-bottom: 200px;
  }
  .resolution{
    text-align: center;
    position: relative;
  }
  img{
    position: relative;
    margin-left: 50px;
  }
  #home{
    width: 100%;
    height: 100%;
  }
</style>
