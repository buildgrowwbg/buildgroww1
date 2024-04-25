import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from '../../../redux/store/store';

const Image = styled('img')(({theme})=>({
  width:'100%',
  height:'220px',
  objectFit:'cover',
  borderRadius: '19px',
  border: '1px solid #000000',
  [theme.breakpoints.down('md')]:{
    height:'180px',
  },
  [theme.breakpoints.down('sm')]:{
    height:'150px',
  },
}))

function Block5() {
  const navigate = useNavigate();
  const location = JSON.parse(localStorage.getItem("location"))
  const {user} = useSelector(state => state.auth)

  const handleClick = (item)=>{
    navigate(`/${location !==null ? (location && location.city && location.city):(Object.keys(user).length>0 ? (user && user.address.length >0 ? (user.address[0] && user.address[0].city && user.address[0].city) : "haridwar"):"haridwar")}/${item}`)

  }
  return (
    <Box sx={{width:'100%',padding:'0 22px'}}>
        <Box sx={{border:'1px solid rgba(0, 0, 0, 0.42)',borderRadius:'30px',padding:'20px 36px'}}>
            <Box sx={{}}><Typography sx={{fontSize:{md:'36px',sm:'30px',xs:'25px'},fontWeight:300,fontFamily:'Roboto'}}>Home services</Typography></Box>

            <Box sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},gap:'10px',justifyContent:'space-between',alignItems:'center',marginTop:'10px'}}>

                <Box onClick={()=>handleClick('Equipment-rental')} sx={{width:{md:'317px',xs:'100%'},textAlign:'center',fontSize:'20px',fontWeight:400,cursor:'pointer'}}> <Image alt='Our Engineer' src="/images/category/home/blcok5/tools1.jpg"/>Equipment rental</Box>

                <Box onClick={()=>handleClick('Project-management')} sx={{width:{md:'317px',xs:'100%'},textAlign:'center',fontSize:'20px',fontWeight:400,cursor:'pointer'}}> <Image alt='Our Engineer'  src="/images/category/home/blcok5/project.jpg"/>Project management</Box>

                <Box onClick={()=>handleClick('Site-preparation')} sx={{width:{md:'317px',xs:'100%'},textAlign:'center',fontSize:'20px',fontWeight:400,cursor:'pointer'}}> <Image alt='Our Engineer'  src="/images/category/home/blcok5/site.webp"/>Site preparation</Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Block5