'use client'

import React from 'react'
import { useSelector } from 'react-redux'
function Projects() {
  const theme = useSelector(state => state.portfolio.theme)
  
  return (
    <div className={`h-screen w-screen ${theme}`}>
      xxxxx
    </div>
  )
}

export default Projects
