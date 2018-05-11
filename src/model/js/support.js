window.onload = function() {

    var closeTag = document.getElementsByClassName("dockingPanelClose");
    closeTag[0].onclick = function() {
        document.getElementById("ViewerModelStructurePanel").style.display = "none";
    }

    var icon = document.getElementsByTagName("icon");
    resizeStructurePanel();
    for (var i = 0; i < icon.length; i++) {
        icon[i].onclick = function() {
            if (this.style.display != "none") {
                var parentGroup = this.parentNode.parentNode;
                var list = parentGroup.classList;
                if (list[0] == "expanded" || list[1] == "expanded") {
                    parentGroup.classList.remove("expanded");
                    parentGroup.classList.add("collapsed");
                } else if (list[0] == "collapsed" || list[1] == "collapsed") {
                    parentGroup.classList.remove("collapsed");
                    parentGroup.classList.add("expanded");
                }
            }
            resizeStructurePanel();
        }
    }


    var searchBox = document.getElementsByClassName("toolbar-search-box");

    function doSearch(searchBox) {
        searchBox.value;
        var label = document.getElementsByTagName("label");
        for (var i = 0; i < label.length; i++) {
            if (label[i].innerHTML.indexOf(searchBox.value) != -1) {
                label[i].parentNode.parentNode.className = "expanded visible";
            } else {
                label[i].parentNode.parentNode.className = "expanded dim";
            }
        }
    }
    searchBox[0].addEventListener("input", function(e) { // delayed: as typing
        doSearch(searchBox[0]);
    });

    searchBox[0].addEventListener("change", function(e) { // immediate: press enter, lose focus
        // clearTimeout(timeout);   
        doSearch(searchBox[0]);
    });

    function select() {
        $(document).click(function() {
            $(".select_module_con ul").slideUp("fast");
        })
        var module = $(".select_result");
        module.click(function(e) {
            e.stopPropagation();
            var ul = $(this).next();
            ul.stop().slideToggle("fast");
            ul.children().click(function(e) {
                e.stopPropagation();
                $(this).parent().prev().children("span").text($(this).text());
                ul.stop().slideUp("fast");
            })
        })
    }
    $(function() {
        select();
    })

}


function cli(li) {
    if(scene.colorType === undefined)
        return;

    var value = document.getElementById("s4").checked;
    var times = 0;
    if (value === true) {
        document.getElementsByClassName("select_contain")[0].style.display = "block";
        //第一次的时候是没有顶点颜色，所以要进行一次顶点颜色的判断，如果没有颜色就要添加颜色
        if (scene.hasVertexColors === false) {
            var selectResult = document.getElementsByClassName("select_result")[0];
            var span = createHTMLElement(selectResult,"span",undefined,"colorType");
            span.innerHTML = scene.colorType[0].Name;
            var selectModule = document.getElementsByClassName("select_module_con")[0];
            var typeUL = createHTMLElement(selectModule,"ul");

            for(var ct = 0;ct < scene.colorType.length;ct ++ ){
                var typeLI = createHTMLElement(typeUL,"li","colorTypeName");
                typeLI.innerHTML = scene.colorType[ct].Name;
            }

            $(".colorTypeName").click(function(){
                clearLut();
                updateLut(colorMap, numberOfColors, legendLayout,this.innerHTML,true);
            });
            var colorType = document.getElementById("colorType").innerHTML;
            updateLut(colorMap, numberOfColors, legendLayout,colorType,true);
            var has = scene["hasVertexColors"];
            scene.hasVertexColors = true;
            scene.vertexColorType = colorType;
        }
        else {
            for(var sv = 0;sv < lutSceneVector.length; sv++){
                LutScene.add(lutSceneVector[sv]);
            }
        }
        for (var i = 0; i < scene.children.length; i++) {
            if (scene.children[i].type != "Object3D" &&  scene.children[i].type != "Group")
                continue;
            scene.children[i].children[0].material = new THREE.MeshBasicMaterial({
                vertexColors: THREE.VertexColors,
                side: THREE.DoubleSide,
                polygonOffset: true,
                polygonOffsetFactor: 1,polygonOffsetUnits: 1
            });
        }
        lutVisible = true;
    } else {
        
        document.getElementsByClassName("select_contain")[0].style.display = "none";
        for (var i = scene.children.length - 1; i > -1; i--) {
            if (scene.children[i].type != "Object3D" &&  scene.children[i].type != "Group")
                continue;
            scene.children[i].children[0].material = originMaterialsVector[scene.children[i].uuid];
        }
        clearLut();
        lutVisible = false;
    }
}


