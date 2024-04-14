import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

export default function Translate() {
  return (
    <Box>
        <Box
        sx={{
          position: 'fixed',
          top: 0,
          zIndex: -10,
          height: '100vh',
          width: '100vw',
        }}
      >
        <Box
            sx={{
              position: 'absolute',
              top: 0,
              zIndex: -2,
              height: '100vh',
              width: '100vw',
              backgroundColor: 'white',
              backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))',
            }}
            />
        </Box>
        <Header/>
      
    </Box>
  )
}
