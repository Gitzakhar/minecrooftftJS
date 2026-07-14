import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.set(0,8,12);

const renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff,3);

light.position.set(30,50,20);

scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff,0.5);

scene.add(ambient);

// Create a simple flat world
const geometry = new THREE.BoxGeometry(1,1,1);

const material = new THREE.MeshLambertMaterial({
color:0x55aa33
});

for(let x=-20;x<=20;x++){

    for(let z=-20;z<=20;z++){

        const cube = new THREE.Mesh(
            geometry,
            material
        );

        cube.position.set(x,0,z);

        scene.add(cube);

    }

}

function animate(){

requestAnimationFrame(animate);

renderer.render(scene,camera);

}

animate();