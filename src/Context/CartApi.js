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

const CartApi = {
    getCart: (token) => {
        return axios.get(envoirments.API_URL + '/cart/getcart', config(token))
    },
    addCart: (token, id, data) => {
        return axios.post(envoirments.API_URL + '/cart/addcart/' + id, data, config(token))
    }
}

export default CartApi;