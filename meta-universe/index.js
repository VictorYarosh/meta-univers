let scene, camera, render, directionalLightLeft, directionalLightFrontTopRight, renderer, controls;

scene = new THREE.Scene()
// scene.background = new THREE.Color(0xdddddd) // canvas background

camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000)
camera.rotation.y = 45/180*Math.PI
camera.position.x = 10
camera.position.y = 0
camera.position.z = 0

directionalLightLeft = new THREE.DirectionalLight(0xffffff, 100) //left
directionalLightLeft.position.set(0,0,1)
directionalLightLeft.castShadow = false
scene.add(directionalLightLeft)

directionalLightFrontTopRight = new THREE.DirectionalLight(0xffffff, 100) //front, top, right
directionalLightFrontTopRight.position.set(1,1,-1)
directionalLightFrontTopRight.castShadow = false
scene.add(directionalLightFrontTopRight)

const canvas = document.querySelector('#c');
renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enabled = false;
// controls.enablePan = false;
document.body.appendChild(renderer.domElement)

// Drawing text in canvas

// var text2 = document.createElement('div');
// text2.className = "123";
// text2.style.position = 'absolute';
// //text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
// // text2.style.width = 100;
// // text2.style.height = 100;
// text2.style.fontSize = 32 + "px";
// // text2.style.backgroundColor = "blue";
// // text2.style.color = "white";
// text2.innerHTML = "hi \n there!";
// text2.style.top = 200 + 'px';
// text2.style.left = 200 + 'px';
// document.body.appendChild(text2);

let model1, model2, model3;

let p1 = loadModel('3D_objects/cube2.gltf').then(result => {  model1 = result.scene.children[0]; });
let p2 = loadModel('3D_objects/cube2.gltf').then(result => {  model2 = result.scene.children[0]; });
let p3 = loadModel('3D_objects/cube2.gltf').then(result => {  model3 = result.scene.children[0]; });

Promise.all([p1, p2, p3]).then(() => {
    model1.position.set(2.4, -1.05, 1.9); //front down right
    model1.rotation.set( -0.01, 0.01, 0 );
    model1.scale.set(1.6, 0.35, 0.67);

    model2.position.set(0,-2.74,-1.65);
    model2.rotation.set( 0, Math.PI / 2, 0 );
    model2.scale.set(1.41, 0.26, 1);

    model3.position.set(1, -1.18, -2.33);
    model3.rotation.set( 0, -0.03, 0 );
    model3.scale.set(1, 0.25, 0.7);

    scene.add(model1);
    scene.add(model2);
    scene.add(model3);

    const textElements = [
        document.querySelector(".nuclearTextDiv"),
        document.querySelector(".hashRateTextDiv"),
        document.querySelector(".NFTTextDiv")
    ];

    textElements.forEach(textElement => {
        textElement.addEventListener(`mouseover`, event => {
            if(!textElement.classList.contains("glow")){
                textElement.classList.add("glow");
            }
        }, false);

        textElement.addEventListener(`mouseout`, event => {
            if(textElement.classList.contains("glow")){
                textElement.classList.remove("glow");
            }
        }, false);
    })

    var mouseDown = false;
    const domElements = new THREEx.DomEvents(camera, renderer.domElement)
    const models = [model1, model2, model3];
    models.forEach (model => { 
            domElements.addEventListener(model, `mouseover`, event => {
                if(!textElements[models.indexOf(model)].classList.contains("glow")){
                    textElements[models.indexOf(model)].classList.add("glow");
                }
            }, false);

            domElements.addEventListener(model, `mouseout`, event => {
                if(textElements[models.indexOf(model)].classList.contains("glow")){
                    textElements[models.indexOf(model)].classList.remove("glow");
                }
            }, false);

            domElements.addEventListener( model, `mousedown`, event => {
                mouseDown = true;
            }, false);

            domElements.addEventListener(model, `mousemove`, event => {

                if (!mouseDown) {
                    return;
                }

                model.rotation.y += event.origDomEvent.movementX * 0.001;
            }, false);
        }
 
    )

    document.addEventListener(`mouseup`, event => {
        mouseDown = false;
    }, false);

    animate();
});

// Static method for adding models

// let loader = new THREE.GLTFLoader()
// loader.load('3D_objects/cube2.gltf', function(gltf){
//     car = gltf.scene.children[0]
//     // car.scale.set(0.5, 0.5, 0.5)
//     scene.add(gltf.scene)
// })

// loader.load('3D_objects/cylindr.gltf', function(gltf){
//     car2 = gltf.scene.children[0]
//     // car2.scale.set(0.6, 0.6, 0.6)
//     scene.add(gltf.scene)
// })

// animate();

function loadModel(url) {
    return new Promise(resolve => {
      new THREE.GLTFLoader().load(url, resolve);
    });
}

function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}