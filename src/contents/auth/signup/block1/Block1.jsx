import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
  Zoom,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Block2 from "../block2/Block2"
import Block3 from "../block3/Block3";

import { FcGoogle } from "react-icons/fc";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { sentOtpRegister } from "../../../../redux/apiCalls";
import { useSnackbar } from "notistack";

// import app from "../../../../firebase";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import { useSnackbar } from "notistack";
// import { authenticateSignup } from "../../../../redux/apiCalls";


// const auth = getAuth(app);

const schema = Yup.object({
  name: Yup.string().min(3).required("Please Enter Your Name"),
  number: Yup.number()
    .min(1000000000)
    .required("please enter your mobile number"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
});

const toggleAccountInitial = {
  sentOtp: {
    view: "sentOtp",
  },
  pass: {
    view: "pass",
  },
  otp: {
    view: "otp",
  },
};

export default function Block1() {
  const theme = useTheme();
  const [toggleAccount, setToggleAccount] = useState(
    toggleAccountInitial.sentOtp
  );
  const [previousPage, setPreviousPage] = useState([]);

  const [count, setCount] = useState("");
  const [disable, setDisable] = useState(true);
  const [checkNum, setCheckNum] = useState('none');
  const { enqueueSnackbar } = useSnackbar();

  const [initialEmailValues, setInitialEmailValues] = useState({name:"", email: "",otp:"" });

  let initialValues = {
    name: "",
    phone: "",
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

  const initialValuesRegister = {
    name:"",
    phone: null,
    otp: "",
  };

  const [register, setRegister] = useState(initialValuesRegister);

  const handle = async () => {
    if(typeof(values.phone)==='string'){
       const Email = {email:values.phone};
       setInitialEmailValues({name:"", email: "", otp: "" });
      setInitialEmailValues({ ...initialEmailValues,name:values.name ,email: Email.email });
      const res = await sentOtpRegister(Email);
      if (res?.data?.status === "SUCCESS") {
        setToggleAccount(toggleAccountInitial.otp);
        enqueueSnackbar("OTP sent Successfully to Your Phone", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Zoom,
        });
      } else {
        enqueueSnackbar("Some Error Occured", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Zoom,
        });
      }
      // setPreviousPage([...previousPage, toggleAccount]);
      // setToggleAccount(toggleAccountInitial.otp);
    }
    else{
      const Phone = {phone:values.phone};
      setRegister({name:"", phone: null, otp: "" });
      setRegister({ ...register,name:values.name, phone: values.phone });
      const res = await sentOtpRegister(Phone);
      if (res?.data?.status === "SUCCESS") {
        setToggleAccount(toggleAccountInitial.otp);
        enqueueSnackbar("OTP sent Successfully to Your Phone", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Zoom,
        });
      } else {
        enqueueSnackbar(`${res?.data?.status==='FAILURE'?res?.data?.message:'some error Occoured'}`, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Zoom,
        });
      }
      // setPreviousPage([...previousPage, toggleAccount]);
    }
      
    
  };
  const maxLengthCheck = (e) => {
    setCount(e.target.value.length);
  };

  const handleFirstPage = async () => {
    window.open(`${process.env.REACT_APP_BASE_URL}/auth/google`,"_self");
   };

  const handlePassPage = () => {
    setPreviousPage([...previousPage, toggleAccount]);
    setToggleAccount(toggleAccountInitial.pass);
    values.phone = "";
    values.name = "";
  };
  // const handleMobileANDpassPage = () => {
  //   setPreviousPage([...previousPage, toggleAccount]);
  //   setToggleAccount(toggleAccountInitial.numberAndPass);
  // };
  // const handleBack = () => {
  //   var a = previousPage.slice(-1);
  //   setToggleAccount(a[0]);
  //   previousPage.pop();
  //   values.phone = "";
  // };
  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
      setCheckNum('none');
      setDisable(false);
      values.phone=String(value);
    }
    else if(/^\d+$/.test(value) && value.length<=10){
      setCheckNum('flex');
      if(/^\d{10}$/.test(value)){
        setDisable(false);
        values.phone=Number(value);
      }
    
    }
    else{
      setCheckNum('none');
      setDisable(true);
      values.phone=String(value);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: `flex`,
          // justifyContent: { sm: "space-between", xs: "normal" },
          flexDirection: "column",
          gap: { sm: "20px", xs: "10px" },
          padding: "50px 20px 10px 20px",
          width: { sm: "400px", xs: "100%" },
          maxWidth: "400px",
          height: { sm: "80vh", xs: "100%" },
          border: {
            sm: `1px solid ${theme.colors.alpha.black[30]}`,
            xs: "none",
          },
          background: { sm: `${theme.colors.alpha.white[100]}`, xs: "none" },
          overflowX: "hidden",
          boxShadow:{sm:'1px 3px 6px 1px rgba(153,150,153,0.74)',xs:'none'}
        }}
      >
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{
              display: { sm: "none", xs: "flex" },
              width: "100%",
              height: "150px",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{display:{sm:'block',xs:'none'}, width: "50%", height: "100%",borderRadius:'0!important' }}
              src="/images/mainLogo/logo1.png"
              alt="techpyro logo"
            />
            <Avatar
              sx={{display:{sm:'none',xs:'block'}, width: "135px", height: "110px" ,borderRadius:'0!important'}}
              src="/images/mainLogo/logo4.png"
              alt="techpyro logo"
            />
          </Box>

          {/* {!(toggleAccount.view === "number") ? (
            <Button
              onClick={handleBack}
              variant="text"
              sx={{
                width: "20%",
                padding: "0",
                fontSize: "18px",
                "&:hover": {
                  border: "none",
                  background: {
                    md: `${theme.colors.alpha.white[100]}`,
                    xs: `${theme.colors.alpha.white[0]}`,
                  },
                },
              }}
            >
              <ArrowBackIosIcon />
              Back
            </Button>
          ) : null} */}

              {/* ------Block1 start------ */}

              {toggleAccount.view === "sentOtp" ? (
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: { sm: "20px", xs: "10px" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <form onSubmit={handleSubmit}>
                      <Box sx={{ width: "100%" }}>
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
                    {touched.name && errors.name ? (
                      <p
                        style={{ color: `${theme.colors.warning.main}` }}
                        className="form-error"
                      >
                        {errors.name}
                      </p>
                    ) : null}
                  </Box>
                      <Box sx={{ display: `block`, width: "100%",marginTop:'15px' }}>
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
                        {touched.number && errors.number ? (
                          <p
                            style={{ color: `${theme.colors.warning.main}` }}
                            className="form-error"
                          >
                            {errors.number}
                          </p>
                        ) : null}
                      </Box>
                    </form>
                    <Button
                      sx={{
                        marginTop: { md: "20px", sm: "17px", xs: "15px" },
                        ":disabled": {
                          background: `${theme.colors.alpha.black[10]}`,
                        },
                        boxShadow: "0 2px 4px 0 rgb(0 0 0/ 15%)",
                      }}
                      variant="contained"
                      type="submit"
                      disabled={values.name.length<3 || disable}
                      onClick={handle}
                    >
                      Request OTP
                    </Button>
                  </Box>
                  <Button
                type="text"
                onClick={handlePassPage}
                sx={{
                  width: "100%",
                  fontSize: "15px",
                  color: `${theme.colors.alpha.white[100]}`,
                  "&:hover": { color: `${theme.colors.success.dark}` },
                  cursor: { md: "pointer", xs: "none" },
                  background: "#FFA500",
                  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                  borderRadius: "4px",
                  // marginTop: "20px",
                }}
              >
                SignUp with Password
              </Button>
                </Box>
                
              ) : null}

              {/* ------Block2 start------ */}

              {toggleAccount.view === "pass" && (
                <Box>
                  <Block2
                    toggleAccountInitial={toggleAccountInitial}
                    setToggleAccount={setToggleAccount}
                    toggleAccount={toggleAccount}
                    previousPage={previousPage}
                    setPreviousPage={setPreviousPage}
                  />
                </Box>
              )}

          {/* ------Block3 start------ */}

          {toggleAccount.view === "otp" ? (
            <Block3
              values={values}
              initialEmailValues={initialEmailValues}
              setInitialEmailValues={setInitialEmailValues}
              register={register}
              setRegister={setRegister}
            />
          ) : null}

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                textAlign: "center",
                margin: "10px 0",
                fontWeight: 500,
                color: `${theme.colors.secondary.main}`,
              }}
            >
              OR
            </Typography>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Button
                type="text"
                onClick={handleFirstPage}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                  width: "40%",
                  fontSize: "15px",
                  color: `${theme.colors.alpha.black[100]}`,
                  "&:hover": { color: `${theme.colors.success.dark}` },
                  background: "#ecf3ff",
                  cursor: { md: "pointer", xs: "none" },
                  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                  borderRadius: "4px",
                }}
              >
                <FcGoogle style={{ fontSize: "25px" }} /> Google
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: { sm: "absolute", xs: "static" },
            height: "10%",
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "15px" }}>Existing User?</Typography>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", marginBottom: "1px" }}
            >
              login
            </Link>
          </Box>
          <Typography sx={{ fontSize: "12.5px" }}>
            By continuing you agree to our Terms Of Use and Privacy Policy
          </Typography>
        </Box>
      </Box>
    </>
  );
}
