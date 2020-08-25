import React from "react";
import * as THREE from "three";
import { MTLLoader } from "../js/MTLLoader";
import { OBJLoader } from "../js/OBJLoader";
import { OrbitControls } from "../js/OrbitControls";

import "./Obj.css";

class Obj extends React.Component {
  componentDidMount() {
    var canvas = document.getElementById("container");
    console.log(canvas);
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    var camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    canvas.appendChild(renderer.domElement);

    var controls = new OrbitControls(camera, renderer.domElement);

    var light = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(light);

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set(0, 20, 20);
    controls.update();

    var mtlLoader = new MTLLoader();
    mtlLoader.setPath("/OBJ/");
    mtlLoader.load("IMG3D7-1.mtl", function (materials) {
      materials.preload();

      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath("/OBJ/");
      objLoader.load("IMG3D7-1.obj", function (object) {
        scene.add(object);
      });
    });

    var animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return <div className="col-md-8" data-aos="fade-up" id="container"></div>;
  }
}
export default Obj;