function meshEdge(li) {
    var check =  li.checked ;

    for(var i = 0;i < scene.children.length; ++i){
        if (scene.children[i].type === "Group"){
            scene.children[i].children[1].visible = check; //因为存储的结构是0是Mesh，1是线框
        }
    }
}

function clearLut() {
    for (var i = LutScene.children.length - 1; i >= 0; i--) {
        lutSceneVector.push(LutScene.children[i]);
        LutScene.remove(LutScene.children[i]);
    }
}

function resizeStructurePanel() {
    var structurePanel = document.getElementById("ViewerModelStructurePanel");
    var treeview = document.getElementsByClassName("treeview");
    var newHeight = treeview[0].clientHeight + 75;
    var maxHeight = window.innerHeight - 100;
    if (newHeight > maxHeight)
        newHeight = maxHeight;
    structurePanel.style.height = newHeight.toString() + 'px';
}

function judgeDirction(index) {
    switch (index) {
        case 0:
            dirVec.set(1.0, 0.0, 0.0);
            RightView();
            break;
        case 1:
            dirVec.set(-1.0, 0.0, 0.0);
            LeftView();
            break;
        case 2:
            dirVec.set(0.0, 1.0, 0.0);
            TopView();
            break;
        case 3:
            dirVec.set(0.0, -1.0, 0.0);
            BottomView();
            break;
        case 4:
            dirVec.set(0.0, 0.0, 1.0);
            FrontView();
            break;
        case 5:
            dirVec.set(0.0, 0.0, -1.0);
            BackView();
            break;
    }
}

function FrontView() {
    fitAll();
    camera.rotation.x = 0;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    camera.up = new THREE.Vector3(0.0, 1.0, 0.0);
    camera.updateProjectionMatrix();
};

function BackView() {
    fitAll();
    camera.rotation.x = 0;
    camera.rotation.y = Math.PI;
    camera.rotation.z = 0;
    camera.up = new THREE.Vector3(0.0, 1.0, 0.0);
};

function LeftView() {
    fitAll();
    camera.rotation.x = 0;
    camera.rotation.y = -Math.PI / 2;
    camera.rotation.z = 0;
    camera.up = new THREE.Vector3(0.0, 1.0, 0.0);
};

function RightView() {
    fitAll();
    camera.rotation.x = 0;
    camera.rotation.y = Math.PI / 2;
    camera.rotation.z = 0;
    camera.up = new THREE.Vector3(0.0, 1.0, 0.0);
};

function TopView() {
    fitAll();
    camera.rotation.x = -Math.PI / 2;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    camera.up = new THREE.Vector3(0.0, 0.0, -1.0);
    // var target = new THREE.Vector3();
    // controls.target = target;
    // camera.position.set(0, 100, 0);
};

function BottomView() {
    fitAll();
    camera.rotation.x = Math.PI / 2;
    camera.rotation.y = 0;
    camera.rotation.z = 0;
    camera.up = new THREE.Vector3(0.0, 0.0, 1.0);
    // var target = new THREE.Vector3();
    // controls.target = target;
    // camera.position.set(0, -100, 0);
};

function calculateScaleFactor(boundingBoxMinimum, boundingBoxMaximum) {
    // Get bounding box size
    var bBoxSize = [(boundingBoxMaximum[0] - boundingBoxMinimum[0]),
        (boundingBoxMaximum[1] - boundingBoxMinimum[1]), (boundingBoxMaximum[2] - boundingBoxMinimum[2])
    ];

    // Detect largest dimension
    var largestSize = bBoxSize[0];
    if (bBoxSize[1] > largestSize) {
        largestSize = bBoxSize[1];
    }
    if (bBoxSize[2] > largestSize) {
        largestSize = bBoxSize[2];
    }

    // Scale dimension to 100
    return 100.0 / largestSize;
}

