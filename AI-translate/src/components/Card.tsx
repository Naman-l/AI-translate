import { Box, Typography } from '@mui/material'
import React from 'react'

function Card({cardInfo}) {

    const {title,img,desc}=cardInfo


  return (
    <Box 
      sx={{
        background:'#ede8ff',
        color:'#000',
        // boxShadow:"4px 1px 1px grey",
        margin:'16px',
        padding:'24px',
        borderRadius: '5px',
        width: '250px',
        height: '200px'
    
      }}
      >
        <img 
          style={{
          width: '100px',
          marginBottom: '10px'
          }} 
          src={img}
        />
        <Typography  variant='h6' component="h6">{title}</Typography>
        <Box><Typography sx={{fontSize: 12, color: '#474750'}}>{desc}</Typography></Box>
      
    </Box>
  )
}

export default Card
