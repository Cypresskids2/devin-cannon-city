import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);ene =

 renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera,renderer.domElement)

const geometry = new THREE.BoxGeometry(4, 1, 1);
const material = new THREE.MeshLambertMaterial({color: 0xffff00});
const cube1 = new THREE.Mesh(geometry,material);
scene.add(cube1); 

const light = new THREE.PointLight(0xffffff, 1000);
light.position.set(0,5,0); //x, y, z,
scene.add(light);

const ambientlight = new THREE.AmbientLight(0xfFFFFF, .5);
scene.add(ambientlight);


const sphereGeo = new THREE.SphereGeometry(1,64,64);
const sphereMat = new THREE.MeshLambertMaterial({color: 0xFFFF00});
const sphere = new THREE.Mesh(sphereGeo,sphereMat);
scene.add(sphere)
sphere.position.x = 10

camera.position.z = 5;
camera.position.x = 5;
cube1.position.x = 4


function animate(){
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    cube1.rotation.x += 0.01
    cube1.rotation.y += 0.01


    renderer.render(scene,camera);
}
animate(); 