import axios from "axios"
import API_URL from "./Config"

const Put = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${API_URL}/${path}`, data).then(resp => {
            resolve(resp)
        }, err => {
            reject(err)
        })
    })

    return promise;
}

export default Put;