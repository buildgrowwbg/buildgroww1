import React from 'react'
import {
  Box,
      Divider,
      List,
      ListItem,
      ListItemText,
    } from "@mui/material";
    import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
    import FilterFramesIcon from '@mui/icons-material/FilterFrames';
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import AccountCircleIcon from '@mui/icons-material/AccountCircle';
    import PhoneIcon from '@mui/icons-material/Phone';
    import ContactPageIcon from '@mui/icons-material/ContactPage';
    import GroupsIcon from '@mui/icons-material/Groups';
    import EditIcon from '@mui/icons-material/Edit';
    import PlumbingIcon from '@mui/icons-material/Plumbing';
    import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
    import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import { Link, useNavigate } from 'react-router-dom';


export default function MenuSidebar() {

  const navigate = useNavigate();
  return (
    <Box sx={{fontFamily:'Roboto',display:'flex',flexDirection:'column',gap:'5px'}}>
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,fontFamily:'Roboto'}}>Profile</Box>
    <List sx={{width:'100%',flex:'9',padding:'0',fontFamily:'Roboto'}} component="nav" aria-label="mailbox folders">
        {/* <ListItem button onClick={()=>{navigate('/services-maintenance')}}>
          <SubscriptionsIcon/>
          <ListItemText primary="Services" />
        </ListItem>
        <Divider />
        <ListItem button>
          <GridViewRoundedIcon/>
          <ListItemText primary="All Categories" />
        </ListItem>
        <ListItem button onClick={()=>{navigate('/websites')}}>
          <CategoryIcon/>
          <ListItemText primary="Trending Websites" />
        </ListItem>
        <ListItem button>
          <MoreIcon/>
          <ListItemText primary="More on TechPyro" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <LanguageIcon/>
          <ListItemText primary="Choose Language" />
        </ListItem>
        <Divider light /> */}
        <ListItem button>
          <AccountCircleIcon/>
          <ListItemText onClick={()=>navigate('/account')} primary="My Account" />
        </ListItem>
        <Divider/>
        <ListItem button>
          <FilterFramesIcon/>
          <ListItemText primary="My Orders" />
        </ListItem>
        <Divider/>
        <ListItem button onClick={()=>{navigate('/cart')}}>
          <ShoppingCartIcon/>
          <ListItemText primary="My Cart" />
        </ListItem>
        {/* <Divider/>
        <ListItem button>
          <FavoriteIcon/>
          <ListItemText primary="My Wishlist" />
        </ListItem>
        <Divider/>
        <ListItem button>
          <NotificationsIcon/>
          <ListItemText primary="My Notifications" />
        </ListItem> */}
        {/* <Divider/> */}
      </List> 
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,}}>Services</Box>
    <List sx={{width:'100%',flex:'9',padding:'0'}} component="nav" aria-label="mailbox folders">
        <ListItem button onClick={()=>{navigate('/')}}>
          <HomeRepairServiceIcon/>
          <ListItemText primary="Home Service" />
        </ListItem>
        <Divider/>
        <ListItem button onClick={()=>{navigate('/')}}>
          <PlumbingIcon/>
          <ListItemText primary="Plumbing Service" />
        </ListItem>
        <ListItem button onClick={()=>{navigate('/')}}>
          <ElectricalServicesIcon/>
          <ListItemText primary="Electrical Service" />
        </ListItem>
        <ListItem button onClick={()=>{navigate('/')}}>
          <FormatPaintIcon/>
          <ListItemText primary="Colouring Service" />
        </ListItem>
        
      </List>
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,}}>Contact</Box>
    <List sx={{width:'100%',flex:'9',padding:'0'}} component="nav" aria-label="mailbox folders">
        <a href="tel:9559613375" style={{textDecoration:'none'}}>
        <ListItem button>
          <PhoneIcon/>
          <ListItemText primaryTypographyProps={{fontSize:'18px',fontWeight:600}} primary="+91-9559613375" />
        </ListItem>
        </a>
        <Divider/>
        <a href='/contact' style={{textDecoration:'none'}}>
        <ListItem button>
          <ContactPageIcon/>
          <ListItemText primary="Contact Us" />
        </ListItem>
        </a>
      </List>
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,}}>Company</Box>
    <List sx={{width:'100%',flex:'9',padding:'0'}} component="nav" aria-label="mailbox folders">
      <a href='/about' style={{textDecoration:'none'}}>
        <ListItem button>
          <GroupsIcon/>
          <ListItemText primary="About Us" />
        </ListItem>
        </a>
        {/* <Divider/>
        <a href='https://blog.techpyro.com' style={{textDecoration:'none'}}>
        <ListItem button>
          <EditIcon/>
          <ListItemText primary="Blogs" />
        </ListItem>
        </a> */}
      </List>
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,}}>Help</Box>
    <List sx={{width:'100%',padding:'0'}} component="nav" aria-label="mailbox folders">
        <ListItem button>
          {/* <PhoneIcon/> */}
          <ListItemText primary="Help Center" />
        </ListItem>
        <Divider/>
        <ListItem button>
          {/* <ContactPageIcon/> */}
          <ListItemText primary="Legal" />
        </ListItem>
      </List>
    </Box>
  )
}
