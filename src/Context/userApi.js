import axios from "axios";
import envoirments from "../envoirment"
const User = {
    login: (data) => {
        return axios.post(envoirments.API_URL + '/user/login', data)
    },
    signup: (data) => {
        return axios.post(envoirments.API_URL + '/user/signup', {
            email: data.email,
            password: data.password,
            username: data.name
        })
    },
    getUser: (token) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'auth-token': token
            }
        }
        return axios.get(envoirments.API_URL + '/user/getuser', config)
    }
}

export default User;