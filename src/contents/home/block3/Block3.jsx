import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Icons = styled(Box)(({theme})=>({
  width:'104px',
  height:'101px',
  border:'1px solid #000000',
  borderRadius:'19px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  [theme.breakpoints.down('md')]: {
    width:'90px',
    height:'88px'
  } ,
  [theme.breakpoints.down('sm')]: {
    width:'65px',
    height:'62px',
    borderRadius:'10px'
  } ,
}))

const IconsContainer = styled(Box)(({theme})=>({
  display:'grid',
  gridTemplateColumns:'auto auto auto auto auto auto auto auto',
  gridGap:'20px',
  marginTop:'20px',
  [theme.breakpoints.down('1200')]: {
    gridTemplateColumns:'auto auto auto auto auto auto auto',
  } ,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns:'auto auto auto auto auto auto',
  } ,
  [theme.breakpoints.down('800')]: {
    gridTemplateColumns:'auto auto auto auto',
  } ,
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns:'auto auto auto',
    gridGap:'10px'
  } 
}))

function Block3() {
  return (
    <Box sx={{width:'100%',padding:'0 22px'}}>
        <Box sx={{border:'1px solid rgba(0, 0, 0, 0.42)',borderRadius:'40px',padding:{sm:'20px 0 20px 36px',xs:'20px 0 20px 20px'}}}>
            <Box sx={{}}><Typography sx={{fontSize:{md:'36px',sm:'30px',xs:'25px'},fontWeight:300,fontFamily:'Roboto'}}>During Construction</Typography></Box>
            <IconsContainer >
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/construction.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Worker</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/concrete-mixer.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Concrete-Mixer</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/concrete-mix.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Concrete-mixer</Typography>
            </Box>
             <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/bricks.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Bricks</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/blocks.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Blocks</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/cement.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Cement</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/iron-bar.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Iron-bar</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/beam.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Beam</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/sand.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Sand</Typography>
            </Box>
             <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/soil.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Soil</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/window.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Windows</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/door.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Doors</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/gate.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Gate</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/stairs.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Stairs</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/tiles.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Tiles</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/granite.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Granite</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/marble.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Marble</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/stone.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Stone</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block3/roof1.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Roof Tiles</Typography>
            </Box>
            </IconsContainer>
        </Box>
    </Box>
  )
}

export default Block3