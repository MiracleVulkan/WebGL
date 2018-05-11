<template>
    <div class = "modelCanvas" id="three_canvas"></div>
</template>


<script>
// import * as THREE from '../js/three'
// var THREE = require('three');
// import * as TrackballControls from '../js/TrackballControls'
// import '../js/three.js'
// import '../js/ObjectLoaders.js'
// import '../js/TrackballControls.js'
// import '../js/support.js'
// import '../js/zlib.js'
// import '../js/Lut.js'
// import '../js/dynatree/jquery.min.js'
// import '../js/dynatree/jquery-ui.custom.min.js'
// import '../js/dynatree/skin/ui.dynatree.css'
// import '../js/dynatree/jquery.dynatree.min.js'
// import * as THREE from '../model/js/three.js'

import * as Three from 'three'
export default {
    name:'Model',
 data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
        var container = document.getElementById('three_canvas');

        console.log(container);
        console.log(container.clientHeight);
        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 1, 10000);
        this.camera.position.z = 1000;

        this.scene = new Three.Scene();

        var geometry = new Three.BoxGeometry(200, 200, 200);
        var material = new Three.MeshBasicMaterial({ color: 0xff0000 });

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);

        this.renderer = new Three.WebGLRenderer({alpha: true});
        this.renderer.setSize(container.clientWidth - 5, container.clientHeight-5);
        container.appendChild(this.renderer.domElement);
        window.addEventListener( 'resize', this.onWindowResize, false );
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    },
    onWindowResize :function() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth - 10, window.innerHeight - 10);
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>


<style>

html,
body,
.container {
  height: 100%;
  margin: 0;
}
canvas{
    height: 100%;
    width: 100%;
    margin: 0;
}
/* html,body{
    height: 100%;
    width: 100%;
    margin: 0;
} */

        .modelCanvas{
            top: 0;
            left: 0;
            width: 100%;
            height:100%;
            margin: 0;
            background: -moz-linear-gradient(top,  #75C8EB 0%, #FFFFFF 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top,  #75C8EB 0%, #FFFFFF 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom,  #75C8EB 0%, #FFFFFF 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        }
</style>