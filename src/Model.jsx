import React, { Suspense, useMemo, useContext, createContext, useState } from 'react'
import { useGLTF, Merged, PerspectiveCamera, Environment, Cloud } from '@react-three/drei'
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Instances({ children, ...props }) {
    return (
        <>
        <box args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
            <THREE.MeshNormalMaterial  />
            </box>
        </>
    );
}