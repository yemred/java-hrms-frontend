import axios from "axios";

export default class UnEmployedService{

    getUnEmployeds(){
        return axios.get("http://localhost:8444/api/unemployedusers/getall")
    }
}


