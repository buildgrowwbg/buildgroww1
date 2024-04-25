import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuery } from '../../../../redux/SearchRedux';

export default function Item({CardLinks}) {
  const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = ()=>{
        dispatch(updateQuery(CardLinks.links1[0].name));
        navigate('/products');
    }
    
  return (
    <Card onClick={handleClick} sx={{height:{sm:'250px',xs:'200px',boxShadow:'none',cursor:'pointer'}}}>
      <Box sx={{height:{sm:'75%',xs:'70%'}}}>
        <img style={{height:'100%',width:'100%'}} src={'/images/4.png'} alt="card"/>
      </Box>
      <Box sx={{height:{sm:'25%',xs:'30%'}, padding:'5px 0px 5px 15px',borderRight:"1px solid rgba(214,217,220,1)",borderBottom:"1px solid rgba(214,217,220,1)", borderLeft:"1px solid rgba(214,217,220,1)" , borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px' }}>
          <Typography sx={{fontSize:'20px', fontWeight: 500,fontFamily:'Roboto' }}>{CardLinks.links1[0].name}</Typography>
          <Typography sx={{fontSize:'15px', fontWeight: 300,fontFamily:'Roboto'}}>{CardLinks.links1[0].para}</Typography>
      </Box>
    </Card>
  )
}
