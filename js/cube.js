import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const TBgeometry = new THREE.BoxGeometry( 1, 0.1, 0.6 );
const TBmaterial = new THREE.MeshPhongMaterial( { color: 0xd8cbc7, specular: 0xf7f9f9, shininess: 10 } );
const toasterbase = new THREE.Mesh( TBgeometry, TBmaterial );
toasterbase.position.set( 0, -0.25, 0 );
scene.add( toasterbase );

const TBBgeometry = new THREE.BoxGeometry( 1, 0.04, 0.6 );
const TBBmaterial = new THREE.MeshPhongMaterial( { color: 0x1f1f24, specular: 0xf7f9f9, shininess: 10 } );
const toasterbbase = new THREE.Mesh( TBBgeometry, TBBmaterial );
toasterbbase.position.set( 0, -0.32, 0 );
scene.add( toasterbbase );

const Tgeometry = new THREE.BoxGeometry( 1, 0.6, 0.6 );
const Tmaterial = new THREE.MeshPhongMaterial( { color: 0xf7f9f9, specular: 0xf7f9f9, shininess: 10 } );
const toaster = new THREE.Mesh( Tgeometry, Tmaterial );
toaster.position.set( 0, 0.1, 0 );
scene.add( toaster );

const abyssgeometry = new THREE.BoxGeometry( 0.8, 0.601, 0.38 );
const abyssmaterial = new THREE.MeshPhongMaterial( { color: 0x1f1f24, specular: 0x1f1f24, shininess: 0 } );
const abyss = new THREE.Mesh( abyssgeometry, abyssmaterial );
abyss.position.set( 0, 0.1, 0 );
scene.add( abyss );

const T1geometry = new THREE.BoxGeometry( 0.6, 0.36, 0.08 );
const T1material = new THREE.MeshPhongMaterial( { color: 0xF2CDA8, specular: 0xc68028, shininess: 2 } );
const toast = new THREE.Mesh( T1geometry, T1material );
toast.position.set( 0, 0.4, 0.11 );
scene.add( toast );

const T2geometry = new THREE.BoxGeometry( 0.6, 0.38, 0.08 );
const T2material = new THREE.MeshPhongMaterial( { color: 0xF2CDA8, specular: 0xc68028, shininess: 2 } );
const toast2 = new THREE.Mesh( T2geometry, T2material );
toast2.position.set( 0, 0.4, -0.11 );
scene.add( toast2 );

const handlegeometry = new THREE.BoxGeometry( 0.06, 0.5, 0.08 );
const handlematerial = new THREE.MeshPhongMaterial( { color: 0xd8cbc7, specular: 0xcf7f9f9, shininess: 10 } );
const handle = new THREE.Mesh( handlegeometry, handlematerial );
handle.position.set( -0.5, 0.08, 0 );
scene.add( handle );

const handlergeometry = new THREE.BoxGeometry( 0.1, 0.06, 0.18 );
const handlermaterial = new THREE.MeshPhongMaterial( { color: 0x1f1f24, specular: 0xcf7f9f9, shininess: 10 } );
const handler = new THREE.Mesh( handlergeometry, handlermaterial );
handler.position.set( -0.55, 0.2, 0 );
scene.add( handler );

const decalgeometry = new THREE.BoxGeometry( 0.2, 0.1, 0.08 );
const decalmaterial = new THREE.MeshPhongMaterial( { color: 0xa1fcdf, specular: 0xc68028, shininess: 10 } );
const decal = new THREE.Mesh( decalgeometry, decalmaterial );
decal.position.set( 0.35, 0.3, 0.265 );
scene.add( decal );

const cgeometry = new THREE.CylinderGeometry( 0.08, 0.08, 0.05, 20 );
const cmaterial = new THREE.MeshPhongMaterial( {color: 0xd8cbc7,specular: 0xcf7f9f9, shininess: 10 } );
const cylinder = new THREE.Mesh( cgeometry, cmaterial );
cylinder.position.set( -0.35, -0.08, 0.29 );
cylinder.rotation.x = - Math.PI * 0.5;
scene.add( cylinder );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: 0xa1fcdf, specular: 0xf7f9f9, shininess: 10 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set( -2.5, 0, -2.5 );
scene.add( cube );

const matPLane = new THREE.MeshPhongMaterial( { color: 0x608099 } );
const geoPLane = new THREE.PlaneGeometry( 10, 10 );
const mshPLane = new THREE.Mesh( geoPLane, matPLane );
mshPLane.rotation.x = - Math.PI * 0.5;

mshPLane.receiveShadow = true;
mshPLane.position.set( 0, - 0.9, 0 );
scene.add( mshPLane );

const grid = new THREE.GridHelper( 10, 10 )
grid.position.set( 0, -0.8, 0 )

scene.add( grid );

const dirLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
    dirLight.position.set( -5, 4, 6 ).normalize();
    scene.add( dirLight );

const light = new THREE.AmbientLight( 0x404040, 0.7 ); // soft white light
scene.add( light );

camera.position.z = 5;
camera.position.y = 2;

const controls = new OrbitControls( camera, renderer.domElement );
    //controls.addEventListener( 'change', render ); // use only if there is no animation loop
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controls.enableDamping = true;
    controls.enablePan = false;

const animate = function () {
    requestAnimationFrame( animate );

    controls.update();

    renderer.render( scene, camera );
};

animate();