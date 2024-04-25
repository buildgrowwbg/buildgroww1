import { Close, Google } from '@mui/icons-material';
import { Backdrop, Box, Button, CircularProgress, Dialog,  TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from '../../redux/store/store';
import { getUser, login } from '../../redux/slices/auth';
import { useState } from 'react';
import Block1 from './password/Block1';

const initialValues = {
  
  username:'',
  password:''
}

function Login({setLogin,setDrawer}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const[open,setOpen] = useState(false);
  const[backdrop,setBackdrop] = useState(false)


  const fetchUser = async () => {
    let result = await dispatch(getUser())
    if(result){
       return true
    }
    else
    return false
  }

  const {values , errors , handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues:initialValues,

    onSubmit : async(values,action) => {
      const{username,password}= values
      let data = {username,password}
      console.log(data)
      const result = await dispatch(login(data))
      if (result){
        setBackdrop(false)
        localStorage.setItem("accessToken",result.token);
        action.resetForm();
      setLogin(false)
      fetchUser()
      }
      else
      return false
    
    }


  });

const handleOpenPassword = () => {
  setOpen(true);
  
}
const handleClosePassword = () => {
  setOpen(false);
}

  const handleDrawerClose = ()=>{
    setLogin(false);

};

const handleOpen = () => {
  setDrawer(true)
  setLogin(false);
}

const handleClick = () => {
  setBackdrop(true)
}
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

const handleFirstPage = async () => {
  setBackdrop(true)
  window.open(`${process.env.REACT_APP_HOST}/auth/google`,"_self");
  if(window.open()){
    setBackdrop(false)
  }
   };
  return (

    <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Box sx={{width:{md:'500px',sm:'500px',xs:'350px'},position:'relative',height:{sm:'70vh',xs:'60vh'},padding:{md:'25px',sm:'25px',xs:'15px'}}}>
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography sx={{fontSize:'30px',fontWeight:'700'}}>BuildGroww</Typography>
        <Close onClick={handleDrawerClose} sx={{fontSize:'25px','&:hover':{background:'gray',borderRadius:'5px',cursor:'pointer'}}}/>
       </Box>

       <Box>
       <Typography sx={{fontSize:'18px',fontWeight:'600'}}>Welcome & Login Here</Typography>
       </Box>


       <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'50px',gap:'15px'}}>
        
        
      

       

        <TextField variant='outlined' label='Email-Id / Phone No' type='email' name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} sx={{width:'90%',"& fieldset": {borderRadius:'3px'}}}/>

        <TextField variant='outlined' label='Password' type='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} sx={{width:'90%',"& fieldset": {borderRadius:'3px'}}}/>

        <Box sx={{width:'90%'}}>
        <Button onClick={handleClick} variant='contained' type='submit' sx={{borderRadius:'3px',width:'100%',background:'black','&:hover':{background:'black'}}}>LOGIN</Button>

        <Backdrop open={backdrop} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}> 
          <CircularProgress  color="inherit"/>
        </Backdrop>

 </Box>

       </form>

       <Box sx={{display:'flex',justifyContent:'center',margin:'15px'}}>
        <Typography sx={{fontSize:'18px',fontWeight:'600'}}>OR</Typography>
       </Box>

       <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Button onClick={handleFirstPage} variant='outlined' sx={{borderRadius:'3px',color:'black',border:'1px solid green',display:'flex',gap:'5px'}}><Google sx={{color:'green'}}/>Google</Button>

              <Backdrop open={backdrop} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}> 
          <CircularProgress  color="inherit"/>
        </Backdrop>
       </Box>
        <Box sx={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
       <Typography onClick={handleOpen} sx={{color:'black',cursor:'pointer'}}>Don't have an account?Register | </Typography>
       
       <Box>
       <Typography onClick={handleOpenPassword}   sx={{color:'black',cursor:'pointer'}}> Forgot Password</Typography>
       <Dialog open={open} fullScreen={fullScreen}>
        <Block1 setOpen={setOpen}/>
       </Dialog>
       </Box>

        </Box>
</Box>
</Box>
  )
}

export default Login