import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

export default function Translate() {
  return (
    <Box>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Header/>
      
    </Box>
  )
}
