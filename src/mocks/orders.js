import axios from "axios"

class OrdersApi{

    // Create Order function
    async createOrder(data){
        try{
            const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/order/create`,data,{
                headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}
            })
            if(response.data.status==='SUCCESS')
            return response.data;
            else
                return false;
        }catch(e){
            console.log(e);
        }
    }
}

export const ordersApi = new OrdersApi();