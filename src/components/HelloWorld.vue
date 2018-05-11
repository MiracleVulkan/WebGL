<template>
<el-dialog title="information" :visible.sync="dialogTableVisible" width=80%>
  <el-table :data="items">
    <el-table-column property="title" label="title" width="150"></el-table-column>
    <el-table-column property="price" label="price" width="200"></el-table-column>
    <el-table-column property="img" label="img"></el-table-column>
  </el-table>
</el-dialog>
</template>

<script>
import * as Test from './test.js'

export default {
  data(){
      return {
          dialogTableVisible:true,
          items:[]
      }
  },
  created () {
      this.$http.get('/api/goods').then((data) => {
      this.items = data.body.data;
      // console.log(this.items);
      })
      Test.myfun();
  }
}
</script>

<style>
  .modalStyle{
    overflow:scroll
  }
</style>
