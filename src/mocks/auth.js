import axios from "axios";


class AuthApi{

    async getUser(){
       const response = await axios.get(`${process.env.REACT_APP_HOST}/userapp/user/me`,{
        method: "get",
        headers: { 
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
       if(response.data.status==='SUCCESS')
       return response.data;
       else
        return false;
    } 

    async getUserList(page,limit,filters){

      let obj = {
        "query":filters,
        "options": {
          "collation": "",
          "sort": "",
          "populate": "",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": page,
          "limit": limit,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false
      }
      const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/user/list`,obj,{
       method: "get",
       headers: { 
       "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
       }
     });
      if(response.data.status==='SUCCESS')
      return response.data;
      else
       return false;
   } 

    async updateUser(data,id){
      const response = await axios.put(`${process.env.REACT_APP_HOST}/userapp/user/update/${id}`,data,{
        method: "put",
        headers: { 
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
        if(response.data.status==='SUCCESS')
        return response.data;
        else
         return false;
    } 

    async deleteUser(id){
      const response = await axios.delete(`${process.env.REACT_APP_HOST}/userapp/user/delete/${id}`,{
        method: "delete",
        headers: { 
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
        if(response.data.status==='SUCCESS')
        return response.data;
        else
         return false;
    } 

 
   async register(data){
    const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/auth/register`,data);
    console.log(process.env.REACT_APP_HOST)
    if(response.data.status==='SUCCESS')
    return response.data;
    else
     return false;
   } 

   async login(data){
    const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/auth/login`,data);
    if(response.data.status==='SUCCESS')
    return response.data;
    else
     return false;
   } 

   

}

export const authApi = new AuthApi();