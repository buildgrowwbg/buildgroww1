import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputAdornment, TextField ,Typography,useTheme,Zoom} from '@mui/material'
import { useFormik} from 'formik'
import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { authenticateLogin,resetPassword,resetPasswordOtp,sentOtpLogin} from '../../../../redux/apiCalls';


const schema = Yup.object({
  username: Yup.string().email().required('please enter your email'),
  password: Yup.string().min(6).required("Please enter your password"),
})

export default function Block4({toggleAccountInitial,setToggleAccount,toggleAccount,previousPage,setPreviousPage}) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();

  const [length, setLength] = useState('');
  const [open, setOpen] = useState(false);
  const [checkNum, setCheckNum] = useState('none');
  const [disable, setDisable] = useState(true);
  const [show, setShow] = useState('none');
  const [hide, setHide] = useState('block');
  const [newPassword, setNewPassword] = useState({"code":"","newPassword":""});

  const initialValues = {
    username: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: false,
    //// By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: (values) => {
      console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
      //// to get rid of all the values after submitting the form
      
    },
  });

  

  const lengthCheck = (e)=>{
    setLength(e.target.value.length);
  }

  const handleEmail = (e)=>{
    setPreviousPage([...previousPage, toggleAccount]);
    setToggleAccount(toggleAccountInitial.number);
  }

  const handleClick = async()=>{
    if(typeof(values.username)==='string')
      values.username=values.username.toLowerCase();
    const res = await authenticateLogin(dispatch,values);
    console.log(res)
    if(res?.data?res.data.status==='SUCCESS':false){
      navigate('/');
      enqueueSnackbar('You have Successfully logged in', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
    else{
      enqueueSnackbar(`${res.response?.data?.message ==="Incorrect Password"? 'Invalid Credential': res.response?.data?.message}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
  }

  const handleResetPassword = ()=>{
    setDisable(true);
    setOpen(true);
  }

  const handleClose = ()=>{
    setOpen(false);
    setShow('none');
    setHide('block');
    values.username='';
  }

  const sentOTP = async()=>{
    let Email = {"email":""};
    let Phone = {phone:null};
    if(typeof(values.username)==='string'){
        Email = {email:values.username};
    const res = await resetPasswordOtp(Email);
    console.log(res);
    if(res?.data?.status==='SUCCESS'){
      setHide('none');
      setShow('block');
      enqueueSnackbar('OTP sent Successfully to Your Email', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
    else{
      values.username='';
      setOpen(false);
      enqueueSnackbar(`${res.response!==undefined?res.response?.data?.message:'User does not exists'}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
        
    }
  }
  else{
    Phone = {phone:values.username}
    const res = await resetPasswordOtp(Phone);
    console.log(res);
    if(res?.data?.status==='SUCCESS'){
      setHide('none');
      setShow('block');
      enqueueSnackbar('OTP sent Successfully to Your Email', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
    else{
      values.username='';
      setOpen(false);
      enqueueSnackbar(`${res.response!==undefined?res.response?.data?.message:'User does not exists'}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
        
    }
  }
  }

  const handleSave = async()=>{
    const res = await resetPassword(newPassword);
    console.log(res);
    if(res?.data?.status==='SUCCESS'){
      setOpen(false);
      enqueueSnackbar('Your password was Successfully changed', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
    else{
      enqueueSnackbar(`${res.response!==undefined?res.response.data.message:'Invalid OTP'}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
      }
  }

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
      setCheckNum('none');
      setDisable(false);
      values.username=String(value);
    }
    else if(/^\d+$/.test(value) && value.length<=10){
      setCheckNum('flex');
      if(/^\d{10}$/.test(value)){
        setDisable(false);
        values.username=Number(value);
      }
    
    }
    else{
      setCheckNum('none');
      setDisable(true);
      values.username=String(value);
    }
  };

  return (
    <div style={{display:'flex',width:'100%',flexDirection:'column',justifyContent:'flex-start'}}>
        <form>
            <Box sx={{display:'inline-block',width:'100%'}}>
          {/* <label style={{fontSize:'14px',fontWeight:500}} htmlFor="number" className="input-label">
                      Email/Mobile Number
            </label>
          <Box sx={{width:'100%',display:'flex',gap:'5px',fontSize:'18px',alignItems:'center',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,height:'40px'}}>
            <Box sx={{ display: `${checkNum}`, fontSize: "16px" }}>+91</Box>
            <Box
              sx={{
                display: `${checkNum}`,
                width: "1px",
                height: "18px",
                borderRight: `1px solid ${theme.colors.alpha.black[30]}`,
              }}
            ></Box> */}
            <div style={{display:'input-block',width:'100%'}}>
                    
            <TextField required
                  sx={{
                    width:'100%',
                    "& fieldset": { borderRadius:'5px'},
                    // "& .MuiInputBase-input": {
                    //   padding: "10px 15px",
                    //   fontSize: "16px",
                    //   letterSpacing: "0.2px",
                    //   width:'100%'
                    // },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment sx={{display:`${checkNum}`}} position="start">
                        <Typography>+91</Typography>
                      </InputAdornment>
                    ),
                  }}
                  size="normal"
                  variant="outlined"
                  type="text"
                  name="email"
                  label='Email/Mobile Number'
                  placeholder="Enter email/mobile number"
                  onChange={(e)=>handleInputChange(e)}
                  onBlur={handleBlur}
                />
              </div>
                 
          {/* </Box> */}
          {errors.email && touched.email ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.email}</p>
                    ) : null} 
          <div style={{display:'input-block',width:'100%',marginTop:'15px'}}>
          {/* <label style={{fontSize:'14px',fontWeight:500}}  htmlFor="password" className="input-label">
                      Password
                    </label> */}
              {/* <Box sx={{display:'flex',width:'100%'}}>
                <TextField required sx={{"& fieldset": { border: 'none' },width:'100%', '& .MuiInputBase-input': {padding:'5px',
                fontSize:'16px',width:'100%',letterSpacing:'1px'
                }}}  type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onInput={lengthCheck}
                onBlur={handleBlur}/>
                <Button type='text' onClick={handleResetPassword} style={{display:'flex',justifyContent:'flex-end', textDecoration:'none',fontSize:'14px'}}>Forget?</Button>
            </Box> */}
            <TextField
                  required
                  sx={{
                    width:'100%',
                    "& fieldset": { borderRadius:'5px'},
                    // "& .MuiInputBase-input": {
                    //   padding: "10px 15px",
                    //   fontSize: "16px",
                    //   letterSpacing: "0.2px",
                    //   width:'100%'
                    // },
                  }}
                  type='password'
                  InputProps={{
                      endAdornment:(
                        <InputAdornment position="end">
                          <Button type='text' onClick={handleResetPassword} sx={{padding:'0',":hover":{background:'#fff'}}} >Forget?</Button>
                        </InputAdornment>
                      ),
                  }} 
                  size="normal"
                  variant="outlined"
                  // autoComplete="off"
                  name="password"
                  // id="password"
                  label="Password"
                  // placeholder="Enter Your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            
          </div>
          {errors.password && touched.password ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.password}</p>
                    ) : null}
            <Button sx={{marginTop:'15px',borderRadius:'5px',width:'100%',boxShadow:'0 2px 4px 0 rgb(0 0 0/ 20%)',":disabled": {
                        background: `${theme.colors.alpha.black[10]}`,
                      },}} variant='contained' disabled={values.password==="" || values.password.length<6 || disable} onClick={handleClick}  onSubmit={handleSubmit}>Continue</Button>
          </Box>
            </form>
          <Button type='text' onClick={handleEmail} sx={{width:'100%',marginTop:'20px',fontSize:'15px',color:`${theme.colors.alpha.white[100]}`,"&:hover":{color:`${theme.colors.success.dark}`},background:'#FFA500',cursor:{md:'pointer',xs:'none'},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 20%)',borderRadius:'4px'}}>Login with OTP</Button>


        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <form>
          <TextField
            sx={{minWidth:{sm:'300px',xs:'200px'},fontSize:'16px'}}
            autoFocus
            margin="dense"
            id="email"
            name='username'
            label="Email/Mobile Number"
            placeholder="Enter Email/Mobile Number"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>handleInputChange(e)}
          />
          <Button onClick={sentOTP} variant='contained' disabled={disable} sx={{display:`${hide}`,width:'100%',borderRadius:'5px',padding:'5px'}}>Sent OTP</Button>
          <TextField
            sx={{display:`${show}`}}
            margin="dense"
            id="text"
            label="OTP"
            placeholder="Enter OTP"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{setNewPassword({...newPassword,code:e.target.value})}}
          />
          <TextField
            sx={{display:`${show}`}}
            margin="dense"
            id="password"
            name='password'
            label="New Password"
            placeholder="Enter New Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e)=>{setNewPassword({...newPassword,newPassword:e.target.value})}}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
