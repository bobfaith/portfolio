import * as THREE from "three";
// import  "images";
const container = document.querySelector(".contact__bg");
const loader = new THREE.TextureLoader();
const imgURL = '/images/34.jpg';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    70, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);

const renderer =  new THREE.WebGL1Renderer({
    antialias: true,
})

renderer.setSize(window.innerWidth, window.innerHeight)
container.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
const geometry = new THREE.PlaneGeometry(4, 5, 15, 9);
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000, 
    // map: loader.load(imgURL),
    wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 5;

function animate(){
    // const time = clock.getElapsedTime();
    for(let i = 0; i < count; i++) {
        const x = geometry.attributes.position.getX(i);
        const y = geometry.attributes.position.getY(i);

    //     //ANIMATIONS
        const anim1= 0.75 * Math.sin(x * 2 + time * 0.7);
        const anim2= 0.25 * Math.sin(x + time * 0.7);
        const anim3= 0.1 * Math.sin(y * 15 + time * 0.7);

        geometry.attributes.position.setZ(i, anim1 + anim2 + anim3);
        geometry.attributes.position.setZ(i, x * 2);
        geometry.computerVertexNormals();
        gemetry.attributes.position.needsUpdate = true;
    }
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

/*
//RESPONSIVENESS
window.addEventListener("resize", ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

});

const geometry = new THREE.PlaneGeometry(18, 10, 15, 9);
const material = new THREE.MeshBasicMaterial({
    // map: loader('/images/34.jpg'),
    wireframe: true,
})

function animate(){
    const time = clock.getElapsedTime();
    for(let i = 0; i < count; i++) {
        const x = geometry.attributes.position.getX(i);
        const y = geometry.attributes.position.getY(i);

        //ANIMATIONS
        const anim1= 0.75 * Math.sin(x * 2 + time * 0.7);
        const anim2= 0.25 * Math.sin(x + time * 0.7);
        const anim3= 0.1 * Math.sin(y * 15 + time * 0.7);

        geometry.attributes.position.setZ(i, anim1 + anim2 + anim3);
        geometry.computerVertexNormals();
        gemetry.attributes.position.needsUpdate = true;
    }
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
*/