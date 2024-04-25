import React from 'react'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { Box } from '@mui/material'
import Block1 from '../../contents/orders/block1/Block1'

function Orders() {
  return (
  <>
<Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
<Box sx={{marginTop:"80px"}}>
<Block1/>
</Box>

  </>
  )
}

export default Orders