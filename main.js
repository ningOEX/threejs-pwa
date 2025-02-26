import * as THREE from 'three';

// 浏览器控制台测试，是否引入成功
console.log(THREE.Scene);

// 在 main.js 中编写 Three.js 代码，创建一个简单的 3D 场景。
const scene = new THREE.Scene();

// 相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;

// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// 圆柱体
const geometry = new THREE.CylinderGeometry();

// 材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

// 网格
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// 窗口大小调整
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
