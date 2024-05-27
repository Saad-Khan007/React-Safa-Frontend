import axios from "axios";
import envoirments from "../envoirment"

const config = (token) => {
    return {
        headers: {
            'content-type': 'application/json',
            'auth-token': token
        }
    }
}

const ProductAPI = {
    getAll: () => {
        return axios.get(envoirments.API_URL + '/product/getallproducts')
    },
    addProduct: (data, token) => {
        return axios.post(envoirments.API_URL + '/product/addproduct', data, config(token))
    },
    getProduct: (token) => {
        return axios.get(envoirments.API_URL + '/product/getproduct', config(token));
    },
    deleteProduct: (token, id) => {
        return axios.delete(envoirments.API_URL + '/product/deleteproduct/' + id, config(token));
    }
}

export default ProductAPI;