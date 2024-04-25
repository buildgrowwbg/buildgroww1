
import { Box, styled, Typography } from '@mui/material'
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
import {IoLogoFacebook, IoLogoLinkedin, IoLogoPinterest, IoLogoYoutube} from "react-icons/io"
import {FaInstagramSquare} from "react-icons/fa"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from '../../redux/store/store';
const Button = styled("button")(({theme})=>({
background:"#5a3535",
fontFamily:"Roboto",
fontSize:'15px',
lineHeight:"19px",
  width:"100%", 
  height:"50px",
  color:"#FFF",
  cursor:"pointer"
}))
const Container = styled(Box)(({theme})=>({
width:"100%",
background:"#381801",
padding:"70px 70px 40px 70px",


fontFamily:"Roboto",
[theme.breakpoints.down('md')]: {
 padding:"20px 20px 20px 20px"


},

}))
const Wrapper = styled(Box)(({theme})=>({
  display:"flex",
  gap:"50px",
  justifyContent:"space-between",
  paddingBottom:"40px",
  borderBottom:"1px solid #EEEEEE",
  [theme.breakpoints.down('md')]: {
   gap:"30px"
   
   },
   [theme.breakpoints.down('sm')]: {
    flexDirection:"column",
    width:"100%",

    
    },

}))

const Box1 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px",
  width:"20%",
  [theme.breakpoints.down('sm')]: {
    width:"100%",
    
    
    },

}))

const Box2 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px"
}))
const Box3 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px"
}))
const Box4 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px"
}))
const Box5 = styled(Box)(({theme})=>({
  display:"flex", 
  flexDirection:"column",
  gap:"20px"
}))
const Box6 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px"
}))
const LinkContainer = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"15px",
  fontFamily:"Roboto"
}))

const Image = styled("img")(({theme})=>({
  width:"120px",
  height:"100px",
  [theme.breakpoints.down("sm")]:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
}))

const Logo = styled(Box)(({theme}) => ({
  color: theme.header.textColor,
  [theme.breakpoints.down('md')]:{
      paddingBottom:'5px',
  }
}));

const Paragraph = styled(Typography)(({theme})=>({
  fontFamily: 'Roboto'
}))

