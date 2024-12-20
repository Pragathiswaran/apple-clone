import React from 'react'
import { PerspectiveCamera, View } from '@react-three/drei'

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, item, size}) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`border-2 border-red-500 w-full h-full ${index === 1 ? 'right[-100%]' : ''}` }
    >
        <ambientLight intensity={0.3}/>

        <PerspectiveCamera makeDefault position={[0,0,0,4]}/>
    </View>
  )
}

export default ModelView