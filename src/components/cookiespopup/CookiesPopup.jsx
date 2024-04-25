import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";

function CookiesPopup() {
  const [showPopup, setShowPopup] = useState(true);

  function acceptCookies() {
    // Set a cookie to remember user's choice
    document.cookie = "acceptedCookies=true; max-age=31536000; path=/";
    setShowPopup(false);
  }

  return (
    <>
      {showPopup && (
        <Box className="cookie-popup" sx={{position:"fixed", width:"50%", height:"40%", display:"flex", justifyContent:"space-between", alignItems:"center", bottom:"0", background:"#fff"}} >
            <Box>

          <Typography>We use cookies to enhance your experience on our website.</Typography>
       
          <Typography>Here are some examples of how we use cookies:</Typography>
          {/* <List>
            <ListItem>Remembering your preferences, such as your language or currency</ListItem>
            <ListItem>Analyzing how users interact with our website to improve performance and user experience</ListItem>
            <ListItem>Showing you more relevant ads based on your browsing behavior</ListItem>
          </List> */}
          <Typography>By using our website, you consent to the use of cookies as described above.</Typography>
            </Box>
          <Button onClick={acceptCookies}>Accept all cookies</Button>
        </Box>
      )}
    </>
  );
}

export default CookiesPopup;