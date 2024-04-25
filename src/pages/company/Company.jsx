import React, { useEffect, useState } from 'react'
import Block1 from '../../contents/company/block1/Block1'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from '../../redux/store/store'
import { getCompanyData } from '../../redux/slices/company'
import { useLocation, useSearchParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Content from '../../components/content/Content'

function Company() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page,setPage] = useState(1);
  const loc = useLocation();

  const location = window.location.pathname.split('/')[1];
  const search = window.location.pathname.split('/')[2].replace("%20"," ");


  const companyData = useSelector((state)=>state.company)

  const searchQuery = searchParams.get("product")


  useEffect(() => {
    
    let fetchData = async()=>{
      setPage(1);
      if(searchQuery===null){
        let query = {"$and":[{"address.city":{"$regex":`${location}`,"$options":"i"}},{"$or":[{"name":{"$regex":`${search?search:''}`,"$options":"i"}},{"title":{"$regex":`${search?search:''}`,"$options":"i"}}]}]}
        let sort = {"name":1}
        dispatch(getCompanyData(query,sort,page))
      }
      else{
        let query = {"$and":[{"address.city":{"$regex":`${location}`,"$options":"i"}},{"$or":[{"name":{"$regex":`${search?search:''}`,"$options":"i"}},{"title":{"$regex":`${search?search:''}`,"$options":"i"}}]},{"$or":[{"productCategory.name":{"$regex":`${searchQuery}`,"$options":"i"}},{"productCategory.title":{"$regex":`${searchQuery}`,"$options":"i"}}]}]}
        let sort = {"name":1}
        dispatch(getCompanyData(query,sort,page))
      }
    }
    fetchData();

  }, [loc.pathname,searchQuery])

  useEffect(() => {
    
      let fetchData = async()=>{
        if(searchQuery===null){
          let query = {"$and":[{"address.city":{"$regex":`${location}`,"$options":"i"}},{"$or":[{"name":{"$regex":`${search?search:''}`,"$options":"i"}},{"title":{"$regex":`${search?search:''}`,"$options":"i"}}]}]}
          let sort = {"name":1}
          dispatch(getCompanyData(query,sort,page))
        }
        else{
          let query = {"$and":[{"address.city":{"$regex":`${location}`,"$options":"i"}},{"$or":[{"name":{"$regex":`${search?search:''}`,"$options":"i"}},{"title":{"$regex":`${search?search:''}`,"$options":"i"}}]},{"$or":[{"productCategory.name":{"$regex":`${searchQuery}`,"$options":"i"}},{"productCategory.title":{"$regex":`${searchQuery}`,"$options":"i"}}]}]}
          let sort = {"name":1}
          dispatch(getCompanyData(query,sort,page))
        }
        Window.scrollTo({top:0, behaviour:"smooth"})
      }
      const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
      };
      
    if(page!==1){
      fetchData();
      goToTop();
    }

  }, [page])

  useEffect(() => {
    const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
    };
    goToTop();
  }, [])
  
  

  return (
    <>
    <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
    <Box sx={{marginTop:"100px"}}>
    <Block1 companyData={companyData} page={page} setPage={setPage}/>
    </Box>
    <Content/>
    <Footer/>
    </>
  )
}

export default Company