import { Box, Button,Typography,useTheme } from '@mui/material'
import React from 'react'
import {CurrencyRupee} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartValue, updateCheck } from '../../../redux/cartRedux';

export default function Block3() {
    const cartval = useSelector(cartValue)
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = ()=>{
      dispatch(updateCheck(true))
      navigate('/checkout')
    }

  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',zIndex:1}}>
        <Typography sx={{marginTop:'13px',fontSize:'25px',color:{md:`${theme.colors.alpha.black[100]}`,xs:`${theme.header.textColor}`}}}>Total<CurrencyRupee sx={{fontSize:"20px",marginLeft:'10px'}}/>{cartval.total}</Typography>
          <Button onClick={handleClick} sx={{marginTop:'13px',borderRadius:'5px',width:'150px',background:`${theme.colors.gradients.blue1}`,color:`${theme.colors.alpha.white[100]}`}}>Order</Button>
    </Box>
  )
}
