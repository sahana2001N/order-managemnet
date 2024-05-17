import axios from "axios";

const BASE_URL = 'http://localhost:8000/emp/';
const EmpService={
    // AddEmployee:async(empData)=>{
    //    try{
    //      const response=await axios.post(`${BASE_URL}add-emp`, empData); 
    //      return response.data;
    //    }catch (error) {
    //     console.log(error);
    //     throw new Error(error);
    //    }

    // },
    getEmployee: async ()=>{
        try {
            const response = await axios.get(`${BASE_URL}get-all-emps`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }








};
export default EmpService;