function fitAll() {
    // Calculate bounding box of the whole scene
    var boundingBoxOfNode = new THREE.Box3();

    boundingBoxOfNode.max = aabbMax;
    boundingBoxOfNode.min = aabbMin;


    // Refocus camera the center of the given object
    var centerOfGravity = boundingBoxOfNode.center();
    // var newCameraPosition = new THREE.Vector3();
    // newCameraPosition.subVectors(centerOfGravity, controls.target);
    // camera.position.addVectors(camera.position, newCameraPosition);
    camera.lookAt(centerOfGravity);
    controls.target.set(centerOfGravity.x, centerOfGravity.y, centerOfGravity.z);

    // Move camera along z until the object fits into the screen
    var sphereSize = boundingBoxOfNode.size().length() * 0.5;
    var distToCenter = sphereSize / Math.sin(Math.PI / 180.0 * camera.fov * 0.5);
    var target = controls.target;
    var vec = new THREE.Vector3(distToCenter, distToCenter, distToCenter);
    vec.multiply(dirVec);
    // vec.subVectors(camera.position, target);
    // vec.setLength(distToCenter);
    camera.position.addVectors(vec, target);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseDown(event) {
    // event.preventDefault();
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, cameraHUD);
    var intersects = raycaster.intersectObjects(objects);
    if (intersects.length > 0) {
        var index = intersects[0].face.materialIndex;
        judgeDirction(index);
        renderer.updateProjectionMatrix;
    }
}



function unionBBox( b, p )
{
    var r = new Object();
    r.min = b.min.clone();
    r.max = b.max.clone();

    r.min.x = Math.min( b.min.x, p.x );
    r.min.y = Math.min( b.min.y, p.y );
    r.min.z = Math.min( b.min.z, p.z );
    r.max.x = Math.max( b.max.x, p.x );
    r.max.y = Math.max( b.max.y, p.y );
    r.max.z = Math.max( b.max.z, p.z );

    return r;
}


function transformBBox(b, matrix)
{
    var ret = new Object();
    ret.min = matrix.multiplyVector3(new THREE.Vector3(b.min.x, b.min.y, b.min.z));
    ret.max = matrix.multiplyVector3(new THREE.Vector3(b.min.x, b.min.y, b.min.z));

    ret = unionBBox(ret, matrix.multiplyVector3(new THREE.Vector3(b.max.x, b.min.y, b.min.z)));
    ret = unionBBox(ret, matrix.multiplyVector3(new THREE.Vector3(b.min.x, b.max.y, b.min.z)));
    ret = unionBBox(ret, matrix.multiplyVector3(new THREE.Vector3(b.min.x, b.min.y, b.max.z)));
    ret = unionBBox(ret, matrix.multiplyVector3(new THREE.Vector3(b.min.x, b.max.y, b.max.z)));
    ret = unionBBox(ret, matrix.multiplyVector3(new THREE.Vector3(b.max.x, b.max.y, b.min.z)));
    ret = unionBBox(ret, matrix.multiplyVector3(new THREE.Vector3(b.max.x, b.min.y, b.max.z)));
    ret = unionBBox(ret, matrix.multiplyVector3(new THREE.Vector3(b.max.x, b.max.y, b.max.z)));

    return ret;
}


function zoomExtents(aabbMin, aabbMax) {

    //found this method here: https://github.com/mrdoob/three.js/issues/1424
    // Compute world AABB and radius (approx: better compute BB be in camera space)
    // var aabbMin = new THREE.Vector3();
    // var aabbMax = new THREE.Vector3();
    var radius = 0;
    //loop over the meshes in the platypus scene
    for (var m = 0; m < scene.children.length; m++) {
        try {
            //if mesh,
            if (scene.children[m].hasOwnProperty("geometry")) {
                var geo = meshes[m].Three_Meshes.geometry;
                geo.computeBoundingBox();

                aabbMin.x = Math.min(aabbMin.x, geo.boundingBox.min.x);
                aabbMin.y = Math.min(aabbMin.y, geo.boundingBox.min.y);
                aabbMin.z = Math.min(aabbMin.z, geo.boundingBox.min.z);
                aabbMax.x = Math.max(aabbMax.x, geo.boundingBox.max.x);
                aabbMax.y = Math.max(aabbMax.y, geo.boundingBox.max.y);
                aabbMax.z = Math.max(aabbMax.z, geo.boundingBox.max.z);
            }
            //if object3d or whatever, figure out how to get a bounding box
            else {
                var obj = scene.children[m].children[0].geometry;
                obj.computeBoundingBox();
                var matrixData = new THREE.Matrix4();
                matrixData.fromArray(scene.children[m].matrixData);

                var bboxWorldSpace = transformBBox(obj.boundingBox, matrixData);

                aabbMin.x = Math.min(aabbMin.x, bboxWorldSpace.min.x);
                aabbMin.y = Math.min(aabbMin.y, bboxWorldSpace.min.y);
                aabbMin.z = Math.min(aabbMin.z, bboxWorldSpace.min.z);
                aabbMax.x = Math.max(aabbMax.x, bboxWorldSpace.max.x);
                aabbMax.y = Math.max(aabbMax.y, bboxWorldSpace.max.y);
                aabbMax.z = Math.max(aabbMax.z, bboxWorldSpace.max.z);
            }
        } catch (e) {
            console.log("VA3C zoom extents error in mesh loop: " + e);
        }
    }

    // Compute world AABB center
    var aabbCenter = new THREE.Vector3();
    aabbCenter.x = (aabbMax.x + aabbMin.x) * 0.5;
    aabbCenter.y = (aabbMax.y + aabbMin.y) * 0.5;
    aabbCenter.z = (aabbMax.z + aabbMin.z) * 0.5;

}


