import { Box, Button, Card, Typography,useTheme,Zoom } from '@mui/material'
import React, { useState,useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUser, updateLocation } from '../../../redux/userRedux';
import { useSnackbar } from 'notistack';
import axios from 'axios';

export default function PageHeader() {
    const theme = useTheme();
    const user = useSelector();
    const [res,setRes] = useState({});
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();

    useEffect(() => {
      handleCurrLocation();
    }, [])

    const getPosition = async (latitude,longitude)=>{
      await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_CLIENTID}`).then((res)=>{
        console.log(res)
        if(res?.data?.status==='OK'){
          const locality = res.data?.results[0]?.address_components.filter((item)=>{ return item.types.includes('sublocality_level_1')})
          const city = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('locality'))
          const state = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('administrative_area_level_1'))
          const country = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('country'))
          const pin = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('postal_code'))
          console.log(locality)
          setRes({city:city.length !==0? city[0].long_name:"",pincode:pin!==0 ? parseFloat(pin[0].long_name):"",country:country.length!==0 ? country[0].short_name :""})
          //     values.city = res.data?.features[0]?.properties?.state_district;
          //     values.locality = res.data?.features[0]?.properties?.city!==undefined ? res.data?.features[0]?.properties?.city : res.data?.features[0]?.properties?.state_district;
          //     values.state = res.data?.features[0]?.properties?.state;
          //     values.zipcode = parseFloat(res.data?.features[0]?.properties?.postcode);
          //     setOpen(true);
              
          // console.log(values);
          // // enqueueSnackbar(`${len}`===0?'Address added SuccessFully':'Address updated SuccessFully', {
          // //   variant: 'success',
          // //   anchorOrigin: {
          // //     vertical: 'top',
          // //     horizontal: 'center'
          // //   },
          // //   TransitionComponent: Zoom
          // //   });

        }
        else{
          enqueueSnackbar('Some Error Occured', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center'
            },
            TransitionComponent: Zoom
            });
        }
      }).catch((e)=>{
        console.log(e)
        enqueueSnackbar('Some Error Occured '+e, {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          TransitionComponent: Zoom
          });
      })
    }

   const handleCurrLocation = async ()=>{
      if(user.currentLocation===null){
          if(navigator.geolocation){
              // navigator.geolocation.getCurrentPosition((position)=>{
              //   const {latitude,longitude} = position.coords;
              //   dispatch(updateLocation({latitude,longitude}))
              //   getPosition(latitude,longitude)
              // },(error)=>{
              //   dispatch(updateLocation({code:error.code,message:error.message}))
              //   console.log(error)
              // })
            }
            else{
              alert('Your Browser is not supporting geoLocation, Please Update your browser');
            }
      }
      else if(user.currentLocation.latitude!==undefined&&user.currentLocation.longitude!==undefined){
          getPosition(user.currentLocation.latitude,user.currentLocation.longitude)
      }
      else{
          enqueueSnackbar(`${user.currentLocation.code}`===1?'User Blocked Loaction, Please unblocked and reload ':`${user.currentLocation.message}`, {
              variant: 'error',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
              },
              TransitionComponent: Zoom
              });
      }
   }
  return (
    <Card sx={{zIndex:1,position:'fixed',background:`${theme.colors.alpha.white[100]}`,width:'100%',height:'70px',borderRadius:'0',marginTop:'64px',display:'flex',justifyContent:{sm:'space-between'},gap:{sm:'0',xs:'20px'} ,alignItems:'center',padding:{md:'0 10%',sm:'0 8%',xs:'0 5%'}}}>
        <Typography sx={{display:{sm:'block',xs:'none'},fontSize:{md:'30px',sm:'25px',xs:'20px'},fontWeight:600}}>My Cart</Typography>
        <Typography sx={{display:{sm:'none',xs:'block'},fontSize:'16px',fontWeight:600}}>Ship to:</Typography>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <LocationOnIcon/>
            <Typography sx={{marginRight:{sm:'30px'}, fontSize:{md:'18px',xs:'14px'},fontWeight:500}}>{res.city},{res.country} {res.pincode}</Typography>
            {/* <Button sx={{display:{sm:'block',xs:'none'},"&:hover":{background:`${theme.colors.alpha.white[100]}`} ,color:`${theme.colors.alpha.black[50]}` ,borderBottom:`1px solid ${theme.colors.alpha.black[50]}`,cursor:{md:'pointer',xs:'none'}}}>Change PIN Code</Button> */}
        </Box>
    </Card>
  )
}
