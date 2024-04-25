import {
    Box,
    Card,
    Checkbox,
    styled,
    useTheme,
    Button,
    Fab,
    Dialog,
    DialogActions,
    DialogTitle,
    Zoom,
    Backdrop,
    CircularProgress,
    Divider,
    Slide,
    FormControlLabel,
    Typography,
  } from "@mui/material";
  import { CurrencyRupee } from "@mui/icons-material";
  import { FaShippingFast } from "react-icons/fa";
  import React, { useEffect, useState } from "react";
  import AddIcon from "@mui/icons-material/Add";
  import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
  import Favorite from "@mui/icons-material/Favorite";
  import DeleteIcon from "@mui/icons-material/Delete";
  import IconButton from "@mui/material/IconButton";
  import Tooltip from "@mui/material/Tooltip";
  import {
    cartListProduct,
    deleteCart,
    updateCartProduct,
  } from "../../../../redux/apiCalls";
  import { useDispatch, useSelector } from "react-redux";
  import { selectUser } from "../../../../redux/userRedux";
  import {
    addAddon,
    cartValue,
    decreaseQty,
    increaseQty,
    removeAddon,
    removeItem,
  } from "../../../../redux/cartRedux";
  import { useSnackbar } from "notistack";
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const Image = styled("img")(({ theme }) => ({
    width: "50%",
    height: "100%",
    objectFit: "cover",
    "@media (max-width: 960px)": {
      width: "100%",
      height: "50%",
    },
  }));

  const Paragraph = styled(Typography)(({theme})=>({
    fontFamily: 'Roboto'
}))
  
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  
  export default function PackageItem({ index, pack }) {
    const theme = useTheme();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const cart = useSelector(cartValue);
    const addon = useSelector((state)=>state.addon)
  
    const [value, setValue] = useState(pack?.products[0]?.qty);
    const [click, setClick] = useState(0);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [addOn, setAddOn] = useState([...pack.products[0].addonId]);
  
    const { enqueueSnackbar } = useSnackbar();
  
    const date = new Date();
  
    useEffect(() => {
      async function fetchdata() {
        if (click) {
          // setLoading(true);
          const updateList = {
            products: [
              {
                qty: cart.products?.data?.data[index]?.products[0].qty,
                packageId:
                  cart.products?.data?.data[index]?.products[0].packageId.id,
                addonId: [
                  ...cart.products?.data?.data[index]?.products[0].addonId,
                ],
              },
            ],
          };
          const resUpdate = await updateCartProduct(pack.id, updateList);
          // const resGet = await cartListProduct(query,sort,dispatch);
          setLoading(false);
          if (resUpdate?.data?.status === "SUCCESS") {
            enqueueSnackbar("Cart Product updated successfully ", {
              variant: "success",
              anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              },
              TransitionComponent: Zoom,
            });
          } else {
            enqueueSnackbar("Some error occourd ", {
              variant: "error",
              anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              },
              TransitionComponent: Zoom,
            });
          }
        }
      }
      fetchdata();
      setClick(0);
    }, [click]); // eslint-disable-line react-hooks/exhaustive-deps
  
    const handlePlus = () => {
      dispatch(increaseQty(index));
      setClick(1);
      setValue(value + 1);
    };
    const handleMinus = () => {
      dispatch(decreaseQty(index));
      setClick(1);
      setValue(value - 1);
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleDelete = async () => {
      setLoading(true);
      dispatch(removeItem(index));
      const resUpdate = await deleteCart(pack.id);
      setLoading(false);
      if (resUpdate?.data?.status === "SUCCESS") {
        enqueueSnackbar("Cart Product remove successfully ", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Zoom,
        });
      } else {
        enqueueSnackbar("Some error occourd ", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Zoom,
        });
      }
      setOpen(false);
    };
    const handleRemove = async () => {
      setLoading(true);
      dispatch(removeItem(index));
      const resUpdate = await deleteCart(pack.id);
      setLoading(false);
      if (resUpdate?.data?.status === "SUCCESS") {
        enqueueSnackbar("Cart Product remove successfully ", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Zoom,
        });
      } else {
        enqueueSnackbar("Some error occourd ", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Zoom,
        });
      }
    };

    const deleteAddon = (i)=>{
      dispatch(removeAddon({index,i}))
      setClick(1)
  }

  const handleChange = (e,i) => {
     if(!addOn.includes(i)){
       setAddOn((prev) => [...prev,i])
     } else{
      setAddOn((prev) => prev.filter((item) => item!==i))
     }
  };

  const handleCancel = ()=>{
      setOpenDialog(false);
      setAddOn([...pack.products[0].addonId])
  }
  const handleSave = ()=>{
    dispatch(addAddon({index,addOn}));
    setOpenDialog(false);
    setClick(1);
  }
  
    return (
      <Card
        sx={
          {
            // display: "flex",
            // flexDirection: { md: "row", xs: "column" },
            // height: { md: "250px", xs: "350px" },
            marginBottom: "20px",
          }
        }
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            height: { md: "250px", xs: "350px" },
          }}
        >
          <Image
            src={`/images/package1.jpg`}
            alt={`${pack?.products[0]?.packageId?.name}`}
          />
          <Box
            sx={{
              marginTop: { md: "10px", xs: "5px" },
              width: { md: "50%", xs: "100%" },
              height: { md: "100%", xs: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap:'5px',
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Paragraph sx={{ fontSize: "18px",fontWeight:600  }}>
                  {pack &&
                    pack.products[0].packageId &&
                    pack.products[0].packageId.name}
                </Paragraph>
                {/* <Paragraph sx={{ fontSize: "16px" }}>
                  <span style={{ fontWeight: 500 }}>Package : </span>
                  {pack &&
                    pack.products[0].packageId &&
                    pack.products[0].packageId.name}
                </Paragraph> */}
                {/* <Paragraph sx={{ fontSize: "16px" }}>
                  <span style={{ fontWeight: 500 }}>Addons : </span>
                  {product &&
                    product.products[0].addonId &&
                    product.products[0].addonId.map((item) => {
                      return item.name;
                    })}
                </Paragraph> */}
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "35vw",
                    }}
                  >
                    <Paragraph
                      variant="h3"
                      sx={{
                        fontSize: {
                          lg: "25px",
                          md: "20px",
                          sm: "16px",
                          xs: "18px",
                        },
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CurrencyRupee sx={{ fontSize: "14px" }} />{" "}
                      {pack &&
                        pack.products[0].packageId &&
                        pack.products[0].packageId.price * pack.products[0].qty}
                      /-{" "}
                    </Paragraph>
                    {/* <Box
                      sx={{
                        width: { sm: "200px", xs: "180px" },
                        display: { md: "flex", xs: "none" },
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <FaShippingFast />
                      <Paragraph variant="span">Delivery by</Paragraph>
                      <Paragraph variant="span" sx={{ fontWeight: 500 }}>
                        21st jan |
                      </Paragraph>
                      <Paragraph
                        variant="span"
                        sx={{
                          color: `${theme.colors.success.dark}`,
                          fontWeight: 500,
                        }}
                      >
                        FREE
                      </Paragraph>
                    </Box> */}
                  </Box>
                  {/* <Paragraph
                  variant="subtitle1"
                  sx={{ fontSize: "14px", textDecoration: "line-through" }}
                >
                  {" "}
                  <CurrencyRupee sx={{ fontSize: "14px" }} /> {product && product.products[0].productId &&product.products[0].productId.price.mrp}/-
                </Paragraph> */}
                </Box>
                <Box
                  sx={{
                    width: { sm: "230px", xs: "220px" },
                    display: { md: "flex", xs: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <FaShippingFast />
                <Paragraph>Delivery after</Paragraph>
                <Paragraph sx={{ fontWeight: 500 }}>10-15 days |</Paragraph>
                <Paragraph
                  sx={{
                    color: `${theme.colors.success.dark}`,
                    fontWeight: 500,
                  }}
                >
                  FREE
                </Paragraph>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                borderTop: "1px solid black",
                height: "80px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paragraph sx={{ display: { md: "block", xs: "none" } }}>
                  Qty:
                </Paragraph>
                {/* <FormControl sx={{width:'70px',}}>
                <InputLabel sx={{zIndex:0}} id="demo-simple-select-label">Qty</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={qty}
                  label="Qty"
                  onChange={handleChange}
                  sx={{height:'45px'}}
                  >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl> */}
                <Fab
                  disabled={value === 1 ? true : false}
                  onClick={handleMinus}
                  size="small"
                  color="secondary"
                  aria-label="add"
                  sx={{
                    fontSize: "30px",
                    paddingBottom: { md: "8px", sm: "5px", xs: "5px" },
                    zIndex: 0,
                    width: "30px",
                    height: "30px",
                    minWidth: "10px",
                    minHeight: "10px",
                  }}
                >
                  -
                </Fab>
                <Box
                  sx={{
                    width: { sm: "50px", xs: "40px" },
                    height: "30px",
                    fontSize: "15px",
                    border: `2px solid ${theme.colors.alpha.black[50]}`,
                    textAlign: "center",
                    paddingTop: "2px",
                  }}
                >
                  {value}
                </Box>
                <Fab
                  disabled={value === 5 ? true : false}
                  sx={{
                    zIndex: 0,
                    width: "30px",
                    height: "30px",
                    minWidth: "10px",
                    minHeight: "10px",
                  }}
                  onClick={handlePlus}
                  size="small"
                  color="secondary"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "30px",
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                  <Paragraph
                    sx={{ display: { sm: "block", xs: "none" }, fontWeight: 500 }}
                  >
                    Save to Wishlist
                  </Paragraph>
                  <Paragraph
                    sx={{ display: { sm: "none", xs: "block" }, fontWeight: 500 }}
                  >
                    Wishlist
                  </Paragraph>
                </Box> */}
                <Tooltip
                  onClick={handleClickOpen}
                  sx={{ display: { sm: "none", xs: "block" } }}
                  title="Delete"
                >
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Button
                  variant="text"
                  onClick={handleRemove}
                  sx={{
                    display: { sm: "block", xs: "none" },
                    color: `${theme.colors.alpha.black[100]}`,
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  Remove
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Are you sure to remove it ?"}
                  </DialogTitle>
                  {/* <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure to remove it ?
            </DialogContentText>
          </DialogContent> */}
                  <DialogActions>
                    <Button onClick={handleDelete}>Yes</Button>
                    <Button onClick={handleClose} autoFocus>
                      Cancle
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Box>
          </Box>
  
          <Backdrop
            sx={{
              color: (theme) => theme.colors.success.dark,
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={loading}
          >
            <CircularProgress
              sx={{ width: "50px!important", height: "50px!important" }}
              color="inherit"
            />
          </Backdrop>
        </Box>
        {/* <Divider/> */}
        {pack?.products[0]?.addonId?.length !==0 ? pack.products[0].addonId.map((item,index) => {
          return (
            // <Box>
            <Box sx={{ display: "flex",height:'150px', width: "100%",borderTop: `1px solid ${theme.colors.alpha.black[50]}`,padding:{sm:'10px 20px',xs:'10px'}}}>
              <Box sx={{flex:'2',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                {/* <Box>
                  <Button sx={{borderRadius:'5px',background:`pink`,boxShadow:'1px 2px 5px 0px rgba(153,150,153,0.74)'}}><Paragraph sx={{fontSize:'18px',fontWeight:600,color:`${theme.colors.alpha.black[100]}`}}>{item?.name}</Paragraph></Button>
                </Box> */}
                <Box >
                    <Paragraph sx={{fontSize:{sm:'18px',xs:'15px'},fontWeight:600,color:`${theme.colors.alpha.black[100]}`}}>{item?.name}</Paragraph>
                    <Paragraph><span>ServiceMonth : </span>{item?.serviceMonth}</Paragraph>
                </Box>
                <Paragraph>Renews on {date.getDate()}/{(date.getMonth()+1)<10 ?'0'+(date.getMonth()+1):date.getMonth()+1}/{date.getFullYear()+1} at Price ₹{item.price}</Paragraph>
              </Box >
              <Box sx={{flex:'1',fontSize:{sm:'20px',xs:'16px'},display:'flex',flexDirection:'column',justifyContent:'space-between'}}> 
                  <Box sx={{display:'flex',gap:'2px',justifyContent:'flex-end'}}> Price : <span style={{color:`${theme.colors.success.dark}`,fontWeight:500}}>{item?.price}</span></Box>
                  <Box sx={{display:'flex',gap:'2px',justifyContent:'flex-end'}}>
                      <IconButton onClick={()=>{deleteAddon(index)}}> <DeleteIcon/> </IconButton>
                  </Box>
              </Box>
            </Box>
            // {/* <Box>
            //     <Paragraph>Renews on {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()+1} at price {item}</Paragraph>
            // </Box>
            // </Box> */}
          );
        }) : null}
        <Box sx={{borderTop: `1px solid ${theme.colors.alpha.black[50]}`,display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
            <Button sx={{borderRadius:'5px',margin:'10px 10px 10px 0',}} onClick={()=>{setOpenDialog(true)}} variant="contained">Add Addon</Button>
        </Box>

        <Dialog 
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
             <Card >
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}} >
        <Paragraph sx={{fontSize:"24px",fontWeight:"500", color:"teal", letterSpacing:"1px"}} > ₹1000.00</Paragraph>
        <Paragraph sx={{fontSize:"14px",fontWeight:"500", color:"gray"}} > /Service</Paragraph>
        </Box>

        <Box  sx={{display:"flex",marginLeft:{sm:'40px',xs:'30px'}, flexDirection:"column"}} >
        {addon.addons && addon.addons.data && addon.addons.data.data && addon.addons.data.data.map((item,index)=>{
          const addonArray = addOn.filter((i) => {return i.id===item.id})
          const isSelected = addonArray.length!==0;
           return  (<FormControlLabel
            value={`${item.name}`}
            control={
            <Checkbox 
              checked={isSelected}
              onChange={(e)=>handleChange(e,item)}
              value={isSelected}
              />}
            label={`${item.name}`}
            labelPlacement={`${item.name}`}
            />
           )  }  )}</Box>
           <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
           </Box>
     </Card>
        </Dialog>
      </Card>
    );
  }
  