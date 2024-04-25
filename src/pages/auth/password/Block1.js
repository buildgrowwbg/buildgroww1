import { Close } from '@mui/icons-material'
import { Box, Button, Dialog, Divider, Drawer, Popover, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import Block2 from './Block2'
 

const initialValues = {
  email:""
}
const Block1 = ({setOpen}) => {

    const theme= useTheme();
    const handleClose = ()=>{
        setOpen(false);

     
    };

    const {values ,handleBlur,handleChange,handleSubmit} = useFormik({

      initialValues: initialValues,
      // validationSchema: signupSchema,
  
      onSubmit : async (values,action) =>{
        const {email} = values;
        let data = {email};

       console.log(data)
     
 const resetPassword = await axios.post(`${process.env.REACT_APP_HOST}/userapp/auth/reset-password-otp`,data);
 if(resetPassword.data.status==='SUCCESS'){
  action.resetForm();

}
 else
  return false;

       

      }
 
    });

    const [close,setClose]=useState(false);
  
  const handleOpen = ()=>{
    setClose(true);
  };

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
      
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>

      <Box sx={{width:{md:'500px',sm:'400px',xs:'350px'}}}>
        <Box sx={{display:'flex',justifyContent:'space-between',padding:'15px'}}>
            <Typography sx={{fontSize:'12px',color:'green'}}>Forgot Password</Typography>
            <Close onClick={handleClose} sx={{fontSize:'12px'}}/>
        </Box>
        <Divider/>
         <form onSubmit={handleSubmit}  style={{padding:'40px',display:'flex',flexDirection:'column',gap:'20px'}}>
       
        <TextField variant='outlined' label='email' type='email' name='email' value={values.email}  sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}} onChange={handleChange} onBlur={handleBlur}></TextField>

        <Box>
        <Button onClick={handleOpen} variant='contained' type='submit' sx={{width:'100%',borderRadius:'3px',background:'black','&:hover':{background:'black'}}}>RESET PASSWORD</Button>      
        <Dialog open={close} fullScreen={fullScreen}                            >
 <Block2 setClose={setClose} setOpen={setOpen}/>
    
   </Dialog>
        </Box>
      
        </form>
      </Box>
    </Box>
  )
}

export default Block1