function createViewTree() {


    function getMeshName() {
        if (undefined === scene)
            return;
        var arr  = new Object();

        for (var i = 0; i < scene.children.length; i++) {
            if (scene.children[i].name != "") {
                if(arr[scene.children[i].name] == undefined){
                    arr[scene.children[i].name] = 1;
                    meshName[i] = scene.children[i].name;
                }
                else{
                    var nameCount =  arr[scene.children[i].name] ++;
                    meshName[i] = scene.children[i].name + '_' + nameCount;
                }
                nameUUIDMap[meshName[i]] = scene.children[i].uuid;
            }
        }
    }

    getMeshName();
    var viewTree = document.getElementsByClassName("treeview");
    var mainGroup = createHTMLElement(viewTree[0], "group", "collapsed");
    var mainHeader = createHTMLElement(mainGroup, "header");
    createHTMLElement(mainHeader, "icon");
    var mainLabel = createHTMLElement(mainHeader, "label");
    mainLabel.innerHTML = "Main ViewTree";
    for (var i = 0; i < meshName.length; i++) {
        var leaf = createHTMLElement(mainGroup, "leaf", "expanded");
        var header = createHTMLElement(leaf, "header");
        var checkbox = createHTMLCheckBox(header,"input","checkbox","visible");
        var checkBox=document.createElement("input");
        checkBox.setAttribute("type","checkbox");

        header.appendChild(checkbox);

        var label = createHTMLElement(header, "label");
        label.innerHTML = meshName[i];
    }

    resizeStructurePanel();
    iconEvent();
}

function iconEvent() {
    var icon = document.getElementsByTagName("icon");
    for (var i = 0; i < icon.length; i++) {
        icon[i].onclick = function() {
            if (this.style.display != "none") {
                var parentGroup = this.parentNode.parentNode;
                var list = parentGroup.classList;
                if (list[0] == "expanded" || list[1] == "expanded") {
                    parentGroup.classList.remove("expanded");
                    parentGroup.classList.add("collapsed");
                } else if (list[0] == "collapsed" || list[1] == "collapsed") {
                    parentGroup.classList.remove("collapsed");
                    parentGroup.classList.add("expanded");
                }
            }
            resizeStructurePanel();
        }
    }
    var labels = document.getElementsByTagName("label");
    for (var i = 0, length = labels.length; i < length; i++) {
        labels[i].onclick = function() {
            var id = nameUUIDMap[this.innerHTML];
            if (this.parentNode.classList[0] == "mainTree") {
                this.parentNode.classList.remove("mainTree");
                for (var j = 0; j < scene.children.length; j++) {
                    if (id == scene.children[j].uuid) {
                        if(lutVisible === true)
                            scene.children[j].children[0].material = postPressMaterial;
                        else
                            scene.children[j].children[0].material.color = scene.children[j].children[0].originColor;
                        break;
                    }
                }

            } else {
                var mainTree = document.getElementsByClassName("mainTree");
                for (var m = 0; m < mainTree.length; m++) {
                    var name = mainTree[m].childNodes[1].innerHTML;
                    var lastID = nameUUIDMap[name];

                    for (var n = 0; n < scene.children.length; n++) {
                        if (lastID == scene.children[n].uuid) {
                            if(lutVisible === true)
                                scene.children[n].children[0].material = postPressMaterial;
                            else
                                scene.children[n].children[0].material.color = scene.children[n].children[0].originColor;
                            break;
                        }
                    }
                    mainTree[m].classList.remove("mainTree");
                }
                this.parentNode.classList.add("mainTree");
                for (var j = 0; j < scene.children.length; j++) {
                    if (id == scene.children[j].uuid) {
                        var highLightMaterial = highLightMaterials();
                        scene.children[j].children[0].originColor = scene.children[j].children[0].material.color;
                        scene.children[j].children[0].material = highLightMaterial;
                        break;
                    }
                }

                // window.addEventListener("removeOtherClassList",remove,false);
            }
        }
    }

}

