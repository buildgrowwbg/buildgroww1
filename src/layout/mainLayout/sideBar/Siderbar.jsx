import { Close } from '@mui/icons-material';
import { Box, Divider, Stack, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import Header from './header/Header';
import MenuSidebar from './menuSidebar/MenuSidebar';
import Footer from './footer/Footer';

const SideBar = styled(Box)(({ theme }) => ({
    display:'flex',
    flexDirection:'column',
    height: '100%',
    alignItems: 'center',
    gap: '20px',
    // transition: 'all 5s!important',
    background: theme.sidebar.background,
    [theme.breakpoints.down('md')]: {
        width: '50vw',
    },
    [theme.breakpoints.down('sm')]: {
        width: '70vw',
    }
}));

export default function({setOpen,setLogin}){
  return (
    <>
    <SideBar>
        <Header setOpen={setOpen} setLogin={setLogin} />
        {/* <Divider sx={{height:'1px',width:'100%',color:`${theme.sidebar.textColor}`}}/> */}
        <MenuSidebar/>
        <Stack sx={{flex:'2',width:'100%',}}>
            <Divider/>
            <Footer/>
        </Stack>
    </SideBar>
    </>
  )
}
