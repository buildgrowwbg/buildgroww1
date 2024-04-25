import React from 'react'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { Box } from '@mui/material'
import Block1 from '../../contents/contact/block1/Block1'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
        <Box sx={{marginTop:'100px'}}>
            <Block1/>
        </Box>
        <Footer/>
    </div>
  )
}

export default Contact