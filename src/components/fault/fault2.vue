<template>
  <div>
    <!-- <input type="text" v-model="searchword" /> -->
    <!-- <button type="button" @click="search">GO</button> -->
    <v-tree ref='tree' :data='treeData'   :halfcheck='true'/>
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
          title:undefined,
          modelist:[],
          modeltitle:[],
          treeData: [{
            title: 'node1',
            expanded: true,
            children: [
              // {title: 'node 1-1'},
            ]
        }]
      }
  },
  created(){
      this.$http.get('/api/inspection').then((data) => {
      this.items = data.body.data;
      this.modeltitle = this.items[0].mode;
      this.modelist = this.items[0].childMode[0].childMode;
      this.treeData = [];
      // this.treeData[0].title = this.modeltitle;
      for(var i = 0; i < this.items.length; i ++){
        let onelevel = {};
        onelevel.title = this.items[i].mode;
        onelevel.expanded = true;
        onelevel.children = [];
        this.items[i].childMode.forEach((element) => {
          let secondlevel = {};
          secondlevel.title = element.mode;
          secondlevel.expanded = true;
          secondlevel.children = [];
          element.childMode.forEach(ele => {
            let thirdlevel = {};
            thirdlevel.title = ele;
            secondlevel.children.push(thirdlevel);            
          })
          onelevel.children.push(secondlevel);
        });
        this.treeData.push(onelevel);
      }
      })
  },
  computed:{
      getTreeData(){
          let vueTreeData = this.treeData;
          vueTreeData[0].title = this.modeltitle;
          // vueTreeData[0].children.push(tempChild);
          return vueTreeData;
      }
  },
  methods:{
    tpl (node, ctx) {
      // let titleClass = node.selected ? 'node-title node-selected' : 'node-title'
      // if (node.searched) titleClass += ' node-searched'
      // return <span>
      //   <button style='color:blue; background-color:pink' onClick={() => this.$refs.tree.addNode(node, {title: 'sync loading'})}>+</button>
      // <span class={titleClass} domPropsInnerHTML={node.title} onClick={() => {
      //   ctx.parent.nodeSelected(ctx.props.node)
      //   console.log(ctx.parent.getSelectedNodes())
      // }}>
      // </span>
      // <button style='color:red; background-color:pink' onClick={() => this.$refs.tree.delNode(node.parent, node)}>delete</button>
      // </span>
    },
    // async asyncLoad (node) {
    //   this.$refs.tree.addNodes(node, await this.$api.demo.getChild())
    // },
    search () {
      this.$refs.tree.searchNodes(this.searchword)
    }
  }
}
</script>