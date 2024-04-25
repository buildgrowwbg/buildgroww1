import { Box, Card, CardMedia, Typography, styled } from '@mui/material'
import React from 'react'

const StyleToolbar=styled(Box)(({theme})=>({
    padding:"30px",
    [theme.breakpoints.down('sm')]:{
        padding:"15px"
    }
}))
function Block1() {
  return (
    <StyleToolbar>
<Card sx={{borderRadius:"0px",padding:"10px"}}>
<Typography sx={{fontWeight:"600",fontSize:"18px"}}>Order Id : <span style={{fontWeight:'400'}}>485434763846</span> </Typography>
<Typography sx={{fontWeight:"600",fontSize:"18px",paddingY:"10px"}}>Delivery Address</Typography>
<Typography sx={{fontWeight:"600"}}>Vikash Kumar</Typography>
<Typography sx={{width:{md:"40%",sm:"60%",xs:"100%"},paddingY:"10px"}}>Near mehta petrol pump Wazirganj Subdistrict, Near mehta petrol pump Gaya District - 805128, Bihar</Typography>
<Typography sx={{fontWeight:"600",fontSize:"16px"}}>Phone Number : <span style={{fontWeight:'400'}}>+91 9999999833</span> </Typography>
<Typography sx={{fontWeight:"600",fontSize:"16px"}}>Order Date : <span style={{fontWeight:'400'}}>27 jul 2023</span> </Typography>
</Card>
<Card sx={{borderRadius:"0px",marginY:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"30px",flexDirection:{md:"row",sm:"row",xs:'column'}}}>
<CardMedia
            component="img"
            sx={{ width:{md:250,sm:250,xs:"100%"},height:'100%', }}
            image="https://images.pexels.com/photos/678289/pexels-photo-678289.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Live from space album cover"
          />
            <Box  sx={{padding:"20px"}}>
              <Typography sx={{fontSize:"24px",fontWeight:"600",}}>
    Lorem ipsum dolor sit amet 
              </Typography>
             
              <Typography sx={{fontSize:"18px",paddingY:'5px'}}>Lorem ipsum dolor sit amet.  <span style={{fontSize:"14px"}}>
                   4.4km
                </span></Typography>
               <Typography sx={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic culpa, obcaecati numquam ullam voluptatum laudantium nihil quia totam mollitia deleniti, earum quaerat voluptates sit, aspernatur necessitatibus eaque reiciendis fugiat.</Typography>  
            </Box>
</Card>
    </StyleToolbar>
  )
}

export default Block1