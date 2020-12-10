import axios from 'axios'
import API_URL from './Config'

const Delete = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${API_URL}/${path}`).then(resp => {
            resolve(resp)
        }, err => {
            reject(err)
        })
    })
    return promise;
}

export default Delete;