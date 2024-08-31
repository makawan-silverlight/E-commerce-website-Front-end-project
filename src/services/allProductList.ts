import axios from "axios";
import { PRODUCT_BASE_URL } from "../utils/constant";
import { AxiosResponseAllProductList } from "../interface/allProductServices";
import { handleResponse } from "../utils/handleResponse";

export const allProductListServices = {
    getAllProduct : async () : Promise<AxiosResponseAllProductList> => {
        try {
            const response = await axios.get(`${PRODUCT_BASE_URL}?limit=194`);
            return handleResponse.success(response)

        } catch (error: any) {
            return handleResponse.error(error)
        
        }
    }
}