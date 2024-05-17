import axios from "axios";

const BASE_URL = 'http://localhost:7070/api/product';
const ProductService={
    // AddEmployee:async(empData)=>{
    //    try{
    //      const response=await axios.post(`${BASE_URL}add-emp`, empData); 
    //      return response.data;
    //    }catch (error) {
    //     console.log(error);
    //     throw new Error(error);
    //    }

    // },
    getProduct: async ()=>{
        try {
            const response = await axios.get(`${BASE_URL}/allProducts`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }








};
export default ProductService;