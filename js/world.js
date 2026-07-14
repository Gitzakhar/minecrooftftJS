export function createWorld() {

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x87CEEB);

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(0,5,10);

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    document.body.appendChild(renderer.domElement);

    const light =
        new THREE.DirectionalLight(
            0xffffff,
            1
        );

    light.position.set(20,30,10);

    scene.add(light);

    const geometry =
        new THREE.BoxGeometry();

    const material =
        new THREE.MeshLambertMaterial({
            color:0x55aa33
        });

    for(let x=-15;x<=15;x++){

        for(let z=-15;z<=15;z++){

            const cube =
                new THREE.Mesh(
                    geometry,
                    material
                );

            cube.position.set(x,0,z);

            scene.add(cube);

        }

    }

    function animate(){

        requestAnimationFrame(animate);

        renderer.render(
            scene,
            camera
        );

    }

    animate();

}