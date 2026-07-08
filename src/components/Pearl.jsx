import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

// A breathing pearl: real thin-film iridescence (MeshPhysicalMaterial)
// over a sphere displaced by slow trigonometric noise.
export default function Pearl() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
    camera.position.set(0, 0, 4.6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 0.95
    mount.appendChild(renderer.domElement)

    const pmrem = new THREE.PMREMGenerator(renderer)
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.06).texture
    scene.environmentIntensity = 0.45

    const key = new THREE.DirectionalLight(0xfff4ea, 1.0)
    key.position.set(2.5, 3, 3)
    scene.add(key)
    // the palette lives in the rim lights: lavender, blush, champagne
    const lavender = new THREE.PointLight(0xb9a8e8, 34, 20)
    lavender.position.set(-3.2, 1.6, 1.2)
    scene.add(lavender)
    const blush = new THREE.PointLight(0xf0b8a4, 30, 20)
    blush.position.set(3.2, -1.4, 1.6)
    scene.add(blush)
    const champagne = new THREE.PointLight(0xe8cf9e, 26, 20)
    champagne.position.set(0.8, 3.0, -2.2)
    scene.add(champagne)

    const geo = new THREE.SphereGeometry(1.25, 168, 168)
    const base = geo.attributes.position.array.slice()
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0xf4efe9,
      metalness: 0.05,
      roughness: 0.16,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      iridescence: 1,
      iridescenceIOR: 1.36,
      iridescenceThicknessRange: [160, 620],
      sheen: 0.4,
      sheenColor: new THREE.Color(0xdcc9e8),
    })
    const pearl = new THREE.Mesh(geo, mat)
    scene.add(pearl)

    const pos = geo.attributes.position
    const v = new THREE.Vector3()
    const displace = (t) => {
      for (let i = 0; i < pos.count; i++) {
        v.set(base[i * 3], base[i * 3 + 1], base[i * 3 + 2])
        const n =
          Math.sin(v.x * 2.1 + t * 0.6) * Math.sin(v.y * 1.7 - t * 0.4) * 0.5 +
          Math.sin(v.y * 2.9 + t * 0.5) * Math.sin(v.z * 2.3 + t * 0.35) * 0.35 +
          Math.sin(v.z * 1.6 - t * 0.45) * Math.sin(v.x * 2.7 + t * 0.3) * 0.3
        const s = 1 + n * 0.042
        pos.setXYZ(i, v.x * s, v.y * s, v.z * s)
      }
      pos.needsUpdate = true
      geo.computeVertexNormals()
    }
    displace(0)

    // gentle mouse parallax
    let mx = 0
    let my = 0
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onMouse)

    const resize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(mount)

    let raf
    const t0 = performance.now()
    const tick = () => {
      raf = requestAnimationFrame(tick)
      const t = (performance.now() - t0) / 1000
      displace(t)
      pearl.rotation.y = t * 0.08 + mx * 0.15
      pearl.rotation.x = Math.sin(t * 0.12) * 0.08 + my * 0.1
      pearl.position.y = Math.sin(t * 0.5) * 0.06
      renderer.render(scene, camera)
    }
    if (reduced) {
      renderer.render(scene, camera)
    } else {
      tick()
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMouse)
      renderer.dispose()
      pmrem.dispose()
      geo.dispose()
      mat.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="pearl" aria-hidden="true" />
}
