import axios from "axios";

class ProductApi{
    async getProduct (query,page){
        const data ={
            "query":query,
            "options": {
              "collation": "",
              "sort": {"name":1},
              "populate": "shop shop.owner",
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": page,
              "limit": 9,
              "pagination": true,
              "useEstimatedCount": false,
              "useCustomCountFn": false,
              "forceCountFn": false,
              "read": {},
              "options": {}
            },
            "isCountOnly": false
          }
       const res =await axios.post(`${process.env.REACT_APP_HOST}/userapp/product/list`,data,{
        method:"post"
       })
       if(res.data.status==="SUCCESS")
       return res.data;
       else
       return false;
    }
}

export const productApi = new ProductApi()