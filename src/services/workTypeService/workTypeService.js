import axios from "axios";

export default class WorkTypeService{
    getWorkTypes(){
        return axios.get("http://localhost:8444/api/workTypes/getAll");
    }
}