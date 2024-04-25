import axios from "axios";


class LocationApi{

    async getLocation(lat,lon){
       const response = await axios.get(`${process.env.REACT_APP_HOST}/userapp/user/getAddressFromCoordinates?lat=${lat}&lng=${lon}`,{
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

}

export const locationApi = new LocationApi();