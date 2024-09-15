import axios from "axios";
import { PRODUCT_BASE_URL } from "../utils/constant";
import { AxiosResponseSingleProduct } from "../interface/allProductServices";
import { handleResponse } from "../utils/handleResponse";

export const singleProductServices = {
    getSingleProduct : async (id:string | undefined) : Promise<AxiosResponseSingleProduct> => {
        try {
            const response = await axios.get(`${PRODUCT_BASE_URL}/${id}`);
            return handleResponse.success(response)

        } catch (error: any) {
            return handleResponse.error(error)
        
        }
    }
}