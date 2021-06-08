import axios from "axios";


export default class EmployerService{

    getEmployers(){
        return axios.get("http://localhost:8444/api/employerusers/getall")
    }
}