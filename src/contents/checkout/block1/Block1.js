import React, { useState } from 'react'
import {Divider, RadioGroup } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux"
import { updateUser } from '../../../redux/slices/auth';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../redux/slices/orders';


function Block1() {
    // Redux -> UseSelector and useDispatch
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth);
    const {carts}  = useSelector((state)=> state.carts)

    // use State
    const [loading,setLoading] = useState(false)

    // this State and handleChange Function is used for accordian
    const [expanded, setExpanded] = React.useState( (user.email ? 'panel2' : 'panel1') && (user.address ? 'panel3':'panel2'));
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    
    // Address validation 
        // initial values
        const initialValues = {
            locality: "",
            city:"",
            state:"",
            country:"",
            zipcode:""
        }
        //validation Schema
        const validationSchema = Yup.object({
               locality: Yup.string().required('Required'),
              city: Yup.string().required('Required'),
               country: Yup.string().required('Required'),
                 state: Yup.string().required('Required'), 
                  zipcode: Yup.number().required('Required'),
        });
   const [details,setDetails] = useState(null);
        const onSubmit = async (values) => {
         
                const  {locality,
                city,
                state,
                country,
                zipcode} = values;
                const details = {locality,city,state,country,zipcode};
                setDetails(details)  
                const data = {
                    "address":[details]
                } 
               const res = await dispatch(updateUser(data,user.id));
                if(res){
                    toast.success("Address Added SuccessFully")
                }else{
                    toast.error("Address not added. Try Again")
                }

          }        
// Use of formik 
        const formik = useFormik({
            initialValues,
            onSubmit ,
            validationSchema
        })

  // this function is used for finding total price of all item's in cart
  let TotalAddonPrice = 0;
  let oneQuantityPrice = 0;
    for(let k of carts){
      for(let i of k.products){
        oneQuantityPrice = (i.qty) * (i.productId.price.mrp);
        TotalAddonPrice += oneQuantityPrice;
      }
    }
   
    
