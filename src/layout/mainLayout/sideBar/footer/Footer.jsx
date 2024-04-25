import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { CgLogOut } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';

export default function Footer() {
  const user =[];
  const dispatch = useDispatch();

  const handleLogout = () => {
    // logout();
    // Cookies.remove('authCookie', { path: '/' });
    // dispatch(logOut());
    // dispatch(addProduct({"products":[],"id":null}));
    // dispatch(clearOrders());
    // localStorage.clear();
    // router.push("/")
    // window.location.reload();
    
  }
  return (
    <Box >
      {((user && user.currentUser === null) || (user && user.currentUser && user.currentUser.data && user.currentUser.data === null)) ? null : <List>
      <ListItem sx={{alignItems:'center',gap:'8px'}} button onClick={handleLogout}>
                <CgLogOut style={{fontSize:'25px'}}/>
              <ListItemText sx={{">span":{fontSize:'17px'}}} primary="Logout" />
            </ListItem> 
      </List>}
      <Box sx={{padding:'0 0 15px 15px'}}>
          <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
              <Typography>privacy policy</Typography>
              <Typography>t&c</Typography>
          </Box>
          <Typography>v1.0.0</Typography>
      </Box>
    </Box>
  )
}
