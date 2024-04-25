import { ShoppingCart } from '@mui/icons-material'
import {  Box, Button, TextField, Typography, Dialog, Avatar, useMediaQuery, Backdrop, CircularProgress } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from '../../redux/store/store'
import { getUser, updateUser } from '../../redux/slices/auth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'
import { useTheme } from '@emotion/react'

const initialValues = {
    name:'',
    phone:'',
    email:'',
  
  }
const Block1 = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const theme = useTheme()
let image ;
const [open,setOpen] = useState(false)
const {user} = useSelector((state)=>state.auth);
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
          const{name}= values
          let data = {name}
          console.log(data)
          let result = await dispatch(updateUser(data,user.id))
          if(result){
            action.resetForm();
            navigate('/')
          }
          else
          return false
        
        }
    
    
      });


      useEffect(()=>{
          fetchUser();
      },[])

  
      const handleOpen = () => {
        setOpen(true)
      }
      const handleClose = () => {
        setOpen(false)
      }

      const fetchImage = (img) => {
         image = img
      }

      const saveImage =  async (e) => {
        try {
          setBackdrop(true)
        const formData = new FormData()
        formData.append('files',image);
       const {data}= await  axios.post('http://localhost:5000/admin/file/upload',formData);
       let result = await dispatch(updateUser({avatar:data.data.uploadSuccess[0].path }, user.id))
       console.log(result)
       if(result){
        setOpen(false)
        setBackdrop(false)
       }
      } catch (error) {
          console.log(error)
      }
          
      }

      const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
        <Box sx={{width:{md:'40%',sm:'80%',xs:'98%'},border:'1px solid rgba(0,0,0,0.3)',height:{md:'60vh',sm:'40vh',xs:'50vh'},boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>


            <Box sx={{width:'100%',height:'50px',background:'#F0F0F0',display:'flex',alignItems:'center',padding:'0px 20px',justifyContent:'space-between'}}>
                 <Box sx={{display:'flex',gap:{md:'10px',sm:'10px',xs:'5px'},alignItems:'center'}}>
                    <Typography sx={{fontWeight:'700',fontSize:'18px'}}>BG</Typography>

                    <Box sx={{display:{md:'flex',sm:'flex',xs:'none'},gap:'10px'}}>
                    <Typography>{user && user.name}'s Profile</Typography>
                    <Typography>|</Typography>
                    <Typography>{user && user.phone}</Typography>
                    </Box>

                 </Box>

                 <Box sx={{display:'flex',gap:{md:'10px',sm:'10px',xs:'0px'},alignItems:'center'}}>

                  <Box>
                    <Avatar sx={{cursor:'pointer'}} onClick={handleOpen} src={user && user.avatar} alt='U'/>


                    <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
                      <Box sx={{height:'400px',width:'400px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'30px'}}>
                       <input type='file' name='file' onChange={(e)=> fetchImage(e.target.files[0])}/>
                       <Box>
                      <Button onClick={saveImage} variant='contained'>Save</Button>
                      <Backdrop open={backdrop} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}> 
          <CircularProgress  color="inherit"/>
        </Backdrop>
                       </Box>
                      </Box>
                    </Dialog>
                  </Box>
                    <Typography>{user && user.name}</Typography>
                 </Box>
            </Box>

            <Typography sx={{fontSize:'18px',fontWeight:'600',marginTop:{md:'50px',sm:'40px',xs:'20px'},marginLeft:{md:'50px',sm:'40px',xs:'30px'}}}>Edit Your Profile</Typography>

            
       <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'20px',gap:'15px'}}>
        
        <Box sx={{width:'80%'}}>
        <TextField variant='outlined' label='Name' type='text' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}  sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        
        </Box>

        <Box sx={{width:'80%'}}>
        <TextField variant='outlined'  type='number' name='phone' value={user.phone} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
       
        </Box>

        <Box sx={{width:'80%'}}> 
        <TextField variant='outlined' type='email' name='email' value={user.email} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
       
        </Box> 

       
      
        <Button variant='contained' type='submit' sx={{borderRadius:'3px',width:'30%',background:'black','&:hover':{background:'black'}}}>SAVE</Button>
        
        

       </form>
        </Box>
      </Box>
    </>
  )
}

export default Block1
