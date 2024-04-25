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

function Block4() {
  return (
    <Box sx={{width:'100%',padding:'0 22px'}}>
        <Box sx={{border:'1px solid rgba(0, 0, 0, 0.42)',borderRadius:'40px',padding:{sm:'20px 0 20px 36px',xs:'20px 0 20px 20px'}}}>
            <Box sx={{}}><Typography sx={{fontSize:{md:'36px',sm:'30px',xs:'25px'},fontWeight:300,fontFamily:'Roboto'}}>After Construction</Typography></Box>
            <IconsContainer >
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/kitchen.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Kitchen</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/sink.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Sink</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/bothroom.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Bothroom</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/bedroom.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Bedroom</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/living-room.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Living Room</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/table.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Dining room</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/chair.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Jhoola</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/chair (1).png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Chair</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/ceiling.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Decoration Light</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/lamp.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Decoration Item</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/plants.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Plants</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/pool.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Pool</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/gym.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>GYM</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/fish-tank.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Fish Aquarium</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/nameplate.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Name Plats</Typography>
            </Box>
            <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block4/service.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Services</Typography>
            </Box>
            </IconsContainer>
        </Box>
    </Box>
  )
}

export default Block4