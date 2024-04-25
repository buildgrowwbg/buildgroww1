import { Close } from '@mui/icons-material'
import { Box, Button, Card, Checkbox, Divider, Drawer, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'

function FilterSidebar({setOpen}) {
    const closeDrawer=()=>{
        setOpen(false)
    }
  return (
    <>
        <Card sx={{padding:"10px",boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",width:{sm:"40vw",xs:"100vw"},position:"relative",height:"100vh"}}>
            <Close sx={{position:"absolute",top:"20px",right:"20px"}} onClick={closeDrawer}/>
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
<Divider/>
<Box sx={{display:'flex',paddingY:"10px",position:"absolute",bottom:"10px",justifyContent:"space-between",width:"95%"}}>
<Box>
    <Button variant='contained' sx={{backgroundColor:"#595656",borderRadius:"2px"}}>Reset</Button>
</Box>
<Box>
    <Button variant='contained' sx={{borderRadius:"2px"}}>Apply</Button>
</Box>
</Box>
</Card>
    </>
  )
}

export default FilterSidebar