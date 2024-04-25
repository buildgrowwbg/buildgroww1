import React from 'react'
import Block from './slider/Block'
import { Box, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Image = styled('img')(({theme})=>({
  width:'100%',
  height:'220px',
  objectFit:'cover',
  borderRadius: '19px',
  border: '1px solid #000000',
  [theme.breakpoints.down('md')]:{
    height:'150px',
  },
  [theme.breakpoints.down('sm')]:{
    height:'80px',
  },
}))

function Block1() {
  // const[query,setQuer] = useState()
  const navigate = useNavigate();

  const handleClick = () => {
   navigate(`/category`)
   
  }
  return (
    <>
        <Box sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},gap:{sm:'20px',xs:'10px'},marginTop:{sm:'120px',xs:'90px'},padding:'22px'}}>
            <Box sx={{width:{sm:'40vw',xs:'100%'}}}> <Block/> </Box>
            <Box sx={{width:{sm:'60vw',xs:'100%'},display:'flex',gap:'10px',justifyContent:'space-between'}}>
              <Box onClick={()=> navigate('/category')} sx={{width:{sm:'13vw',xs:'100px'},textAlign:'center',fontSize:{md:'20px',sm:'17px',xs:'14px'},fontWeight:400,cursor:'pointer'}}> <Image alt='Our Engineer' src="/images/category/home/block1/engineers1.jpg"/> Our engineers</Box>

              <Box onClick={()=> navigate('/category')} sx={{width:{sm:'13vw',xs:'100px'},textAlign:'center',fontSize:{md:'20px',sm:'17px',xs:'14px'},fontWeight:400,cursor:'pointer'}}> <Image alt='Our Engineer' src="/images/category/home/block1/business2.jpeg"/> Our business partners</Box>

              <Box onClick={()=> navigate('/category')} sx={{width:{sm:'13vw',xs:'100px'},textAlign:'center',fontSize:{md:'20px',sm:'17px',xs:'14px'},fontWeight:400,cursor:'pointer'}}> <Image alt='Our Engineer' src="/images/category/home/block1/worker.webp"/> Our workers</Box>
            </Box>
        </Box>
    </>
  )
}

export default Block1