const handleCreateOrder = async() => { 
            setLoading(true);
            let productsdata = carts.map((item) => {
                return {
                   "productId":item && item.products && item.products[0] && item.products[0].productId && item.products[0].productId.id,
                   "qty": item && item.products && item.products[0] && item.products[0].qty,
                   "orderStatus": {
                        "orderConfirm":{
                        isConfirmed:true,
                        date: new Date()
                        },
                        "shipped": {
                        "isConfirmed": false,
                        },
                        "outForDelivery": {
                        "isConfirmed": false,
                        },
                        "delivered": {
                        "isConfirmed": false,
                        },
                        "cancel": {
                        "isConfirmed": false,
                        },
                        "refunded": {
                        "isConfirmed": false,
                        }, 
                   }   
               }     
             }) 
         
                
            console.log(productsdata)
            let data = {
                userId:user.id,
                products:productsdata,
                "address":{
                "locality":user && user.address && user.address[0] && user.address[0].locality,
                "city":user && user.address && user.address[0] && user.address[0].city,
                "state":user && user.address && user.address[0] && user.address[0].state,
                "country":user && user.address && user.address[0] && user.address[0].country,
                "zipcode":user && user.address && user.address[0] && user.address[0].zipcode,
                },
                    status: "pending",
                    paymentStatus: "pending"
                };
                console.log(productsdata)
                try{
                    const result = await dispatch(createOrder(data));
                        setLoading(false)
                        if(result){
                            toast.success("Successfully Order Placed")
                            navigate("/checkout/orderplaced")
                            return true
            
                        }else{
                            toast.error("Order not placed")
                            return false
                        }
                }catch(e){
                    console.log(e);
                }
            }
        
    
    
     
       



  
  // Payment Option radio button
  const[radioValue,setRadioValue] = useState('Cash')

  const handleRadioValue = (event) => {
        setRadioValue(event.target.value)
  }

  if(radioValue === 'netbanking' || radioValue === 'card'){
    toast(`${radioValue} Service is not available this time`)
  }

 
        
  return (
    <div>
    {
        loading ? (<div className='w-[100%] border h-[500px] flex justify-center items-center'><div className="spinner" ></div></div>) : (
            <div>
            <div className='md:w-[100%] w-[350px] md:mb-[50px]'>
        <div className=' w-[100%] flex flex-col md:flex-row justify-center items-center gap-[20px]'>
            <div className='w-[340px] md:w-[810px]  mt-[170px] h-max gap-5'>

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary
            sx={{backgroundColor:expanded === 'panel1' ? "black" : "#fff",color:expanded === 'panel1' ? "#fff" : "#7C7C7C",minHeight:"0px !important",height:"50px",padding:expanded=== 'panel1' ? "0px !important": "0px"}}
            expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <div className='w-[100%] text-xl font-semibold flex items-center px-[24px]'>
               { !user.email  ? (<div>Email | Name</div>) : ( <div className='flex gap-1'><div>{user.email}</div><div> || </div><div>{user.name}</div></div> ) }
            </div>
        </AccordionSummary>
        <AccordionDetails >
        <div className='flex flex-col justify-center gap-5 mb-5'>
                <div className=' flex flex-col justify-around ml-[20px]'>
                    <div className="field" >
                    <input type="email" id='email' name='email' 
                    //  value={user.email}
                    placeholder='Email' className="inputs" />
                    <div className="line"></div>
                    </div>
                </div>
                <div className='flex flex-col ml-[20px] justify-start'>
                    <div className="field" >
                        <input type="text" id='Name' name="name"
                        //  value={user.name}
                        placeholder="name" className="inputs" />
                        <div className="line">
                        </div>
                </div>
                </div>
            </div>
            
        </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{marginTop:"20px"}} >
        <AccordionSummary
            sx={{backgroundColor:expanded === 'panel2' ? "black" : "#fff",color:expanded === 'panel2' ? "#fff" : "#7C7C7C",minHeight:"0px !important",height:"50px",padding:expanded=== 'panel1' ? "0px !important": "0px"}}
            expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <div className='w-[100%] h-[20px]  text-xl font-semibold  flex items-center px-[24px]'>
            Delivery Address</div>
        </AccordionSummary>
        <AccordionDetails >
        <form onSubmit={formik.handleSubmit}>

                <div className=' flex flex-col justify-around ml-[20px]'>
                    <div className="field" >
                    <input type="text" name='locality' placeholder="Locality" 
                    onChange={formik.handleChange}
                    value={formik.values.locality}
                    onBlur={formik.handleBlur}
                    className= "inputs" />
                    <div className="line"></div>
                    </div>
                </div>
                <div className=' flex flex-col justify-around ml-[20px]'>
                    <div className="field" >
                    <input type="text" name='city' placeholder="City" 
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                    className="inputs" />
                    <div className="line"></div>
                    </div>
                </div>
                <div className=' flex flex-col justify-around ml-[20px]'>
                    <div className="field" >
                    <input type="text" name='state' placeholder="State" 
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    onBlur={formik.handleBlur}
                    className="inputs" />
                    <div className="line"></div>
                    </div>
                </div>
                <div className=' flex flex-col justify-around ml-[20px]'>
                    <div className="field" >
                    <input type="text" name='country' placeholder="Country" 
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                    className="inputs" />
                    <div className="line"></div>
                    </div>
                </div>
                <div className=' flex flex-col justify-around ml-[20px]'>
                    <div className="field" >
                    <input type="number" name='zipcode' placeholder="Pincode" 
                    onChange={formik.handleChange}
                    value={formik.values.zipcode}
                    onBlur={formik.handleBlur}
                    className="inputs" />
                    <div className="line"></div>
                    </div>
                </div>
                <div>
                {/* <div className='ml-[38px] font-semibold text-[15px] text-gray-900 mt-[30px]'>
                    Address Type
                </div> */}
                {/* <div className=' flex gap-[40px]  ml-[35px] mt-[15px]'>
                    <div className='flex gap-2'>
                        <FormControlLabel control={<Radio/>}   name="Address_type" value="Home (All day delivery)" label="Home (All day delivery)" />
                    </div>
                    <div className='flex gap-2 ml-[10px]'>
                        <FormControlLabel control={<Radio/>}   name="Address_type" value="Office (Delievery between 10 AM - 7 AM)" label="Office (Delievery between 10 AM - 7 AM)" />
                            
                    </div>
                </div> */}
                </div>
                <button className='mt-[20px] ml-[20px] bg-[#223C8C] text-[#fff] w-[185px] font-semibold h-[40px] rounded-3xl  tracking-wide leading-3 mb-[20px] hover:bg-blue-600 hover:text-white' type='submit'>SAVE & DELIVER HERE</button>
            </form>
        </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{marginTop:"20px"}} >
        <AccordionSummary
            sx={{backgroundColor:expanded === 'panel3' ? "black" : "#fff",color:expanded === 'panel3' ? "#fff" : "#7C7C7C",minHeight:"0px !important",height:"50px",padding:expanded=== 'panel1' ? "0px !important": "0px"}}
            expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <div className='w-[100%] h-[27px]  text-xl font-semibold     flex items-center px-[24px]'>Order Summary</div>
        </AccordionSummary>
        <AccordionDetails >
        <div className=' border'>
                <div className='h-max'>
                    <div className='ml-2 md:ml-[30px] mt-[10px] '>Item</div>
                    <div className='h-max'>
                        {
                            carts.length > 0 && carts.map((data)=> (
                                <div className='flex justify-start mt-5 md:mt-[30px] md:ml-[30px] md:gap-[40px] gap-5'>
                            <div>
                                <img alt="cart_pic" src={data && data.products && data.products[0] && data.products[0].productId.image} className='w-[180px] h-[140px] rounded-md'/>
                            </div>
                            <div className=''>
                                <h1 className='text-[25px] font-semibold'>{data && data.products && data.products[0] && data.products[0].productId.title && data.products[0].productId.title.shortTitle}</h1>
                                <h4 className='text-[25px] font-normal'>₹ {data && data.products && data.products[0] && data.products[0].productId.price && data.products[0].productId.price.mrp}</h4>
                                <div className='flex md:flex-row flex-col  gap-2'>
                                    {/* <p className='text-[18px] font-normal'>size : 8</p> */}
                                    {/* <Divider sx={{backgroundColor:"black",height:"20px", width:"2px",marginTop:"2px",display:{md:"block",xs:"none"}}}/> */}
                                    <p className='text-[18px] font-normal'>Qty :{data && data.products && data.products[0] && data.products[0].qty}</p>
                                </div>
                            </div>
                        </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className='h-[120px] flex justify-between px-[30px] items-center border'>
                <div className='text-[16px] font-normal ' >
                Order confirmation will be sent to <span className='bg-gray-200 text-semibold px-1 '>abc@gmail.com</span>
                </div>
                <button type='button' className=' mt-[20px] md:mr-[20px] bg-[#223C8C] text-[#fff] w-[175px] md:w-[150px] font-semibold h-[40px] rounded-3xl  tracking-wide leading-3 md:mb-[20px] hover:bg-blue-600 hover:text-white cursor-not-allowed' disabled>MAKE PAYMENT</button>
            </div>
        </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{marginTop:"20px"}} >
        <AccordionSummary
            sx={{backgroundColor:expanded === 'panel4' ? "black" : "#fff",color:expanded === 'panel4' ? "#fff" : "#7C7C7C",minHeight:"0px !important",height:"50px",padding:expanded=== 'panel1' ? "0px !important": "0px"}}
            expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <div className='w-[100%] h-[27px]  text-xl font-semibold  flex items-center px-[24px]'>Payment Options</div>
        </AccordionSummary>
        <AccordionDetails >
        <div className='h-[200px]'>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Cash"
                    radio= {radioValue}
                    onChange={handleRadioValue}
                    name="radio-buttons-group" >
                    <div className='flex mt-3 ml-[15px]'>
                        <FormControlLabel control={<Radio/>} sx={{width:{xs:"10px"}}}  name="payment" value="netbanking"  />
                        <img src="https://www.relaxofootwear.com/assets/img/social.svg" alt='netbanking' className='w-[250px]'></img>
                    </div>
                    <div className='flex mt-3 ml-[15px] gap-2'>
                        <FormControlLabel control={<Radio/>} sx={{width:{xs:"10px"}}}   name="payment" value="card"  />
                        <img src='https://www.relaxofootwear.com/assets/img/Social-1.svg'  alt='card' className='w-[250px]'></img>
                    </div>
                    <div className='flex mt-3 ml-[15px] justify-start items-center gap-3'>
                        <FormControlLabel control={<Radio/>} sx={{width:{xs:"10px"}}}   name="payment" value="Cash"   />
                        <label className='w-[250px]'>Cash on Delivery</label>
                    </div>
                </RadioGroup>
            </div>
            <div className='border md:h-[100px] flex flex-row-reverse px-[20px]'>
        <button  onClick={() => handleCreateOrder()}
        className='mt-[20px] ml-[20px] bg-[#223C8C] text-[#fff] w-[120px] md:w-[185px] font-normal md:font-semibold h-[40px] rounded-3xl  tracking-wide leading-3 mb-[20px] hover:bg-blue-600 hover:text-white'>PLACE ORDER</button>
            </div>
        </AccordionDetails>
        </Accordion>
            </div>
            <div className='md:mt-[170px] mt-10 border w-[330px]  '>
            <h2 className='w-[100%] h-[57px]  text-xl font-semibold    bg-[#EDEBEC] flex items-center px-[24px]'>Cart Summary</h2>
            <div>
                <div className='flex justify-between p-1 text-[12px] items-center'>
                    <div className=' px-[14px]   tracking-wide leading-3  font-normal'>(1) Item</div>
                    
                    <div>
                        <p className='text-blue-700 mr-2 underline'>EDIT CART</p>
                    </div>
                </div>
        
                        <div className='flex justify-around mt-[17px]'>
                            
                         </div>
            </div>
            <Divider sx={{ marginTop:"15px",width:{md:"300px",xs:"300px"},marginLeft:"20px"}}/>
            <div className='flex flex-col mt-[20px]'>   
            {/* <div className='ml-[20px] flex justify-between  w-[340px] text-[18px] items-center'>
                <div  >GST @12%(Inc.)</div>
                <div className='mr-[10px]'></div>
            </div> */}
            <div className='ml-[20px] flex justify-between  w-[300px] text-[18px] items-center'>
                <div  >Subtotal</div>
                <div className='mr-[10px]'>₹{TotalAddonPrice}</div>
            </div>
            <div className='ml-[20px] mt-[10px] flex justify-between  w-[300px] text-[18px] items-center'>
                <div>Shipping</div>
                <div  className='mr-[10px]'>₹ 0/-</div>
            </div>
            

            </div>
            
            <div className='w-[100%] md:h-[90px] h-[50px] mt-6 md:mt-[51px]  text-xl  font-bold justify-between   bg-black text-white flex items-center px-[24px]'>
                <div >Total Order</div>
                <div>₹ {TotalAddonPrice}
                </div>
                
            </div>

            </div>
        </div>
    </div>
    </div>
        )
    }
    </div>
  )
}

export default Block1
