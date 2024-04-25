import React from 'react'
// import Carousel from "react-material-ui-carousel"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./block1.css"
import {Card, useTheme,styled } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

const Item = styled(Card)(({theme}) => ({
 
  height: '220px',

  [theme.breakpoints.down('md')]: {
    height: '200px',
},
[theme.breakpoints.down('sm')]: {
  height: '180px',
},
}));
const Img = styled("img")(({theme}) => ({
  objectFit: "cover",
  width:"100%",
  height: "100%",
  // [theme.breakpoints.down('md')]: {
  //   height: '300px',
  // },
  // [theme.breakpoints.down('sm')]: {
  //   height: '150px!important',
  // },
  
  
}));
const Head = styled("h3")({
  color: 'black',  
  display:'none',
  fontSize: "16px",
  fontWeight:"500",
  paddingLeft:'15px',
  paddingTop:'10px',
  // textAlign:"center",
  marginBottom:"5px",
  "@media (max-width: 980px)": {
    fontSize: "20px",
    display:'block',
   },
  "@media (max-width: 600px)": {
     fontSize: "17px!important",
     display:'block',
     },
  
})

const PreviousBtn = (props) =>{
    
  const {onClick} = props;
   return (
         <div className='carousel1-Slick-prev'  onClick={onClick}>
          <ChevronLeftIcon className='iconLeft' style={{color:'white',zIndex:'2',fontSize:'2rem'}}/>
         </div>  
   )
}

const NextBtn = (props) =>{
   const {onClick} = props;
   return (
     <div  className='carousel1-Slick-next'  onClick={onClick}>
       <ChevronRightIcon className='iconRight' style={{color:'white',zIndex:'2',fontSize:'2rem'}} />
     </div>
   )
}

const PageLink = styled(Link)(({theme})=>({
    textDecoration:'none',
}))

export default function Block() {
const theme = useTheme();
    const settings1 = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
        prevArrow:<PreviousBtn />,
        nextArrow:<NextBtn />,
        // responsive: [
        //     {
        //       breakpoint: 960,
        //       settings: {
        //         arrows:false
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         arrows:false,
        //         centerPadding: "20px",
        //       },
        //     },
        // ] 
        
      };

  return (
    <>
    <Slider {...settings1}>
      <Item>
      <PageLink to={'/websites'}>
        <Img src='/images/category/home/block1/concriate mix.jpg' />
        {/* <Head>upto 40% off</Head> */}
      </PageLink>
      </Item>
    <Item>
      <PageLink to={'/apps'}>
      <Img src='/images/category/home/block1/home1.png' />
      {/* <Head>upto 40% off</Head> */}
    </PageLink>
    </Item>
    <Item>
    <PageLink to={'/digitalMarketing'}>
      <Img src='/images/category/home/block1/acservice.png' />
      {/* <Head>upto 40% off</Head> */}
    </PageLink>
    </Item>
    <Item>
    <PageLink to={'/graphicDesign'}>
      <Img src='/images/category/home/block1/home.png' />
      {/* <Head>upto 40% off</Head> */}
    </PageLink>
    </Item>
    {/* <Item>
    <PageLink to={'/videoEditing'}>
      <Img src='/images/category/carousel/construction5.jpg' />
      <Head>upto 40% off</Head>
     </PageLink>
     </Item> */}
    {/* <Item>  */}
     {/* <PageLink to={'/websites'}>
      <Img src='/images/category/carousel/construction6.jpg' />
      <Head>upto 40% off</Head>
    </PageLink>
    </Item>
     <Item>
    <PageLink to={'/websites'}>
      <Img src='/images/category/carousel/construction7.jpg' />
      <Head>upto 40% off</Head>
    </PageLink> */}
    {/* </Item> */}
  </Slider>
  </>
  )
}
