import { Box, styled } from '@mui/material'
import React from 'react'
const Container = styled(Box)(({theme})=>({
    width:"100%",
    height:"99vh",
    // background: `url(${"/images/loading/loading5.gif"}) no-repeat fixed`,
    // backgroundSize:"cover"
    overflowY:"hidden",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    background:"white",
    position:"fixed",
    top:'0px'

}))
const Image = styled("img")(({theme})=>({
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
width:"100%",
height:"100%",
objectFit:"cover",
overflow:"hidden"
}))
const Image1 = styled("img")(({theme})=>({
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
width:"400px",

objectFit:"cover",
[theme.breakpoints.down("sm")]:{
    width:"200px",
    height:"330px"
}


}))
const LandingPage = () => {
  return (
    
    <Container>
        <Box sx={{position:"relative", width:"100%", height:"100%", overflow:"hidden", opacity:"0.9"} } >
        <Image src="/images/loading/bg10.png" alt="web development"></Image>
        </Box>
        <Box sx={{position:"absolute", top:{sm:"0%", xs:"0%"},
left:{sm:"0%", xs:"0%"}, right:"0px" , bottom:"0px", display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}} >
        <Image1 src="/images/loading/loading4.gif" ></Image1>
        </Box>
    </Container>
  )
}

export default LandingPage