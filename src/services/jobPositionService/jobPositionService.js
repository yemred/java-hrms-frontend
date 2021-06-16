import axios from "axios";

export default class JobPositionService{

    getJobPositions(){
        return axios.get("http://localhost:8444/api/jobPositions/getall");
    }

}