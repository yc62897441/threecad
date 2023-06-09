/**************************************************
 File: index.js
 Name: Example 2
 Explain: Example 2
****************************************By QQBoxy*/
/*jshint node: true, esversion: 6 */
'use strict'
require('./index.scss')
require('../common/common.js')

import * as THREE from 'three'

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('app').appendChild(renderer.domElement)

// switch (parseInt(Math.random() * 5, 10)) {
switch (4) {
    case 0:
        var geometry = new THREE.BoxBufferGeometry(1, 1, 1) // BoxBufferGeometry的參數為(寬、高、深度)
        break
    case 1:
        var geometry = new THREE.CylinderBufferGeometry(1, 1, 1, 16) // CylinderBufferGeometry的參數為(上面半徑, 下面半徑, 高, 分段數量)
        break
    case 2:
        var geometry = new THREE.SphereBufferGeometry(1, 16, 16) // SphereBufferGeometry的參數為(半徑, 寬的分段數, 高的分段數)
        break
    case 3:
        var geometry = new THREE.TorusBufferGeometry(0.5, 0.2, 16, 50) // TorusBufferGeometry的參數為(半徑, 管狀直徑, 徑向分段數, 管狀分段數)
        break
    case 4:
        var geometry = new THREE.TorusKnotBufferGeometry(0.5, 0.2, 50, 16) // TorusKnotBufferGeometry的參數為(半徑, 管狀直徑, 管狀分段數, 徑向分段數)
        break
    default:
        var geometry = new THREE.Geometry()
        break
}

var material = new THREE.MeshPhongMaterial({
    color: Math.floor(Math.random() * 16777215), //Random color
})
var mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

var light1 = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(light1)
var light2 = new THREE.PointLight(0xffffff, 0.8, 0)
light2.position.set(10, 10, 10)
scene.add(light2)

camera.position.z = 5

var animate = function () {
    requestAnimationFrame(animate)
    mesh.rotation.x += 0.007
    mesh.rotation.y += 0.008
    mesh.rotation.z += 0.009
    renderer.render(scene, camera)
}

animate()
