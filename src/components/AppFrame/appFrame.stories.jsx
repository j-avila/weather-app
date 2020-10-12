import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'appFrame',
  component: AppFrame,
}

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro amet eos
      dolor illum dolores nihil nesciunt soluta reiciendis? Praesentium minus rerum nihil
      velit. Modi maxime recusandae sapiente consequuntur tempore.
    </AppFrame>
  </Router>
)