const Footer = () => {
  const navigate = useNavigate()
  const location = JSON.parse(localStorage.getItem("location"))
  const {user} = useSelector(state => state.auth)
  // const handleScrollToTop = () =>{
  //       Window.scrollTo({top:0, behaviour:"smooth"})
  // };

  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <Box>
      <Button onClick={scrollToTop}  >Back To Top</Button>
       <Container>
        <Wrapper>
        <Box1>
        <Logo onClick={()=>{navigate('/')}} sx={{display:'flex',gap:{md:'10px',xs:'7px'},cursor:{md:'pointer',xs:'none'},marginRight:'10px'}}>
                    <Paragraph   component="div" sx={{color:'#60360F',fontSize: {md:'40px',sm:'25px',xs:'20px'},}}>
                        Build
                    </Paragraph>
                    <Paragraph component="div" sx={{color:'#548F25',fontSize: {md:'40px',sm:'25px',xs:'20px'},}}>
                      Groww
                    </Paragraph>
          </Logo>
          <Typography variant='body1' sx={{color:"white", textAlign:"justify"}}>Discover your one-stop destination for premium building materials and professional home services. From bricks to plumbing, we have everything you need for your dream home. Explore now!</Typography>
          <Box sx={{color:"white", display:"flex", flexDirection:"column", gap:"8px", justifyContent:{sm:"flex-start", xs:"center"}, width:"100%" }}   >
            <Typography sx={{display:"flex", alignItems:"center", fontSize:{lg:"12px", md:"10px", sm:"8px",xs:"15px"}, justifyContent:{sm:"flex-start", xs:"center"}}} >Show some love <FavoriteOutlined sx={{fontSize:{lg:"16px", md:"12px",sm:"10px",xs:"15px"}, margin:"0px 2px", display:{md:"flex",sm:"none" }}} /> on social media </Typography>
            <Box sx={{display:"flex", gap:"10px", alignItems:"center", justifyContent:{sm:"flex-start", xs:"center"}}} >
             <a href="https://www.facebook.com/profile.php?id=100089947674592" style={{textDecoration:"none", color:"white"}} rel="noreferrer" target="_blank" > <IoLogoFacebook style={{fontSize:"35px"}} /> </a>
             <a href='https://www.instagram.com/techpyroofficial/' style={{textDecoration:"none", color:"white"}} rel="noreferrer" target="_blank" > <FaInstagramSquare style={{fontSize:"35px"}} /> </a>
             <a href='https://www.linkedin.com/company/techpyro/' style={{textDecoration:"none", color:"white"}} rel="noreferrer" target="_blank" ><IoLogoLinkedin style={{fontSize:"35px"}} /> </a>
              <a><IoLogoYoutube style={{fontSize:"35px"}} /> </a>
              <a> <IoLogoPinterest style={{fontSize:"35px"}} /></a>
            </Box>
          </Box>
        </Box1>
        <Box2>
          <Typography sx={{color:"#7C6151", fontSize:"16px", fontWeight:"500"}} > Category</Typography>

          <LinkContainer>
          <Link to={`/${location !==null ? (location && location.city && location.city):(Object.keys(user).length>0 ? (user && user.address.length >0 ? (user.address[0] && user.address[0].city && user.address[0].city) : "haridwar"):"haridwar")}/brick`} style={{color:"white", textDecoration:"none"}} >Bricks</Link>
          <Link to={`/${location !==null ? (location && location.city && location.city):(Object.keys(user).length>0 ? (user && user.address.length >0 ? (user.address[0] && user.address[0].city && user.address[0].city) : "haridwar"):"haridwar")}/cement`}  style={{color:"white", textDecoration:"none"}} >Cements</Link>
          <Link to={`/${location !==null ? (location && location.city && location.city):(Object.keys(user).length>0 ? (user && user.address.length >0 ? (user.address[0] && user.address[0].city && user.address[0].city) : "haridwar"):"haridwar")}/wood`}  style={{color:"white", textDecoration:"none"}} >Wood</Link>
          <Link to={`/${location !==null ? (location && location.city && location.city):(Object.keys(user).length>0 ? (user && user.address.length >0 ? (user.address[0] && user.address[0].city && user.address[0].city) : "haridwar"):"haridwar")}/plastic`} style={{color:"white", textDecoration:"none"}} >Plastic</Link>
          <Link to={`/${location !==null ? (location && location.city && location.city):(Object.keys(user).length>0 ? (user && user.address.length >0 ? (user.address[0] && user.address[0].city && user.address[0].city) : "haridwar"):"haridwar")}/metal`}  style={{color:"white", textDecoration:"none"}} >Metal</Link>
          </LinkContainer>
        </Box2>
        <Box3>
        <Typography   sx={{color:"#7C6151", fontSize:"16px"}}  >Services</Typography>
        <LinkContainer>
          <Link style={{color:"white", textDecoration:"none"}} >Electrical Services</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Home Renovation Services</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Home Cleaning Services</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Painting Services</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Home Repair and Maintenance Services</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Plumbing Services</Link>
        </LinkContainer>
        </Box3>
        <Box4>
        <Typography sx={{color:"#7C6151", fontSize:"16px"}}  >About</Typography>
        <LinkContainer>
          <a href="/about"  style={{color:"white", textDecoration:"none"}} >About Us</a>
          <a href="/contact" style={{color:"white", textDecoration:"none"}} >Contact Us</a>
         
        </LinkContainer>
        </Box4>
        <Box5>
        <Typography sx={{color:"#7C6151", fontSize:"16px"}}  >Help</Typography>
        <LinkContainer>
          <Link style={{color:"white", textDecoration:"none"}} >Payments</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Shipping</Link>
          <Link  style={{color:"white", textDecoration:"none"}} >Cancellation & Returns</Link>
          <Link to="/services-maintenance" style={{color:"white", textDecoration:"none"}} >FAQ</Link>
          <Link to="/help"   style={{color:"white", textDecoration:"none"}} >Customer Support</Link>
          
        </LinkContainer>
        </Box5>
        <Box6>
        <Typography sx={{color:"#7C6151", fontSize:"16px"}}  >Policy</Typography>
        <LinkContainer>
          <Link to="returnpolicy" style={{color:"white", textDecoration:"none"}} >Return Policy</Link>
          <Link to="terms" style={{color:"white", textDecoration:"none"}} >Term Of Use</Link>
          <Link to="security" style={{color:"white", textDecoration:"none"}} >Security</Link>
          <Link to="privacy" style={{color:"white", textDecoration:"none"}} >Privacy</Link>
        </LinkContainer>
        </Box6>
        
        </Wrapper>
        <Box>
          <Typography sx={{display:"flex",justifyContent:"center", alignItems:"center", marginTop:"10px", color:"#fff"}} >&copy; Build Groww 2023 | All right reserved.</Typography>
          <a href='https://techpyro.com' target='_blank' >
            <Typography sx={{display:"flex",justifyContent:"center",textDecoration:'underline', alignItems:"center", marginTop:"10px", color:"#fff"}} >Created By TechPyro</Typography>
          </a>
        </Box>
       </Container>
    </Box>
  )
}

export default Footer