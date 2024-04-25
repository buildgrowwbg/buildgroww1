import {
  styled,
  Badge,
  Button,
  Box,
  Divider,
  List,
  useTheme,
  ListItem,
  ListItemText,
  Typography,
  Link,
} from "@mui/material";
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {RxDotFilled} from "react-icons/rx";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { CgLogOut } from "react-icons/cg";
import { HiShoppingBag } from "react-icons/hi";
// import { FcPackage,FcAbout } from "react-icons/fc";
// import { MdHelp, MdContactPage} from "react-icons/md";
// import { FiPackage } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
 
import { useNavigate } from "react-router-dom";
 
import Cookies from "js-cookie";

const CustomButton = styled(Box)`
  // width: 19%;
  height: 64px;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
`;

const MoreButton = styled(Box)(({theme}) => ({
    // width: '19%',
    height: '64px',
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // [theme.breakpoints.down('sm')]: {
    //     display: 'none'
    // },
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const LoginButton = styled(Button)(({theme}) => ({
    margin:'14px 0',
    borderRadius:'5px',
  
   background: theme.header.textColor,
   color: theme.header.background,
    // width: '100%',
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
      background: theme.header.background,
      color: theme.header.textColor,
      marginRight: '-50px',
      cursor:'none'
  },

    [theme.breakpoints.down('sm')]: {
      background: theme.header.background,
      color: theme.header.textColor,
      marginRight: '-40px',
      cursor:'none'
  },

  "@media (max-width: 500px)": {
    background: theme.header.background,
    color: theme.header.textColor,
    marginRight: '-30px',
    cursor:'none'
  },

}));

export default function NavButton(props) {
//   const [showLogin, setShowLogin] = useState("none");
//   const [showMore, setShowMore] = useState("none");
//   onMouseOver={() => setShowLogin("flex")} onMouseOut={() => setShowLogin("none")}
const theme = useTheme();
const user = useSelector();
const navigate = useNavigate();
const dispatch = useDispatch();

const handleLogout = () => {
  // logout();
  // dispatch(logOut());
  //   Cookies.remove('authCookie');
  //   localStorage.clear();
  //   dispatch(addProduct({}));
  //   dispatch(clearOrders());
  //   navigate("/")
  //   window.location.reload();
  
}

  return (
    <CustomButton >
      <Box
        sx={{
          height: "64px",
          // alignItems: 'center',
          cursor: "pointer",
          display: "flex",
          position: "realative",
          "&:hover .MuiBox-root": { display: { md: "flex" } },
          "& Button:hover": {
            backgroundColor: { md: `${theme.header.textColor}` },
          },
        }}
      >
        {user.currentUser === null || user.currentUser.data === null ? (
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <LoginButton
              sx={{
                padding:'6px 9px',
                fontSize: { xs: "17px", md: "14px" },
                letterSpacing: "0.8px",
                fontWeight: { xs: 500, md: 700 },
              }}
            >
              Login
            </LoginButton>
          </Link>
        ) : (
          <Typography
            sx={{
              fontSize: {sm:"15px",xs:'14px'},
              display: "flex",
              alignItems: "center",
              color: `${theme.header.textColor}`,
              height: "64px",
            }}
          >
            <RxDotFilled
              style={{
                color: `${theme.colors.success.main}`,
                fontSize: "22px",
              }}
            />{" "}
            {user.currentUser?.data?.name !== undefined && user.currentUser?.data?.name !== null 
              ? user.currentUser?.data?.name?.split(' ').slice(0,1)
               : "TechPyro User"}
          </Typography>
        )}
        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            minWidth:'180px',
            maxWidth: "230px",
            backgroundColor: `${theme.header.textColor}`,
            position: "absolute",
            color: `${theme.header.textColor}`,
            margin: "64px 0 0 -71px",
            zIndex: "100",
            boxShadow: `${theme.header.boxShadow}`,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "14px",
              backgroundColor: "#FFFFFF",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
            }}
          ></Box>
          <List component="nav" aria-label="mailbox folders">
          {user.currentUser === null || (user.currentUser.data !==undefined && user.currentUser.data === null) ?<ListItem sx={{alignItems:'center',gap:'5px',padding:'8px'}} button onClick={()=>{navigate('/signup')}}>
                {/* <CgLogOut style={{fontSize:'25px'}}/>   */}
              <ListItemText sx={{">span":{fontWeight:500,fontSize:'16px'}}} primary="New Customer? " />
              <Link to={'/signup'} style={{textDecoration:'none'}}>Sign Up</Link>
            </ListItem> : null }
            <ListItem sx={{alignItems:'center',gap:'5px',paddingLeft:'10px'}} button onClick={()=>{user.currentUser === null || (user.currentUser.data !==undefined && user.currentUser.data === null) ? navigate('/login'): navigate('/my-account/profile')}}>
              <AccountCircleIcon sx={{fontSize:'22px'}}/>
              <ListItemText primary="My profile" />
            </ListItem>
            <Divider />
            <ListItem sx={{alignItems:'center',gap:'8px'}} button divider onClick={()=>{user.currentUser === null || (user.currentUser.data !==undefined && user.currentUser.data === null) ? navigate('/login'): navigate('/orders')}}>
              <HiShoppingBag style={{fontSize:'22px'}}/>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem sx={{alignItems:'center',gap:'5px',paddingLeft:'10px'}} button onClick={()=>{user.currentUser === null || (user.currentUser.data !==undefined && user.currentUser.data === null) ? navigate('/login'): navigate('/')}}>
              <NotificationsIcon sx={{fontSize:'22px'}}/>
              <ListItemText primary="Notifications" />
            </ListItem>
            <Divider light />
           {user.currentUser === null || (user.currentUser.data !==undefined && user.currentUser.data === null) ? null : <ListItem sx={{alignItems:'center',gap:'8px'}} button onClick={handleLogout}>
                <CgLogOut style={{fontSize:'24px'}}/>
              <ListItemText primary="Logout" />
            </ListItem> }
          </List>
        </Box>
      </Box>
      <MoreButton sx={{display:'none',paddingTop:'18px' ,cursor:'pointer',"&:hover .MuiBox-root": { display:'flex'}, "&:hover .MuiSvgIcon-root": { transform: 'rotate(180deg)'}}}>
        <Typography sx={{fontSize:'18px'}}>More</Typography>
        <Badge>
          <ExpandMoreIcon />
        </Badge>
        <Box
          sx={{
            display: 'none',
            flexDirection: "column",
            width: "180px",
            bgcolor: "background.paper",
            position: "absolute",
            color: "red",
            margin: "45px 0 0 -55px",
            zIndex: "100"
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "14px",
              backgroundColor: "#FFFFFF",
              clipPath: "polygon(50% 0, 46% 100%, 54% 100%)",
              margin: "-13px 0 0 0",
            }}
          ></Box>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Box>
      </MoreButton>
    </CustomButton>
  );
}
