import axios from "axios";


export default class JobAdvertisementService{

    getAdvertisements(){
        return axios.get("http://localhost:8444/api/jobAdvertisiments/getall");
    }

    addJobAdvertisement(jobAdvertisement){
        return axios.post("http://localhost:8444/api/jobAdvertisiments/add",jobAdvertisement); 
    }
 
}