function createHTMLElement(parentType, typeName, className, idName) {
    var newElement = document.createElement(typeName);
    if (undefined != className)
        newElement.classList.add(className);
    if (undefined != idName)
        newElement.id = idName;
    parentType.appendChild(newElement);
    return newElement;
}

function createHTMLCheckBox(parentType,label,type,className) {
    var newElement = document.createElement(label);
    if (undefined != className)
        newElement.classList.add(className);
    if (undefined != type)
        newElement.type = type;
    parentType.appendChild(newElement);
    return newElement;
}

function highLightMaterials() {
    var materials = new THREE.MeshPhongMaterial;
    materials.shininess = 64;
    materials.color.setRGB(1.0, 0.0, 0.0);
    materials.side = THREE.DoubleSide;
    materials.polygonOffset = true;
    materials.polygonOffsetFactor = 1;
    materials.polygonOffsetUnits = 1
    return materials;
}

//自定义事件构造函数
function EventTarget() {
    //事件处理程序数组集合
    this.handlers = {};
}
//自定义事件的原型对象
EventTarget.prototype = {
    //设置原型构造函数链
    constructor: EventTarget,
    //注册给定类型的事件处理程序，
    //type -> 自定义事件类型， handler -> 自定义事件回调函数
    addEvent: function(type, handler) {
        //判断事件处理数组是否有该类型事件
        if (typeof this.handlers[type] == 'undefined') {
            this.handlers[type] = [];
        }
        //将处理事件push到事件处理数组里面
        this.handlers[type].push(handler);
    },
    //触发一个事件
    //event -> 为一个js对象，属性中至少包含type属性，
    //因为类型是必须的，其次可以传一些处理函数需要的其他变量参数。（这也是为什么要传js对象的原因）
    fireEvent: function(event) {
        //模拟真实事件的event
        if (!event.target) {
            event.target = this;
        }
        //判断是否存在该事件类型
        if (this.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type];
            //在同一个事件类型下的可能存在多种处理事件，找出本次需要处理的事件
            for (var i = 0; i < handlers.length; i++) {
                //执行触发
                handlers[i](event);
            }
        }
    },
    //注销事件
    //type -> 自定义事件类型， handler -> 自定义事件回调函数
    removeEvent: function(type, handler) {
        //判断是否存在该事件类型
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            //在同一个事件类型下的可能存在多种处理事件
            for (var i = 0; i < handlers.length; i++) {
                //找出本次需要处理的事件下标
                if (handlers[i] == handler) {
                    break;
                }
            }
            //从事件处理数组里面删除
            handlers.splice(i, 1);
        }
    }
};


// document.getElementsByClassName("viewMenu")[0].addEventListener("mouseout",function () {
//     document.getElementsByTagName("ul")[0].style.display = "none";
// })


function onKeyDown(e) {

    var maps = ['rainbow', 'cooltowarm', 'blackbody', 'grayscale'];

    var colorNumbers = ['16', '128', '256', '512'];

    if(lutVisible == false)
        return;

    if (e.keyCode == 65) {

//                cleanScene();

        clearLut();
        var index = maps.indexOf(colorMap) >= maps.length - 1 ? 0 : maps.indexOf(colorMap) + 1;

        colorMap = maps[index];

        updateLut(colorMap, numberOfColors, legendLayout,document.getElementById("colorType").innerHTML,true);

    } else if (e.keyCode == 68) {

        if (lutSceneVector != undefined && lutSceneVector.length != 0) {
            for (var i = 0; i < lutSceneVector.length; i++)
                LutScene.add(lutSceneVector[i]);
            lutSceneVector.splice(0, lutSceneVector.length);
        } else {
            for (var i = LutScene.children.length - 1; i >= 0; i--) {
                lutSceneVector.push(LutScene.children[i]);
                LutScene.remove(LutScene.children[i]);
            }
        }

    } else if (e.keyCode == 83) {

        // cleanScene();

        clearLut();
        if (!legendLayout) return false;

        lut.setLegendOff();

        if (legendLayout == 'horizontal') {

            legendLayout = 'vertical';
            LutCamera.left = 0;
            LutCamera.top = 13;
            LutCamera.updateProjectionMatrix();

        } else {

            legendLayout = 'horizontal';
            LutCamera.left = 10;
            LutCamera.top = 15;
            LutCamera.updateProjectionMatrix();

        }
        updateLut(colorMap, numberOfColors, legendLayout,document.getElementById("colorType").innerHTML,false);

    }

}

