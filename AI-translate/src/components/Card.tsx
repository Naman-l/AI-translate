import { Box, Typography } from '@mui/material'
import React from 'react'

function Card({cardInfo}) {

    const {title,img,desc}=cardInfo


  return (
    <Box sx={{
        background:'gray',
        color:'#000',
        boxShadow:"4px 1px 1px blue",
        margin:'16px',
        padding:'8px'
    
      }}>
        <Typography>{title}</Typography>
        <img src={img}/>
        <Box><Typography>{desc}</Typography></Box>
      
    </Box>
  )
}

export default Card
