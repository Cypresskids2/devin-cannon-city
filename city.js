import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera,renderer.domElement)

const loader = new GLTFLoader();

loader.load("./devinCity.glb", function(gltf){
    scene.add(gltf.scene);
});

const light = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(light);

camera.position.z = 5;
controls.update();

function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);
}
animate();

const sun = new THREE.AmbientLight(ff,10000);
scene.add(light)

const sun1 = new THREE.PointLight(0,ffffff,10000)
sun.position.set(0,500,0)
scene.add(sun);

camera.position-z - 5
controls.update();
 
