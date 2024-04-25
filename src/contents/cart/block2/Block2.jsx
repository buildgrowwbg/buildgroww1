import { Box, Typography} from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";


 

export default function Block2(carts) {
  const navigate = useNavigate();
  // this function is used for finding total price of all item's in cart
  let TotalAddonPrice = 0;
  let oneQuantityPrice = 0;
    for(let k of carts.carts){
      for(let i of k.products){
        oneQuantityPrice = (i.qty) * (i.productId.price.mrp);
        TotalAddonPrice += oneQuantityPrice;
      }
    }
    
    
  return (
   <>
    <Box sx={{display:"flex",flexDirection:"column",paddingX:"20px",gap:"2px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",marginTop:{md:"10px",xs:"2px"}}}>
        <Box sx={{fontsize:{md:"20px",xs:"14px"},textDecoration:"none",color:"white",backgroundColor:"#EE4B2B",padding:{md:"11px 33px",xs:"6px 15px"},transition:"1s",boxShadow:"6px 6px 0 black",transform:"skewX(-15deg)",border:"none","&:hover":{transition:"0.5s",boxShadow:"10px 10px 0 #FBC638"}}} onClick={() => navigate("/")}>Continue Shoping</Box>
          <Box sx={{fontsize:"20px",textDecoration:"none",color:"white",fontSize:"15px",backgroundColor:"#6225E6",padding:{md:"11px 33px",xs:"6px 15px"},transition:"1s",boxShadow:"6px 6px 0 black",transform:"skewX(-15deg)",border:"none","&:hover":{transition:"0.5s",boxShadow:"10px 10px 0 #FBC638"}}}  onClick={() => navigate("/checkout")}>Procedd Here</Box>
        </Box>
         
        <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
            <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"15px"}}}>Total Price</Typography>
 
                <Typography   sx={{fontWeight:"600",fontSize:{md:"25px",xs:"16px"}}}>₹ {TotalAddonPrice}</Typography>
             
        </Box>

    </Box>

   </>
  )
}
