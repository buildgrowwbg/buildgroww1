import React from 'react'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { Box } from '@mui/material'
import Block1 from '../../contents/orderdetails/block1/Block1'

function Orderdetails() {
  return (
    <>
<Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
<Box sx={{marginTop:"100px"}}>
<Block1/>
</Box>
    </>
  )
}

export default Orderdetails