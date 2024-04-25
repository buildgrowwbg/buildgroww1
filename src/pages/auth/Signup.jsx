import { Close, Google } from '@mui/icons-material';
import { Autocomplete, Backdrop, Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'

import { useNavigate } from 'react-router-dom';
import { signupSchema } from '../../schemas';
import { useDispatch } from '../../redux/store/store';
import { register } from '../../redux/slices/auth';
import { useState } from 'react';

const initialValues = {
  name:'',
  phone:'',
  email:'',
  password:'',
  userCategory:'',
  workCategory:''
}

function Signup({setDrawer,setLogin}) {

  const dispatch = useDispatch();
  const [category,setCategory] = useState('');
  const[backdrop,setBackdrop] = useState(false)
  const {values , errors , handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,

    onSubmit : async(values,action) => {
      const{name,email,password,phone,userCategory,workCategory}= values
      let data = {name,email,phone,password,userCategory,workCategory}

      const result = await dispatch(register(data))
      console.log(result)
      if(result){
        setBackdrop(false)
        action.resetForm();
        setDrawer(false)
         setLogin(true)
      }
      else{
        return false
      }
    
    }


  });

  console.log(values)

  const navigate = useNavigate();
  const handleDrawerClose = ()=>{
    setDrawer(false);

};

let arr = [
  {
    name:'buyer'
},
{
  name:'seller'
},
{
  name:'worker'
}
]

let workCategoryArr =[
  {list:'Plumber'},
  {list:'Elctrician'},
  {list:'Carpainter'},
  {list:'Painter'},
  {list:'Engineer'},
  {list:'Labour'},
  {list:'Contractor'},
]

const handleClick = () => {
  setBackdrop(true)
}

const handleFirstPage = async () => {
  setBackdrop(true)
  window.open(`${process.env.REACT_APP_HOST}/auth/google`,"_self");
  if(window.open()){
    setBackdrop(false)
  }
   };
  return (

    <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Box sx={{width:{md:'500px',sm:'500px',xs:'350px'},position:'relative',height:{sm:'95vh',xs:'85vh'},padding:{md:'25px',sm:'25px',xs:'15px'}}}>
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography sx={{fontSize:'30px',fontWeight:'700'}}>BuildGroww</Typography>
        <Close onClick={handleDrawerClose} sx={{fontSize:'25px','&:hover':{background:'gray',borderRadius:'5px',cursor:'pointer'}}}/>
       </Box>

       <Box>
       <Typography sx={{fontSize:'18px',fontWeight:'600'}}>Welcome & Signup Here</Typography>
       </Box>


       <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'30px',gap:'15px'}}>
        
        <Box sx={{width:'90%'}}>
        <TextField variant='outlined' label='Name' type='text' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}  sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        {errors.name && touched.name ?(
                <Typography sx={{fontSize:'12px',color:'red'}}>{errors.name}</Typography>):null}
        </Box>

        <Box sx={{width:'90%'}}>
        <TextField variant='outlined' label='Mobile No' type='number' name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        {errors.phone && touched.phone ?(
       <Typography sx={{fontSize:'12px',color:'red'}}>{errors.phone}</Typography>):null}
        </Box>

   

        <Box sx={{width:'90%'}}> 
        <TextField variant='outlined' label='Email-Id' type='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        {errors.email && touched.email ?(
         <Typography sx={{fontSize:'12px',color:'red'}}>{errors.email}</Typography>):null}
        </Box> 

        <Box sx={{width:'90%'}}> 
        <TextField variant='outlined' label='Password' type='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        {errors.password && touched.password ?(
         <Typography sx={{fontSize:'12px',color:'red'}}>{errors.password}</Typography>):null}
       </Box>


       <Box sx={{width:'90%'}}>
        <Autocomplete
                          disablePortal
                          onChange={(event, value) =>  (values.userCategory = value.name) && setCategory(value.name) }
                        
                          options={arr}
                          getOptionLabel={(option) => option.name}
                          renderInput={(params) => (
                            <TextField
                              fullWidth sx={{"& fieldset": {borderRadius:'3px'}}}
                              {...params}
                              label='User Category'
                            />
                          )}                         
             />
        </Box>

        <Box sx={{width:'90%',display:category === 'worker' ? 'block':'none'}}>
        <Autocomplete
                          disablePortal
                          onChange={(event, value) => value && (values.workCategory = value.list)}
                          options={workCategoryArr}
                          getOptionLabel={(option) => option.list}
                          renderInput={(params) => (
                            <TextField
                              fullWidth sx={{"& fieldset": {borderRadius:'3px'}}}
                              {...params}
                              label='Work Category'
                            />
                          )}                         
          />
        </Box>

       
 <Box sx={{width:'90%'}}>
        <Button onClick={handleClick} variant='contained' type='submit' sx={{borderRadius:'3px',width:'100%',background:'black','&:hover':{background:'black'}}}>SIGNUP</Button>

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
</Box>
</Box>
  )
}

export default Signup