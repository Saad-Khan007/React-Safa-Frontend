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

const OrderApi = {
    getOrder: (token) => {
        return axios.get(envoirments.API_URL + '/order/getorder', config(token))
    },
    addOrder: (token, id, data) => {
        return axios.post(envoirments.API_URL + '/order/addorder/' + id, data, config(token))
    },
    deleteOrder: (token, id) => {
        return axios.delete(envoirments.API_URL + '/order/deleteorder/' + id, config(token))
    },
    deleteAllOrder: (token) => {
        return axios.delete(envoirments.API_URL + '/order/deleteallorders', config(token))
    }
}

export default OrderApi;