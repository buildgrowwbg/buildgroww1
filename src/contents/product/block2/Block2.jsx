import React, { useState } from 'react'
import { Add,  } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, Divider, Pagination, Rating, Stack, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createCart } from '../../../redux/slices/carts'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const StyleToolbar = styled(Box)(({theme})=>({
    padding:"0px 120px 100px 120px",
  textAlign:"justify",
  backgroundColor:"#fff",
  position:'relative',
  [theme.breakpoints.down('md')]: {
    padding:"0px 10px 90px 10px",
  },
  [theme.breakpoints.down('sm')]: {
    padding:"0px 10px 90px 10px"
  } 
}))
function Block2({page,setPage,category,setCategory}) {
  const navigate = useNavigate()
   //-->redux setup
   const product= useSelector((state)=>state.product)
   const {user}= useSelector((state)=>state.auth)
   const {companyData} = useSelector(state => state.company)

   const productData = product&&product.products&&product.products.data&&product.products.data.length>0&&product.products.data[0].shop;
   const count = product && product.products && product.products.data && product.products.data.paginator && product.products.data.paginator.pageCount

   //-->Add to cart function
   const dispatch = useDispatch()
   
   const addToCart = (id)=>{
    if(Object.keys(user).length===0){
      toast.error("Please login to add product in cart");
    }
    else{
      const data ={
        "userId":`${user && user.id}`,
        "products":[
            {
                "productId": `${id}`,
                "qty": 1
            }
         ]
      }
        const result =  dispatch(createCart(data))
        if(result){
          toast.success("Product added successfully in your cart");
        }
        else{
          toast.error("Some error occoured");
          return false;
        }
    }

   }
  return (
    <StyleToolbar>
      <Box sx={{paddingY:"10px",display:"flex",gap:"25px",alignItems:"center",flexWrap:"wrap"}}>
       <Typography sx={{fontSize:"24px",fontWeight:"600"}}>Our Categories:-</Typography>
        <Box  sx={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
          {companyData && companyData.data && companyData.data.productCategory && companyData.data.productCategory.length>0 &&companyData.data.productCategory.map((item)=>(
          <Button onClick={()=> {setCategory(item && item.name);}} variant='contained' sx={{borderRadius:"2px",cursor:'pointer', boxShadow: category===item.name?"rgba(0, 0, 0, 0.35) 0px 5px 15px":"none",backgroundColor:category===item.name?"#eee":"none",color:category===item.name?"#000":"none","&:hover":{boxShadow: category===item.name?"rgba(0, 0, 0, 0.35) 0px 5px 15px":"none",backgroundColor:category===item.name?"#eee":"none",color:category===item.name?"#000":"none",}}} key={item.id}>{item&&item.name}</Button>
          ))}
        </Box>
      </Box>

      <Box sx={{paddingY:"10px"}}>
        {product&&product.products&&product.products.data&&product.products.data.length>0&&product.products.data.map((data)=>(
  
      <Card key={data.id} sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px",gap:"30px",flexDirection:{md:"row",sm:"row",xs:"column-reverse"},textAlign:{md:"initial",sm:"initial",xs:'center'}}}>
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px",gap:"30px",flexDirection:{md:"row",sm:"row",xs:'column'}}}>
     
            <Box >
            <Typography sx={{fontSize:{md:"32px",sm:"24px",xs:"24px"},fontWeight:'600',}}>{data&&data.title&&data.title.shortTitle} ( {data&&data.subCategory} )</Typography>
              <Typography sx={{fontSize:{md:"20px",sm:"24px",xs:"18px"},fontWeight:"600",}}>
  <span style={{fontSize:'16px',fontWeight:"400"}}>Category : </span> {data&&data.category}
              </Typography>
              <Box sx={{display:"flex",gap:"20px",alignItems:"center",justifyContent:{md:'flex-start',sm:"flex-start",xs:"center"}}}>
              <Typography sx={{fontSize:"30px",paddingY:'5px',fontWeight:'600'}}>₹ {data&&data.price&&data.price.mrp} </Typography>
              <Typography sx={{fontSize:"16px",paddingY:'5px',fontWeight:'600',textDecoration:' line-through',color:'gray'}}>₹ {data&&data.price&&data.price.cost} </Typography>
              </Box>
               <Typography sx={{fontSize:"14px"}}>{data&&data.title&&data.title.longTitle}</Typography>
                  
            </Box>
            </Box>
            <Box sx={{position:"relative",width:{md:300,sm:300,xs:"100%"},height:250}}>
            <CardMedia
            component="img"
            sx={{ width:{md:300,sm:300,xs:"100%"},height:250,borderRadius:"5px" ,objectFit:"cover"}}
            image={data&&data.image}
            alt="Live from space album cover"
          />
          <Box sx={{position:'absolute',bottom:'0px',width:"100%",display:"flex",justifyContent:'center',alignItems:'center'}}>
            <Button startIcon={<Add/>} sx={{color:"#fff",backgroundColor:"green",width:"100%",borderRadius:"0px","&:hover":{
                 backgroundColor:"#339D3A"
                }}} onClick={()=>addToCart(data && data.id)}>Add to Cart</Button>
          </Box>
          </Box>
     
      </Card>
    ))} 
    
    </Box>
    {product&&product.products&&product.products.data&&product.products.data.length>0 && <Stack sx={{display:"flex", justifyContent:"center",  width:"100%",height:"100px", alignItems:"center", position:"absolute", bottom:"0px",left:0}} >
        <Divider/>
        <Typography variant='h5' >Page 1 of {count}</Typography>
      <Pagination count={count} page={page} color="error" size='large' sx={{display:"flex", justifyContent:"center", padding:"20px 0px 0px 0px"}} onChange={(e, value) =>setPage(value)} />
   
      </Stack>}
  
 </StyleToolbar>
  )
}
export default Block2