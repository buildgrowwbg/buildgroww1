import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Block1 from '../../contents/cart/block1/Block1'
import Block2 from '../../contents/cart/block2/Block2'

// import PageHeader from '../../contents/cart/pageHeader/PageHeader'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { cartsList } from '../../redux/slices/carts'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export default function Cart() {
  const dispatch = useDispatch();
  const [refresh,setRefresh] = useState(false);
  // use state
  const [loading,setLoading] = useState(false);
  // use Selector for carts
  const {carts} = useSelector((state)=> state.carts);


     
  useEffect(()=>{
    const handleCartList = async () => {
        try{
          setLoading(true)
          const result = await dispatch(cartsList());
          setLoading(false); 
          if(result){
            return true
            
          }else{
            return false
          }
        }catch(error){
          toast.error("Request failed")
          console.log(error); 
        }
        
    }
    handleCartList();
  },[dispatch])
  useEffect(() => {
    const check = ()=>{
      if(carts && carts.length === 0){
        toast.warn("No items in carts")
      }
    }
    check();
  }, [])
  


  return (
    <>
      <div>
        {
          loading ? (<div className='w-[100%] border h-[500px] flex justify-center items-center'><div className="spinner" ></div></div>) :(
            <Box sx={{height:{md:"120%",xs:"100%"},display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"150px"}}>
              <Box sx={{width:"91.66%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                <Block1 carts={carts} setRefresh={setRefresh} />
              </Box>
              <Box sx={{width:{md:"100%",xs:"350px"},bottom:"0",border:"1px solid black",position:"fixed",height:{md:"120px",xs:"80px"},display:"flex",justifyContent:"center",alignItems:"center",boxShadow: "0px -5px 5px gray !important",backgroundColor:"#fff"}}>
                <Box sx={{width:{md:"91.66%",xs:"100%"} ,height:"100%"}}>
                    <Block2 carts={carts}/>
                </Box>
              </Box>
            </Box>
          )
        }
      
      </div>
    </>
  )
}
