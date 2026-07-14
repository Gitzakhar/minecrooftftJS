// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

// Create camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 5, 10);

// Create renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);


// Light
const light = new THREE.DirectionalLight(
    0xffffff,
    1
);

light.position.set(5,10,5);

scene.add(light);


// Create a grass block
function createBlock(x,y,z){

    const geometry =
        new THREE.BoxGeometry(1,1,1);

    const material =
        new THREE.MeshLambertMaterial({
            color: 0x55aa33
        });

    const block =
        new THREE.Mesh(
            geometry,
            material
        );

    block.position.set(x,y,z);

    scene.add(block);
}


// Make ground
for(let x=-10;x<=10;x++){

    for(let z=-10;z<=10;z++){

        createBlock(x,0,z);

    }

}


// Animation loop
function animate(){

    requestAnimationFrame(animate);

    renderer.render(
        scene,
        camera
    );

}

animate();