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
    textAlign:'center',
    gridTemplateColumns:'auto auto auto auto auto auto auto auto',
    gridGap:'20px',
    margin:'20px auto 0 auto',
    alignItems:'center',
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
    } ,

}))

function Block2() {
  return (
    <Box sx={{width:'100%',padding:'0 22px'}}>
        <Box sx={{border:'1px solid rgba(0, 0, 0, 0.42)',borderRadius:'40px',padding:{sm:'20px 0 20px 36px',xs:'20px 0 20px 20px'}}}>
            <Box sx={{}}><Typography sx={{fontSize:{md:'36px',sm:'30px',xs:'25px'},fontWeight:300,fontFamily:'Roboto'}}>Before Construction</Typography></Box>
            <IconsContainer>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/park.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Land</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/planning.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Planning</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/attorney.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Attorney</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/building-insurance.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Insurance</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/online.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>R.E.Consultant</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/architect.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Architect</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/donation.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Workship</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/water-tap.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Water supply</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/electricity.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Electricity </Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/Guard.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Guard </Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/wifi.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Wi-fi </Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/camera.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Camera install</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/warehouse.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Ware House</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/digger.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Machine</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/maintenance.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}> Equipment</Typography>
              </Box>
              <Box sx={{width:{xs:'65px',sm:'90px',md:'104px'}}}>
                <Icons><img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/safety-gear.png' /></Icons>
                  <Typography sx={{textAlign:'center'}}>Safety Gear</Typography>
              </Box>   
            </IconsContainer>
        </Box>
    </Box>
  )
}

export default Block2