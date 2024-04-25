import { Box, Button, Card, CardMedia, Drawer, InputAdornment, TextField, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { FilterList } from '@mui/icons-material';
import FilterSidebar from '../filtersidebar/FilterSidebar';

const StyleToolBar = styled(Box)(({theme})=>({

}))
function Block2() {

  const [drawer,setDrawer]=useState(false)
  const[open,setOpen]= useState(false)
    const [searchTerm, setSearchTerm] = useState("");

//--> function for handle drawer
const handleDrawer=()=>{
  setDrawer(true)
}

const handleopen = ()=>{
  setOpen(true)
}
const handleClose= ()=>{
  setOpen(false)
}
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <StyleToolBar>
      <Drawer anchor='left' onClick={handleDrawer} open={open} onClose={handleClose} sx={{display:{md:"none",sm:"block",xs:"block"}}}>
        <FilterSidebar setOpen={setOpen}/>
      </Drawer>
      <Box sx={{display:'flex',alignItems:"center",position:"sticky",top:"120px",backgroundColor:'#F2F5F9',gap:"10px"}}>
         <TextField
        id="search"
        type="search"
        placeholder='Search your order here....'
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: "100%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button startIcon={<FilterList/>} sx={{borderRadius:"0px",color:"#000",backgroundColor:'#F2F5F9',padding:"15px",fontSize:'18px',display:{md:"none",sm:"flex",xs:"flex"},"&:hover":{
        color:"#000",backgroundColor:'#F2F5F9'
      }}} onClick={handleopen}>Filters</Button>
      </Box>
<Box sx={{paddingY:"30px"}}>
  <Typography sx={{fontWeight:"600",fontSize:"20px",paddingY:"10px"}}>Your Orders</Typography>
      <Card sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"30px",flexDirection:{md:"row",sm:"row",xs:'column'},boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",borderRadius:"0px","&:hover":{
        boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
      }}}>
     <CardMedia
            component="img"
            sx={{ width:{md:250,sm:250,xs:"100%"},height:'100%', }}
            image="https://images.pexels.com/photos/678289/pexels-photo-678289.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Live from space album cover"
          />
            <Box  sx={{padding:"20px"}}>
              <Typography sx={{fontSize:"24px",fontWeight:"600",}}>
    Lorem ipsum dolor sit amet 
              </Typography>
             
              <Typography sx={{fontSize:"18px",paddingY:'5px'}}>Lorem ipsum dolor sit amet.  <span style={{fontSize:"14px"}}>
                   4.4km
                </span></Typography>
               <Typography sx={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic culpa, obcaecati numquam ullam voluptatum laudantium nihil quia totam mollitia deleniti, earum quaerat voluptates sit, aspernatur necessitatibus eaque reiciendis fugiat.</Typography>  
            </Box>
      </Card>
    </Box>
      
    </StyleToolBar>
  )
}

export default Block2;