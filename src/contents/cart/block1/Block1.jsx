import { Avatar, Box } from '@mui/material'
import React from 'react'
import {Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../../redux/slices/carts';
import { toast } from 'react-toastify';

export default function Block1(props) {
    // Redux 
    const dispatch = useDispatch();
    // UseState
    // const [refresh,setRefresh] = useState(false);
    const handleDeleteCart = async(id) => {
        try{
          const result = await dispatch(deleteCart(id));
          if(result){
            props.setRefresh(true);
              toast.success("Cart item Deleted Successfully")
              return true;
          }else{
            toast.error("cart Item not delete")
            return false;
          }
        }catch(error){
          console.log(error)
        }
    }
 
  return (
    <Box sx={{width:"100%",height:"max-content",display:"flex",flexDirection:"column"}}>
        <Typography variant="h1" sx={{width:"100%",height:"50px",paddingX:"10px",fontWeight:"600",}}>
        Carts
      </Typography>
      <Typography variant='h5' sx={{fontWeight:"500",fontSize:"13px",padding:"10px"}}>At Build Groww, we take pride in our commitment to customer satisfaction.</Typography>
      <Box sx={{border:"1px solid gray",display:"flex" ,height:"50px",alignItems:"center", background: "linear-gradient(to bottom, #ee0979, #ff6a00)",fontWeight:"500",color:"#fff" }}>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"300px",alignItems:"center",display:"flex",justifyContent:"center"}}>Product</Typography>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"250px",alignItems:"center",display:"flex",justifyContent:"center"}}>Company</Typography>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"150px",alignItems:"center",display:"flex",justifyContent:"center"}}>Price/per</Typography>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"250px",alignItems:"center",display:"flex",justifyContent:"center"}}>Quantity</Typography>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"200px",alignItems:"center",display:"flex",justifyContent:"center"}}>Total</Typography>
      </Box>
      <Box sx={{width:"100%",height:{md:"max-content",xs:"100%"},display:"flex",flexDirection:"column"}}>
      {
            props.carts.length > 0 &&props.carts.map((data,index) => (
            <Box key={index} sx={{width:"100%",height:"210px",border:"1px solid black" ,display:"flex",alignItems:"center",marginBottom:"50px"}}>
              <Box sx={{width:"300px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Avatar src={data && data.products && data.products[0] && data.products[0].productId.image} alt="product_image"  sx={{width:{md:"200px",xs:"100px"},height:{md:"160px",xs:"80px"},mixBlendMode:"multiply",marginTop:"5px",borderRadius:"10px"}}/>
                <Typography sx={{fontWeight:"600",marginLeft:"10px",fontSize:{md:"20px",xs:"16px"}}}> {data && data.products && data.products[0] && data.products[0].productId.title && data.products[0].productId.title.shortTitle}</Typography>
              </Box>
              <Box  sx={{width:"250px" ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"12px"}}}>Company pvt Ltd</Typography>
              </Box>
              <Box sx={{width:"150px" ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"12px"}}}>₹ {data && data.products && data.products[0] && data.products[0].productId.price && data.products[0].productId.price.mrp}</Typography>
              </Box>
              <Box sx={{width:"250px" ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"12px"}}}>{data && data.products && data.products[0] && data.products[0].qty}</Typography>
                
                <Box sx={{display:"flex",border:"1px solid black",borderRadius:"20px",width:{md:"80px",xs:"50px"},justifyContent:"center",gap:"10px"}}>
                <Typography sx={{fontSize:{md:"20px",xs:"16px"}}}>-</Typography><Box sx={{fontSize:{md:"20px",xs:"16px"}}}>1</Box><Typography sx={{fontSize:{md:"20px",xs:"16px"}}}>+</Typography>
                </Box>
              </Box>
              <div className='w-[220px] flex flex-col '>
                <Box sx={{width:"100%",height:"105px",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center"}}>
                  <Typography sx={{fontWeight:"600",fontSize:{md:"18px",xs:"14px"}}}>{ (data.products[0].productId.price.mrp) * (data.products[0].qty)}</Typography>
                </Box>
                <Box sx={{width:"100%",height:"105px",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center"}}>
                  <button onClick = {() => handleDeleteCart(data.id)} className='bg-red-600 px-5 py-2 rounded-md mb-1 hover:bg-red-400 hover:scale-95 transition-all duration-200'><DeleteIcon/>Delete</button>
                </Box>
              </div>
        </Box>
            ))
          } 
        
        
      </Box>
    </Box> 
  )
}
