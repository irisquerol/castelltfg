/*import * as THREE from "three";
//import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let camera, scene, renderer, controls;
let mesh;

init();
animate();

function init() {
  scene = new THREE.Scene();
  //CAMARA
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.set(0, 1, 5); //xyz
  //camera.position.z = 2;

  //CONFIG WINDOWS:
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setSize(1200, 720);
  renderer.setClearColor(0xc0c0c0);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  //CONTROLES:
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 5;
  controls.maxDistance = 20;
  controls.minPolarAngle = 0.5;
  controls.maxPolarAngle = 1.5;
  controls.autoRotate = false;
  controls.target = new THREE.Vector3(0, 1, 0);
  controls.update();

  //TEXTURA Y FONDO:
  const textureLoader = new THREE.TextureLoader();
  const backgroundTexture = textureLoader.load("public/Fondo.jpg");
  scene.background = backgroundTexture;

  // LUCES:
  let ambientLight = new THREE.AmbientLight(0x7c7c7c, 3.0);
  scene.add(ambientLight);
  let light = new THREE.DirectionalLight(0xffffff, 3.0);
  light.position.set(0.32, 0.39, 0.7);
  scene.add(light);

  //CARGAR OBJETO 3D GLTF:
  /*const loader = new GLTFLoader().setPath("public/torre/");
  loader.load(
    "torre.gltf",
    (gltf) => {
      console.log("loading model");
      mesh = gltf.scene;

      mesh.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          //child.material.transparent = false;
          console.log("loading model");
        }
      });

      mesh.position.set(0, 1.05, -1);
      scene.add(mesh);

      //scene.add(light);
    },
    (xhr) => {
      console.log(`loading ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
      console.error(error);
    }
  );
  *//*
  //CARGAR OBJETO 3D FBX:
  const loader = new FBXLoader().setPath("public/fbx/");
  loader.load(
    "torre.FBX",
    (object) => {
      console.log("Model loaded");
      mesh = object;

      mesh.traverse((child) => {
        if (child.isMesh) {
          child.material.opacity = 1;
        }
      });

      mesh.position.set(0, 1.05, -1);
      scene.add(mesh);
    },
    (xhr) => {
      console.log(
        `Loading: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}%`
      );
    },
    (error) => {
      console.error("An error occurred", error);
    }
  );

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}*/