import React, { useEffect, useState } from 'react'
import Block1 from '../../contents/product/block1/Block1'
import Block2 from '../../contents/product/block2/Block2'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Content from '../../components/content/Content'
import { Box, Divider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../redux/slices/products'
import { toast } from 'react-toastify'
import { getShopData } from '../../redux/slices/company'
import { useSearchParams } from 'react-router-dom'


function Product() {
  const id = window.location.pathname.split('/')[3];
  const dispatch = useDispatch()
  const [page,setPage] = useState(1);
  const [searchParams,setSearchParams] = useSearchParams();
  const [category,setCategory] = useState(searchParams.get("category"));

  const fetchProduct = async()=>{
    if(category===null){
      const query = {"shop":id}
      const result =  await dispatch(getProducts(query,page))
      if(!result)
        toast.error("some error occoured!")
    }
    else{
      const query = {"$and":[{"shop":id},{"category":{"$regex":category,"$options":"i"}}]}
      const result =  await dispatch(getProducts(query,page))
      if(!result)
        toast.error("some error occoured!")
    }
  }


  useEffect(() => {
    const fetchData = ()=>{
      setPage(1);
      const query = {"$and":[{"shop":id},{"category":{"$regex":category,"$options":"i"}}]}
      const result =  dispatch(getProducts(query,page))
      if(!result)
        toast.error("Product Not Found!")
    }
    const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
    };
    if(category!==null){
      fetchData();
      goToTop();
    }
      
  }, [category])

  useEffect(() => {
    fetchProduct();
    const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
    };
    goToTop();
  }, [page])

  useEffect(() => {
    const fetchShop = ()=>{
      dispatch(getShopData(id))
    }

    fetchShop();
  }, [])
  
  return (
    <>
    <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
    <Box sx={{marginTop:"70px"}}>
    <Block1/>
    <Divider/>
    <Block2 page={page} setPage={setPage} category={category} setCategory={setCategory}/>
    </Box>
    <Content/>
    <Footer/>
    </>
  )
}

export default Product