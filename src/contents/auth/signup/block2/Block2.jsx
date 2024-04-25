import { Box, Button, IconButton, InputAdornment, TextField, Typography, useTheme ,Zoom} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

// import app from "../../../../firebase";
// import {
//   getAuth,
//   sendSignInLinkToEmail,
//   isSignInWithEmailLink,
//   signInWithEmailLink,
// } from "firebase/auth";
import { authenticateLogin, authenticateSignup } from "../../../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// const auth = getAuth(app);

const schema = Yup.object({
  name: Yup.string().min(3).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password")
});

export default function Block2({
  toggleAccountInitial,
  setToggleAccount,
  toggleAccount,
  previousPage,
  setPreviousPage,
  login,
  setLogin,
}) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    name: "",
    email: "",
    password: ""
  };
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [checkNum, setCheckNum] = useState('none');

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

  // const actionCodeSettings = {
  //   // URL you want to redirect back to. The domain (www.example.com) for this
  //   // URL must be in the authorized domains list in the Firebase Console.
  //   url: "http://localhost:3000",
  //   // This must be true.
  //   handleCodeInApp: true,
  //   // iOS: {
  //   //   bundleId: 'com.example.ios'
  //   // },
  //   // android: {
  //   //   packageName: 'com.example.android',
  //   //   installApp: true,
  //   //   minimumVersion: '12'
  //   // },
  //   // dynamicLinkDomain: 'http://localhost:3000'
  // };

  // const checkEmail = () => {
  //   console.log(window.location.href);
  //   if (isSignInWithEmailLink(auth, window.location.href)) {
  //     // Additional state parameters can also be passed via URL.
  //     // This can be used to continue the user's intended action before triggering
  //     // the sign-in operation.
  //     // Get the email if available. This should be available if the user completes
  //     // the flow on the same device where they started it.

  //     let email = window.localStorage.getItem("emailForSignIn");
  //     if (!email) {
  //       // User opened the link on a different device. To prevent session fixation
  //       // attacks, ask the user to provide the associated email again. For example:
  //       email = window.prompt("Please provide your email for confirmation");
  //     }
  //     // The client SDK will parse the code from the link for you.
  //     signInWithEmailLink(auth, email, window.location.href)
  //       .then((result) => {
  //         // Clear email from storage.
  //         window.localStorage.removeItem("emailForSignIn");
  //         console.log(result.user);
  //         // You can access the new user via result.user
  //         // Additional user info profile not available via:
  //         // result.additionalUserInfo.profile == null
  //         // You can check if the user is new or existing:
  //         // result.additionalUserInfo.isNewUser
  //       })
  //       .catch((error) => {
  //         // Some error occurred, you can inspect the code: error.code
  //         // Common errors could be invalid email and invalid or expired OTPs.
  //       });
  //   }
  // };

  // const handleOtpPage = async () => {
  //   sendSignInLinkToEmail(auth, values.email, actionCodeSettings)
  //     .then(() => {
  //       // The link was successfully sent. Inform the user.
  //       // Save the email locally so you don't need to ask the user for it again
  //       // if they open the link on the same device.
  //       console.log("hi");
  //       window.localStorage.setItem("emailForSignIn", values.email);
  //       console.log("hello");
  //       checkEmail();
  //       console.log("hi hello");
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode);
  //       console.log(errorMessage);
  //       // ...
  //     });
  // };
  //   const handleEmailAndPass = ()=>{
  //     setPreviousPage([...previousPage,toggleAccount]);
  //     console.log(previousPage);
  //     setToggleAccount(toggleAccountInitial.emailAndPass);
  //   }
    const handleContinue = async ()=>{
      if(typeof(values.email)==='string'){
        values.email=values.email.toLowerCase();
        const res = await authenticateSignup(values);
        if(res.data?.status==="SUCCESS"){
          const resLogin = await authenticateLogin(dispatch,{"username":values.email,"password":values.password})
          if(resLogin.data?.status==="SUCCESS"){
            enqueueSnackbar('You are Successfully registered', {
              variant: 'success',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
              },
              TransitionComponent: Zoom
              });
              navigate('/');
          }
          else{
            enqueueSnackbar('You are Successfully registered, Please Login', {
              variant: 'success',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
              },
              TransitionComponent: Zoom
              });
              navigate('/login');
          }
        }
        else{
          if(res.response?.data?.status==="VALIDATION_ERROR"){
            enqueueSnackbar("User Already exists, Please Login", {
              variant: 'error',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
              },
              TransitionComponent: Zoom
              });
              navigate('/login')
          }
          else{
            enqueueSnackbar("Some error occoured, please try again", {
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
      else{
        const value={name:values.name,phone:values.email,password:values.password};
        const res = await authenticateSignup(value);
        if(res.data?.status==="SUCCESS"){
          const resLogin = await authenticateLogin(dispatch,{"username":value.phone,"password":value.password})
          console.log(resLogin)
          if(resLogin.data?.status==="SUCCESS"){
            enqueueSnackbar('You are Successfully registered', {
              variant: 'success',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
              },
              TransitionComponent: Zoom
              });
              navigate('/');
          }
          else{
            enqueueSnackbar('You are Successfully registered, Please Login', {
              variant: 'success',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
              },
              TransitionComponent: Zoom
              });
              navigate('/login');
          }
        }
        else{
          if(res.response?.data?.status==="VALIDATION_ERROR"){
            enqueueSnackbar("User Already exists, Please Login", {
              variant: 'error',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
              },
              TransitionComponent: Zoom
              });
              navigate('/login')
          }
          else{
            enqueueSnackbar("Some error occoured, please try again", {
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
    }

    const handleOtpPage = ()=>{
      setToggleAccount(toggleAccountInitial.sentOtp)
    }

    const handleInputChange = (e) => {
      e.preventDefault();
      const value = e.target.value.trim();
      if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
        setCheckNum('none');
        setDisable(false);
        values.email=String(value);
      }
      else if(/^\d+$/.test(value) && value.length<=10){
        setCheckNum('flex');
        if(/^\d{10}$/.test(value)){
          setDisable(false);
          values.email=Number(value);
        }
      
      }
      else{
        setCheckNum('none');
        setDisable(true);
        values.email=String(value);
      }
    };

  return (
    <>
      <Box sx={{ display: "inline-block" ,width:'100%'}}>
      <form onSubmit={handleSubmit}>
          <Box sx={{ width:'100%'}}>
            {/* <label
              style={{ fontSize: "14px",fontWeight:500, paddingLeft: "5px" }}
              htmlFor="number"
              className="input-label"
            >
              Name
            </label> */}
            {/* <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "5px",
                fontSize: "16px",
                alignItems: "center",
                // borderBottom: `1px solid ${theme.colors.alpha.black[30]}`,
                // height: "40px",
              }}
            > */}
              <div style={{ display: "input-block", width:'100%' }}>
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
                  size="normal"
                  variant="outlined"
                  type="text"
                  name="name"
                  label='Name'
                  // id="name"
                  // placeholder="Enter Your Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            {/* </Box> */}
            {touched.name && errors.name ? (
              <p
                style={{ color: `${theme.colors.warning.main}` }}
                className="form-error"
              >
                {errors.name}
              </p>
            ) : null}
          </Box>
          <Box sx={{ marginTop: "15px", width:'100%' }}>
            {/* <label
              style={{ fontSize: "14px",fontWeight:500, paddingLeft: "5px" }}
              htmlFor="number"
              className="input-label"
            >
              Email/Mobile Number
            </label> */}
            {/* <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "5px",
                fontSize: "16px",
                alignItems: "center",
                borderBottom: `1px solid ${theme.colors.alpha.black[30]}`,
                height: "40px",
              }}
            > */}
              {/* <Box sx={{ display: `${checkNum}`, fontSize: "16px" }}>
                +91
              </Box>
              <Box
                sx={{
                  display: `${checkNum}`,
                  width: "1px",
                  height: "18px",
                  borderRight: `1px solid ${theme.colors.alpha.black[30]}`,
                }}
              ></Box> */}
              <div style={{ display: "input-block",width:'100%' }}>
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
            {/* {touched.email && errors.email ? (
              <p
                style={{ color: `${theme.colors.warning.main}` }}
                className="form-error"
              >
                {errors.email}
              </p>
            ) : null} */}
          </Box>
          <Box sx={{ marginTop: "15px" , width:'100%'}}>
            {/* <label
              style={{ fontSize: "14px",fontWeight:500, paddingLeft: "5px" }}
              htmlFor="number"
              className="input-label"
            >
              Password
            </label> */}
            {/* <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "5px",
                fontSize: "16px",
                alignItems: "center",
                borderBottom: `1px solid ${theme.colors.alpha.black[30]}`,
                height: "40px",
              }}
            > */}
              <div style={{ display: "input-block", width:'100%' }}>
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
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                      endAdornment:(
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
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
            </Box>
            {touched.password && errors.password ? (
              <p
                style={{ color: `${theme.colors.warning.main}` }}
                className="form-error"
              >
                {errors.password}
              </p>
            ) : null}
          {/* </Box> */}
        </form>
        <Button
          sx={{
            marginTop: "10px",
            borderRadius:'5px',
            width: "100%",
            ":disabled": { background: `${theme.colors.alpha.black[10]}` },
            boxShadow: "0 2px 4px 0 rgb(0 0 0/ 15%)",
          }}
          variant="contained"
          type="submit"
          disabled={values.name==="" || values.email==="" || values.password.length<6 || disable}
          onClick={handleContinue}
        >
          Submit
        </Button>
        <Button
                type="text"
                onClick={handleOtpPage}
                sx={{
                  width: "100%",
                  fontSize: "15px",
                  color: `${theme.colors.alpha.white[100]}`,
                  "&:hover": { color: `${theme.colors.success.dark}` },
                  cursor: { md: "pointer", xs: "none" },
                  background: "#FFA500",
                  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                  borderRadius: "4px",
                  marginTop: "15px",
                }}
              >
                SignUp with OTP
              </Button>
      </Box>
    </>
  );
}
