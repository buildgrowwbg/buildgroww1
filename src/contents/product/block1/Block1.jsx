import { Close, Phone, Reply, WhatsApp } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, Rating, Stack, Typography, styled } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const StyleToolbar = styled(Box)(({theme})=>({
    padding:"30px",
  textAlign:"justify",
  backgroundColor:'#fff',
  [theme.breakpoints.down("md")]:{
    padding:'10px'
  }
  }))
function Block1() {
  const catMenu = useRef(null);
  const product= useSelector((state)=>state.product)
  const {companyData} = useSelector(state => state.company)
  const [showNumber, setShowNumber] = useState(false)
  const [open, setOpen] = useState(false)

  const shop = companyData && companyData.data;
  console.log(shop);

  const closeOpenMenus = (e)=>{
    if(catMenu.current && open && !catMenu.current.contains(e.target)){
        setOpen(false)
    }
}
document.addEventListener('mousedown',closeOpenMenus);

  const handleOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }

  const currentUrl = window.location.href;

  return (
    <StyleToolbar>
<Box sx={{paddingY:"30px"}}>
  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px",gap:"30px",flexDirection:{md:"row",sm:"row",xs:'column'}}}>
 
        <Box >
          <Typography sx={{fontSize:{md:"24px",sm:"24px",xs:"20px"},fontWeight:"600",}}>
          {shop && shop.name}
{/* {product.length>0&&product.data[0].shop.name} */}
          </Typography>
          <Box sx={{display:"flex",gap:"10px",paddingY:"10px",alignItems:"center",flexWrap:"wrap"}}>
            <Box>
              <Button sx={{backgroundColor:"#339D3A",color:"#fff",padding:"1px 3px",minWidth:"30px",borderRadius:"5px"}}>3.5</Button>
            </Box>
            <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
            </Stack>
            <Typography>15 Rating</Typography>
          </Box>
          <Typography sx={{fontSize:"18px",paddingY:'5px'}}>{shop && shop?.title}
</Typography>
            <Box sx={{paddingY:"10px",display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"}}>
              <Box >
              {(!showNumber) && <Button onClick={()=>{setShowNumber(true)}} startIcon={<Phone />} sx={{color:"#fff",backgroundColor:"green","&:hover":{
                   backgroundColor:"#339D3A"
                  }}}>Show Number</Button>}
                  {showNumber && <a href={`tel:${shop && shop.owner && shop.owner.phone}`} style={{textDecoration:'none'}}><Button onClick={()=>{setShowNumber(false)}} startIcon={<Phone />} sx={{color:"#fff",backgroundColor:"green","&:hover":{
                   backgroundColor:"#339D3A"
                  }}}>{shop && shop.owner && shop.owner.phone}</Button></a>}
              </Box>
              <a href={`https://wa.me/${shop && shop.owner && shop.owner.country_code}${shop && shop.owner && shop.owner.phone}`} style={{textDecoration:'none'}}>
                  <Button startIcon={<WhatsApp sx={{backgroundColor:"#25D366",color:"#fff",}}  />} sx={{color:"#000",border:"1px solid #25D366",backgroundColor:"#fff","&:hover":{
                   backgroundColor:"#F7F7F7"
                  }}}>Chat</Button>
                </a>
              <Box sx={{ display: 'flex', alignItems: "center", gap: "10px", position:"relative" }}>
                  <Button onClick={handleOpen} startIcon={<Reply sx={{rotate:"360deg"}}/>} sx={{color:"#000",border:"1px solid #25D366",backgroundColor:"#fff","&:hover":{
                   backgroundColor:"#F7F7F7"
                  }}}>Share</Button>
                    <Box sx={{width:"300px", zIndex:1,height:"230px", background:"#fff", boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)", position:"absolute", bottom:0, right:"0", padding:"10px" , borderRadius:"8px"}} display={open ? "block" : "none"}>
                    <Typography variant='h5' sx={{fontSize:"12px", padding:"5px 10px 15px 10px ", display:"flex", justifyContent:"space-between",textAlign:"center"}}  > Share with your friends and family to help grow online <Close onClick={handleClose} sx={{color:"gray", padding:"0px", cursor:"pointer"}} /> </Typography>
                
                <Box sx={{display:"flex", gap:"20px", justifyContent:"center", alignItems:"center",flexWrap:"wrap",width:"100%"}}  ref={catMenu} >

            <FacebookShareButton
              url={`${currentUrl}`}
              quote={"Build Groww | One-Stop Platform for All Your Home Improvement Needs!"}
              hashtag='#home#brick#worker#builder'
              >
              <FacebookIcon size={40} round={true} />
              <Typography>Facebook</Typography>
            </FacebookShareButton>
            
            <WhatsappShareButton
              url={`${currentUrl}`}
              title={"Build Groww | One-Stop Platform for All Your Home Improvement Needs!"}
              separator={'  '}
              >
              <WhatsappIcon size={40} round={true} />
              <Typography>Whatsapp</Typography>
            </WhatsappShareButton>

            <EmailShareButton
              url={`${currentUrl}`}
              subject={"Build Groww | One-Stop Platform for All Your Home Improvement Needs!"}
              body={"At Build & Grow, we have designed a revolutionary website that connects sellers, buyers, and skilled workers, creating a seamless ecosystem for all your home improvement requirements. Whether you are a homeowner looking to spruce up your living space or a professional seeking new opportunities, we have got you covered."}
              >
              <EmailIcon size={40} round={true} />
              <Typography>Email</Typography>
            </EmailShareButton>

            <LinkedinShareButton
              url={`${currentUrl}`}
              title={"Build Groww | One-Stop Platform for All Your Home Improvement Needs!"}
              summary={'At Build & Grow, we have designed a revolutionary website that connects sellers, buyers, and skilled workers, creating a seamless ecosystem for all your home improvement requirements. Whether you are a homeowner looking to spruce up your living space or a professional seeking new opportunities, we have got you covered.'}
              source='Techpyro.com'
              >
              <LinkedinIcon size={40} round={true} />
              <Typography>LinkedIn</Typography>
            </LinkedinShareButton>

            <PinterestShareButton
              url={`${currentUrl}`}
              media={"https://buildgroww.com"}
            description='At Build & Grow, we have designed a revolutionary website that connects sellers, buyers, and skilled
            workers, creating a seamless ecosystem for all your home improvement requirements. Whether you are a homeowner looking to spruce up your living space or a professional seeking new opportunities, we have got you covered.'
              >
              <PinterestIcon size={40} round={true} />
              <Typography>PinInterest</Typography>
            </PinterestShareButton>
            
            <TwitterShareButton
              url={`${currentUrl}`}
              title={"Build Groww | One-Stop Platform for All Your Home Improvement Needs!"}
              hashtag={['#home','#bricks','#worker','#builder']}

              >
              <TwitterIcon size={40} round={true} />
              <Typography>Twitter</Typography>
            </TwitterShareButton>

            
            <TelegramShareButton
              url={`${currentUrl}`}
              title={"Build Groww | One-Stop Platform for All Your Home Improvement Needs!"}
              >
              <TelegramIcon size={40} round={true} />
              <Typography>Telegram</Typography>
            </TelegramShareButton>
              </Box>
              </Box>
              </Box>
            </Box>
        </Box>
        <CardMedia
            component="img"
            sx={{ width:{md:400,sm:400,xs:"100%"},height:200,borderRadius:"5px" }}
            image={shop && shop.logo}

            alt="Live from space album cover"
          />
  </Box>
  
</Box>
    </StyleToolbar>
  )
}

export default Block1