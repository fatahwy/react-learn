import axios from 'axios'
import API_URL from './Config'

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${API_URL}/${path}`).then(result => {
            resolve(result.data)
        }, err => {
            reject(err)
        })
    })

    return promise;
}

export default Get;