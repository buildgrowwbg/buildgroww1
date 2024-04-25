
import { styled, TextField, Box, List, ListItem, ListItemText, Divider,useTheme } from '@mui/material'
import React,{useRef, useState} from 'react'

import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
// import { ProductsList } from '../../../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
// import { addSearchProduct, clearSearchlist, updateQuery } from '../../../../redux/SearchRedux';
import HistoryIcon from '@mui/icons-material/History';

const Search = styled(Box)(({theme}) => ({

    // border-radius: 5px;
    // margin-left: 10px;
    width: '55%',
    backgroundColor: theme.colors.alpha.white[100],
    display: 'flex',
    position:'relative',
    [theme.breakpoints.down('sm')]: {
        width: '98vw',
        position: 'absolute',
        top : '80px',
        right: '-21.5px',

    }
}))
;

const SearchField = styled(TextField)(({theme}) => ({
    height:'36px',
    // padding: 8.5px 21px;
    // fontSize: 'unset',
    // padding-left: 20px,
    width:'100%' ,
}),
);

const SearchList = styled(List)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        width: '98vw',
    }
}),
);
const SearchLink = styled(Link)(({theme}) => ({
    display:'none',
    [theme.breakpoints.down('sm')]: {
        display:'block',
        width: '100%',
    }
}),
);

  const StyledListItem = styled(ListItem)`
    padding: 2px 10px;
  `;
  

export default function SearchBar(props) {
    const [showSearch, setShowSearch] = useState('none');
    const [list, setList] = useState(null);
    const theme = useTheme();
    const navigate = useNavigate();
    const catMenu = useRef(null);
    const dispatch = useDispatch();
    const searchProducts = useSelector((state)=>state.search);
    

    const searchHandler = ()=>{
        setShowSearch('flex');
    }
    const handleEnter = (e)=>{
        if(e.target.value!=="" && e.key ==='Enter'){
            // dispatch(addSearchProduct({key:e.target.value,value:list}));
            // dispatch(updateQuery(e.target.value));
            // if(window.location.pathname!=='/products'){
            //     navigate('/products');
            // }
        } 
    }
    const handleChange = async(e)=>{
        if(e.target.value!==""){
            // const query = {"title.longTitle":{"$regex":`${e.target.value}`,"$options":"i"},}
            // const sort = {"name":1}
            // const res = await ProductsList(query,sort);
            // if(res?.data?.status==='SUCCESS'){
            //     setList(res.data.data);
                
            //     // dispatch(clearSearchlist())
            // }
            // else{
            //     setList(null);
            // }
        }
        else{
            setList(null);
        } 
    }
    
    const closeOpenMenus = (e)=>{
        if(catMenu.current && showSearch && !catMenu.current.contains(e.target)){
            setShowSearch('none')
        }
    }
    document.addEventListener('mousedown',closeOpenMenus);
  return (
   <Search sx={{height:36, display:{sm:'flex',xs:'none'}}}>
        <SearchIcon sx={{ marginTop:'6px',marginLeft:'10px', color: `${theme.header.background}`}}/>
        <SearchLink to={'/search'} style={{textDecoration:'none'}}>
            <SearchField placeholder='search anything... ' sx={{ "& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
        padding: "8px",
        },}} onClick={searchHandler} ref={catMenu}/>
    </SearchLink>
    <SearchField type="text" placeholder='search anything... ' sx={{display:{sm:'block',xs:'none'},"& fieldset": { border: 'none' }, '& .MuiOutlinedInput-input': {
      padding: "8px",width:'100%'
    },'& .MuiOutlinedInput-root':{width:'100%'}}} onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleEnter(e)} onClick={searchHandler} ref={catMenu}/>
        <SearchList color='secondary' 
        sx={{display: {sm:showSearch,xs:'none'},
            flexDirection:'column', 
            marginTop: '36px',
            bgcolor: '#fff',
            position: 'absolute',
            left:'0',
            right:'0',
            zIndex: "100"}} component="nav" aria-label="mailbox folders" ref={catMenu}>
            {list===null?null:
            list.data.map((item,index)=>(
                <StyledListItem key={index} sx={{gap:'15px'}} onClick={()=>{
                    // dispatch(updateQuery(item?.title?.shortTitle));
                    if(window.location.pathname!=='/products'){
                        navigate('/products');
                    }
                  setShowSearch('none');
                }} button>
                    <img style={{width:'50px',height:'50px'}} src={`${item.productImages[0].path}`} alt='product'/>
                    <ListItemText primary={`${item?.title?.shortTitle}`} />
                </StyledListItem>
            ))}            
            <Divider />
            {searchProducts.searchList.map((item,index)=>(
                <StyledListItem key={index} onClick={()=>{
                    // dispatch(updateQuery(item.key));
                    if(window.location.pathname!=='/products'){
                        navigate('/products');
                    }
                  setShowSearch('none');}} sx={{gap:'10px'}} button divider>
                    <HistoryIcon/>
                    <ListItemText primary={`${item.key}`} />
                </StyledListItem>
            ))}
            {/* <StyledListItem button>
                <ListItemText primary="Trash" />
            </StyledListItem>
            <Divider light />
            <StyledListItem button>
                <ListItemText primary="Spam" />
            </StyledListItem> */}
        </SearchList>

    </Search>
  )
}
