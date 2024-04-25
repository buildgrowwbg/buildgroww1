import { Avatar, Box, Button, Stack ,styled, Typography, useTheme} from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Img = styled("img")(({ theme }) => ({
    width:'45px',
    // clipPath: "circle(50%)"
}));

export default function Header({setOpen,setLogin}) {
    const theme = useTheme();
    const {user} = useSelector((sate)=> sate.auth)
  return (
    
    <Stack sx={{flex:'1',width:'100%',minHeight:'56px',maxHeight:'60px', flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:'0 30px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}} >
        {/* <PersonIcon/> */}
       {/* {user.currentUser === null ?  */}
        <Box sx={{display:'flex',cursor:'none'}}>
          <Typography onClick={()=>{
            setOpen(false)
            setLogin(true)
          }} sx={{fontSize:'17px',fontWeight:500}}>Sign In</Typography>
        </Box> 
        {/* : 
        <Typography>{user.currentUser.data.name
          ? user.currentUser.data.name
          : "TechPyro User"}</Typography>} */}
          <Avatar src={user && user.avatar}/>
        {/* <Img src="/images/mainLogo/logo1.png" alt="logo"/> */}

    </Stack>
  )
}
