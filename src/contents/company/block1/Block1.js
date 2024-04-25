import {  ArrowDropDown, Phone, Tune, WhatsApp } from '@mui/icons-material';
import {  Box, Button, Card,  CardMedia, Divider, Pagination, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';





const StyleToolbar = styled(Box)(({theme})=>({
backgroundColor:"#FFFFFF",
textAlign:"justify",
position:'relative',
paddingBottom:'80px'
}))

function Block1({companyData,page,setPage}) {
  const navigate = useNavigate();
  const [showNumber, setShowNumber] = useState(false);
  const location = window.location.pathname.split('/')[1]
  const search = window.location.pathname.split('/')[2].replace("%20"," ");
  const count = companyData.companyData && companyData.companyData.data && companyData.companyData.data.paginator && companyData.companyData.data.paginator.pageCount



  return (
    <StyleToolbar>
<Box sx={{  padding:"20px",}}>
  <Typography  sx={{paddingY:"10px",fontSize:{md:"24px",sm:"24px",xs:"16px"},fontWeight:"600"}} >{search} in {location}</Typography>
  <Box sx={{display:"flex",gap:"30px",flexWrap:"wrap"}}>
<Box>
  <Button sx={{border:"1px solid #000",padding:"5px 10px",backgroundColor:"#F7F7F7",borderRadius:"5px",color:"#000","&:hover":{
    backgroundColor:'#F7F7F7',color:"black"
  }}} endIcon={<ArrowDropDown/>} >Sort by</Button>
</Box>
<Box>
  <Button sx={{border:"1px solid #000",padding:"5px 10px",backgroundColor:"#F7F7F7",borderRadius:"5px",color:"#000","&:hover":{
    backgroundColor:'#F7F7F7',color:"black"
  }}} endIcon={<ArrowDropDown/>} >Ratings</Button>
</Box>
<Box>
  <Button sx={{border:"1px solid #000",padding:"5px 10px",backgroundColor:"#F7F7F7",borderRadius:"5px",color:"#000","&:hover":{
    backgroundColor:'#F7F7F7',color:"black"
  }}} startIcon={<Tune/>} >All Filters</Button>
</Box>
  </Box>
</Box>
{companyData.companyData && companyData.companyData.data && companyData.companyData.data.data && companyData.companyData.data.data.map((item,index)=>{
    return <Box key={index} sx={{paddingY:"30px"}}>
    <Card sx={{display:"flex",padding:"20px",gap:"30px",flexDirection:{md:"row",sm:"row",xs:'column'}}}>
        <CardMedia
          onClick={()=>{navigate(`/${location}/${item && item.name}/${item && item.id}`)}}
          component="img"
          sx={{ width:{md:180,sm:180,xs:"100%"},height:200,borderRadius:"5px",cursor:'pointer' }}
          image={`${item.logo}`}
          alt={`${item.name}`}
        />
          <Box >
            <Typography onClick={()=>{navigate(`/${location}/${item && item.name}/${item && item.id}`)}} sx={{fontSize:{md:"24px",sm:"24px",xs:"18px"},fontWeight:"600",cursor:'pointer','&:hover':{color:'#65cb7a'}}}>
                {item.name}
            </Typography>
            {/* <Box sx={{display:"flex",gap:"10px",paddingY:"10px",alignItems:"center",flexWrap:"wrap"}}>
              <Box>
                <Button sx={{backgroundColor:"#339D3A",color:"#fff",padding:"1px 3px",minWidth:"30px",borderRadius:"5px"}}>3.5</Button>
              </Box>
              <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
              </Stack>
              <Typography>15 Rating</Typography>
            </Box> */}
            <Typography sx={{fontSize:{md:"18px",sm:"18px",xs:"16px"},paddingY:'5px'}}>{item.title}  
            {/* <span style={{fontSize:"14px"}}>4.4km</span> */}
                 </Typography>
              {/* <Typography sx={{fontSize:"16px"}}><span style={{color:"#339D3A"}}>Open</span> Until 9:30 pm</Typography> */}
              <Typography sx={{fontSize:"16px"}}>{item && item.address && item.address[0] && item.address[0].locality},{item && item.address && item.address[0] && item.address[0].city},{item && item.address && item.address[0] && item.address[0].state},{item && item.address && item.address[0] && item.address[0].country}-{item && item.address && item.address[0] && item.address[0].zipcode}</Typography>
              <Box sx={{display:'flex',alignItems:'center',flexWrap:'wrap',gap:'10px',marginY:'10px'}}>
              {item.productCategory.slice(0,5).map((i,ind)=>{
                return <Box key={ind} onClick={()=>{navigate(`/${location}/${item && item.name}/${item && item.id}?category=${i && i.name}`)}} sx={{border:'1px solid #ccc',padding:'2px 15px',borderRadius:'10px',backgroundColor:'#eee',fontSize:'14px',cursor:'pointer'}}>
                    {i && i.name}
                </Box>
              })}
              </Box>
              <Box sx={{paddingY:"10px",display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"}}>
                <Box >
                  {(!showNumber || showNumber !== item.id) && <Button onClick={()=>{setShowNumber(`${item.id}`)}} startIcon={<Phone />} sx={{color:"#fff",backgroundColor:"green","&:hover":{
                   backgroundColor:"#339D3A"
                  }}}>Show Number</Button>}
                  {showNumber && showNumber===item.id && <a href={`tel:${item && item.owner && item.owner.phone}`} style={{textDecoration:'none'}}><Button onClick={()=>{setShowNumber(false)}} startIcon={<Phone />} sx={{color:"#fff",backgroundColor:"green","&:hover":{
                   backgroundColor:"#339D3A"
                  }}}>{item && item.owner && item.owner.phone}</Button></a>}
                </Box>
                <a href={`https://wa.me/${item && item.owner && item.owner.country_code}${item && item.owner && item.owner.phone}`} style={{textDecoration:'none'}}>
                  <Button startIcon={<WhatsApp sx={{backgroundColor:"#25D366",color:"#fff",}}  />} sx={{color:"#000",border:"1px solid #25D366",backgroundColor:"#fff","&:hover":{
                   backgroundColor:"#F7F7F7"
                  }}}>Chat</Button>
                </a>
              </Box>
          </Box>
        
    </Card>
  </Box>
})}
{companyData.companyData && companyData.companyData.data && companyData.companyData.data.data && <Stack sx={{display:"flex", justifyContent:"center",  width:"100%",height:"100px", alignItems:"center", position:"absolute", bottom:"0px"}} >
        <Divider/>
        <Typography variant='h5' >Page 1 of {count}</Typography>
      <Pagination count={count} page={page} color="error" size='large' sx={{display:"flex", justifyContent:"center", padding:"20px 0px 0px 0px"}} onChange={(e, value) =>setPage(value)} />
   
      </Stack>}


    </StyleToolbar>
  )
}

export default Block1;