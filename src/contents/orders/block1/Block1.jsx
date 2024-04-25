import { Box, Card, Checkbox, Divider, FormControlLabel, FormGroup, Typography, styled } from '@mui/material'
import React from 'react'
import Block2 from '../block2/Block2'
const StyleToolbar =styled(Box)(({theme})=>({
    display:"flex",
    padding:'30px',
gap:"40px",
[theme.breakpoints.down("md")]:{
  padding:'15px'
}
}))
function Block1() {
  return (
   <StyleToolbar>
<Box sx={{flex:1,display:{md:"block",sm:'none',xs:"none"}}}>
<Card sx={{padding:"10px",boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}}>
<Typography sx={{fontSize:"18px",fontWeight:'600'}}>Filters</Typography>
<Typography sx={{fontSize:"18px",fontWeight:'600',textTransform:"uppercase"}}>order status</Typography>
<FormGroup >
<FormControlLabel  control={<Checkbox />} label="On the way"  />
<FormControlLabel  control={<Checkbox />} label="Delevered"  />
<FormControlLabel  control={<Checkbox />} label="Cancelled"  />
<FormControlLabel  control={<Checkbox />} label="Returned"  />
</FormGroup>
<Divider/>
<Typography sx={{fontSize:"18px",fontWeight:'600',textTransform:"uppercase"}}>Order Time</Typography>
<FormGroup >
<FormControlLabel  control={<Checkbox />} label="Last 30 days"  />
<FormControlLabel  control={<Checkbox />} label="2022"  />
<FormControlLabel  control={<Checkbox />} label="2021"  />
<FormControlLabel  control={<Checkbox />} label="2020"  />
<FormControlLabel  control={<Checkbox />} label="Older"  />
</FormGroup>
</Card>
</Box>
<Box sx={{flex:3}}>
<Block2/>
</Box>
   </StyleToolbar>
  )
}

export default Block1