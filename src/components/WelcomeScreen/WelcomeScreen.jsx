import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {
  const refDiv = useRef(null)

  const [vanta, setVanta] = useState(0)

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: refDiv.current,
        })
      )
    }
    // console.log('vanta hook')

    // sanitización
    return () => {
      console.log('vanta destroyed!')
      vanta && vanta.destroy()
    }
  }, [vanta])

  return (
    <div className='full' ref={refDiv}>
      {children}
    </div>
  )
}

WelcomeScreen.propTypes = {
  children: PropTypes.node,
}

export default WelcomeScreen
