import { Call, FavoriteBorder, FavoriteOutlined, Message, ThumbUp } from '@mui/icons-material'
import { Box, Button, Pagination, Rating, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../redux/store/store';
import { useState } from 'react';
import { useEffect } from 'react';
import { authApi } from '../../mocks/auth';
import Block3 from './Block3';

const Block1 = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const category = location.pathname.split("/")[2]
  const {user} = useSelector((state)=> state.auth)
  console.log(category)
  const dispatch = useDispatch();
  const [ users,setUsers] = useState()
  const[filters,setFilters] = useState({"workCategory": category})
  const[page,setPage] = useState(1)
 const [limit,setLimit] = useState(10)
 const[skeletonState,setSkeletonState] = useState(false)
 
  const fetchUserList = async() => {
    setSkeletonState(true)
    let result = await authApi.getUserList(page,limit,filters);
    console.log(result)
    if(result){
      setSkeletonState(false)
      setUsers(result)
    }
    else
    return false
  }

  
  useEffect(()=>{
    fetchUserList()
  },[page])
  console.log(users)

  const handleChangePage = (event,value) =>{
    console.log(value);
    setPage(value);
  }
  console.log(users &&  users.data && users.data.data && users.data.data )
  return (
    <>
        <Box sx={{display:{md:'block',sm:'block',xs:'none'}}}>
      <Box sx={{width:'100%',height:'200px',backgroundImage:`url(${'https://img.freepik.com/free-photo/illustration-geometric-shapes-with-neon-laser-lights-great-backgrounds-wallpapers_181624-32746.jpg?size=626&ext=jpg&ga=GA1.2.669828460.1689154101&semt=ais'})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        
      </Box>
{/* 
      <Box sx={{display:Object.keys(users &&  users.data && users.data.data && users.data.data  ).length !== 0 ? 'none':'flex',justifyContent:'center',alignItems:'center',height:'300px'}}>
        <Block3/>
      </Box> */}



{skeletonState ?
            <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'70px',gap:'40px'}}>
              {users && users.data && users.data.data && users.data.data.length>0 && users.data.data.map((item,index)=>(
                  <Box sx={{width:{md:'70%',sm:'90%'},border:'1px solid rgba(0,0,0,0.2)',height:'300px',padding:'20px',display:'flex',gap:{md:'20px', sm:'30px'}}}>
                    <Box sx={{display:'flex',gap:'40px'}}>
                    <Skeleton variant='rectengular' sx={{width:'200px',height:'200px'}}/>
                    <Box sx={{display:'flex',flexDirection:'column',gap:'25px'}}>
                    <Skeleton variant='rectengular' sx={{width:'250px',height:'20px'}}/>
                    <Skeleton variant='rectengular' sx={{width:'200px',height:'20px'}}/>
                    <Skeleton variant='rectengular' sx={{width:'150px',height:'20px'}}/>
                    <Skeleton variant='rectengular' sx={{width:'150px',height:'20px'}}/>
                    <Box sx={{display:'flex',gap:'20px'}}>
                    <Skeleton variant='rectengular' sx={{width:'200px',height:'30px'}}/>
                    <Skeleton variant='rectengular' sx={{width:'200px',height:'30px'}}/>
                      </Box>
                    </Box>
                    </Box>

                    </Box>
              ))}
              </Box>
:
      <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'70px',gap:'40px'}}>


        
      

    {users && users.data && users.data.data && users.data.data.length>0 && users.data.data.map((item,index)=>(

        <Box key={index} sx={{width:{md:'70%',sm:'90%'},border:'1px solid rgba(0,0,0,0.2)',height:'300px',padding:'20px',boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',display:'flex',gap:{md:'20px', sm:'30px'}}}>

            <Box sx={{width:{md:'25%',sm:'20%'},display:'flex',alignItems:'center',height:'100%'}}>
                <img src={item.avatar} style={{objectFit:'cover',width:'250px',height:'250px'}} alt='Upload Image'/>
            </Box>

            <Box sx={{width:{md:'70%',sm:'75%'},display:'flex',flexDirection:'column',gap:'10px'}}>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
              <Typography sx={{fontSize:'25px',fontWeight:'600',color:'black',display:'flex',alignItems:'center',gap:'10px'}}><ThumbUp/>{item.name}</Typography>
              <FavoriteBorder/>
                </Box>

                <Box sx={{display:'flex',gap:'20px'}}>
                    <Box sx={{display:'flex',gap:'10px'}}>
                        <Typography sx={{fontSize:'18px',fontWeight:'600',background:'green',color:'black',padding:'0px 5px',borderRadius:'5px'}}>3.8</Typography>
                        <Rating value={3} sx={{color:'orange'}}/>
                    </Box>
                    <Typography sx={{fontWeight:'500'}}>200 Ratings</Typography>
                </Box>

            <Typography sx={{fontWeight:'500',fontSize:'18px'}}>User Address</Typography>

            <Typography sx={{fontWeight:'500',fontSize:'18px'}}>Fees:₹500 per day</Typography>

            <Typography><Message/>Comments</Typography>

            <Box sx={{display:'flex',gap:'20px'}}>
               <Button variant='contained' sx={{fontSize:'18px',background:'green',borderRadius:'3px','&:hover':{background:'green'}}}><Call/>{item.phone}</Button>
               <Button variant='outlined' sx={{borderRadius:'3px'}}>Book Appointment</Button>
            </Box >
            </Box>


        </Box>


))}




      </Box>
}
<Box sx={{margin:'50px 0px' ,display:'flex',justifyContent:'center'}}>
<Pagination count={users &&  users.data && users.data.paginator && users.data.paginator.pageCount} page={page} onChange={handleChangePage}/>
</Box>
      </Box>
    </>
  )
}

export default Block1
