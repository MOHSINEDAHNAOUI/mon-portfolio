/**
 * Portfolio 3D Scene Handler
 * Powered by Three.js & GSAP
 */

class Portfolio3D {
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'three-container';
        this.container.style.position = 'fixed';
        this.container.style.top = '0';
        this.container.style.left = '0';
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.zIndex = '-1';
        this.container.style.pointerEvents = 'none';
        document.body.prepend(this.container);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.objects = [];
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };

        this.init();
        this.animate();
        this.addEventListeners();
    }

    init() {
        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x3b82f6, 2);
        pointLight1.position.set(2, 3, 4);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x8b5cf6, 2);
        pointLight2.position.set(-2, -3, 4);
        this.scene.add(pointLight2);

        // Particles
        this.createParticles();
        
        // Floating Geometry
        this.createFloatingShapes();

        this.camera.position.z = 5;
    }

    createParticles() {
        const particlesGeometry = new THREE.BufferGeometry();
        const count = 2000;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    }

    createFloatingShapes() {
        const geometries = [
            new THREE.IcosahedronGeometry(1, 0),
            new THREE.TorusGeometry(0.7, 0.2, 16, 100),
            new THREE.OctahedronGeometry(1, 0)
        ];

        const colors = [0x3b82f6, 0x8b5cf6, 0x06b6d4];

        for (let i = 0; i < 6; i++) {
            const geometry = geometries[Math.floor(Math.random() * geometries.length)];
            const material = new THREE.MeshPhongMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            );
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            
            const scale = Math.random() * 0.5 + 0.2;
            mesh.scale.set(scale, scale, scale);
            
            this.scene.add(mesh);
            this.objects.push({
                mesh,
                speed: Math.random() * 0.01,
                rotationSpeed: Math.random() * 0.02
            });
        }
    }

    addEventListeners() {
        window.addEventListener('mousemove', (e) => {
            this.targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
            this.targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
        });

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Smooth mouse movement
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        // Animate particles
        this.particles.rotation.y += 0.001;
        this.particles.rotation.x = this.mouse.y * 0.1;
        this.particles.rotation.z = this.mouse.x * 0.1;

        // Animate shapes
        this.objects.forEach(obj => {
            obj.mesh.rotation.x += obj.rotationSpeed;
            obj.mesh.rotation.y += obj.rotationSpeed;
            obj.mesh.position.y += Math.sin(Date.now() * 0.001 + obj.mesh.position.x) * 0.002;
            
            // Interaction with mouse
            obj.mesh.position.x += (this.mouse.x * 0.1);
            obj.mesh.position.y += (this.mouse.y * 0.1);
        });

        // Camera gentle movement
        this.camera.position.x += (this.mouse.x * 0.5 - this.camera.position.x) * 0.05;
        this.camera.position.y += (this.mouse.y * 0.5 - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize when libraries are loaded
window.addEventListener('load', () => {
    if (typeof THREE !== 'undefined') {
        window.portfolio3d = new Portfolio3D();
    }
});
