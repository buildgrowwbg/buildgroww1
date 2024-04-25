import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'

const Image = styled("img")(({theme})=>({
    width:"100%",
    height:'500px',
    objectFit:'cover',
    
}))

const Block1 = () => {
  return (
    <Box>
        <Box sx={{position:'relative'}}>
            <Image src='https://images.pexels.com/photos/225232/pexels-photo-225232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='contact Image'/>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <Typography sx={{fontSize:{md:'80px',sm:'60px',xs:'40px'},color:'#641919'}}>GET IN TOUCH</Typography>
                <Typography sx={{fontSize:{md:'60px',sm:'40px',xs:'30px'},color:'#641919'}}>Always connect with us</Typography>
                <Box sx={{display:'flex',gap:'25px',alignItems:'center',marginY:'20px'}}>
                    <a href='tel:9559613375'>
                        <Button type='outlined' sx={{opacity:0.7,border:'1px solid #e18181',backgroundColor:'#e18181',color:'#000',padding:'10px 40px',borderRadius:'5px',fontSize:'18px'}}> Call Now </Button>
                    </a>
                    <a href='Mailto:contact@buildgroww.com'>
                        <Button type='outlined' sx={{opacity:0.7,border:'1px solid #e18181',backgroundColor:'#e18181',color:'#000',padding:'10px 40px',borderRadius:'5px',fontSize:'18px'}}>Mail Now</Button>
                    </a>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Block1