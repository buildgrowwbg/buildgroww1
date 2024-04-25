import { Box, styled, Typography, useTheme } from '@mui/material'
import React from 'react';

const Image = styled('img')(({theme})=>({
    width: '50%',
    backgroundColor: '#0E60B6',

}))
export default function Block() {
    const theme = useTheme();
  return (
    <Box>
        <Box sx={{display:{sm:'flex',xs:'none'},justifyContent:'space-between',flexDirection:'column',gap:'10px',
          maxWidth: "400px",height:'80vh',background:'#0E60B6',boxShadow:`-1px 3px 6px 1px rgba(153,150,153,0.74)`}}>
          <Box sx={{width:'100%',textAlign:'center',marginTop:'30px'}}>
            <Image src='/images/mainLogo/logo1.png'/>
          </Box>
            <Typography sx={{fontSize:'25px',fontWeight:500,padding:'0 50px',marginBottom:'50px',color:'#fff'}}>Best Place to Buy Products</Typography>
        </Box>
    </Box>
  )
}
