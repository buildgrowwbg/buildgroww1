import axios from "axios";


class CompanyApi{

    async getCompanyData(query,sort,page){
        let product = {
        "query":query,
        "options": {
          "collation": "",
          "sort": sort,
          "populate": "owner",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": page,
          "limit": 10,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false};
        try {
            const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/shop/list`,product);
               if(response.data.status==='SUCCESS'){
               console.log(response.data.data);
                    return response.data;
               }
               else
                    return false;
        } catch (error) {
            return false
        }
       
    }

    async getShopData(id){
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/userapp/shop/get/${id}`);
               if(response.data.status==='SUCCESS'){
                    return response.data;
               }
               else
                    return false;
        } catch (error) {
            return false
        }
       
    }

}

export const companyApi = new CompanyApi();