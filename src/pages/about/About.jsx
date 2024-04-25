import React from 'react'
import Block1 from '../../contents/about/block1/Block1'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { Box } from '@mui/material'
import Block2 from '../../contents/about/block2/Block2'
import Footer from '../../components/footer/Footer'
import Block3 from '../../contents/about/block3/Block3'

const About = () => {
  return (
    <>
        <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
        <Box sx={{marginY:15}}>
            <Block1/>   
            <Block2/> 
            <Block3/>  
        </Box>
        <Footer/>
    </>
  )
}

export default About