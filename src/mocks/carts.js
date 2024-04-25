import axios from "axios"

class CartsApi{
    // Delete the cart' item function
    async deleteCart(id){
        try{
            const response = await axios.delete(`${process.env.REACT_APP_HOST}/userapp/cart/soft-delete/${id}`,{
                method:"delete",
                headers: {
                "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
                }
            })

            if(response.data.status === "SUCCESS"){
                return response.data
            }else{
                return false
            }
        }catch(error){
            console.log(error)
        }
    }

    // Create the Carts function
    async createCart(data){
        try{
            const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/cart/create`,data,{
                method:"POST",
                "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
            })
            if(response.data.status === "SUCCESS"){
                return response.data
            }else{
                return false
            }
        }catch(error){
            console.log(error)
        }
    }
    // Gets the carts List 
    async cartsList(page=1,limit=2,filters={}){
        filters.isDeleted = false;
        const data = {
            "query":filters,
            "options": {
              "collation": "",
              "sort": {},
              "populate": "products.productId",
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": page,
              "limit": limit,
              "pagination": false,
              "useEstimatedCount": false,
              "useCustomCountFn": false,
              "forceCountFn": false,
              "read": {},
              "options": {}
            },
            "isCountOnly": false
        }
        
        try{
            
            const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/cart/list`,data,{
                method:"POST",
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
                }
            })
             
            if(response.data.status === "SUCCESS"){
                return response.data;
            }else{
                return false
            }
        }catch(error){
            console.log(error)
        }
    }

}

export const cartsApi = new CartsApi();