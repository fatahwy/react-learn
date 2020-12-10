import axios from "axios"
import API_URL from "./Config"

const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${API_URL}/${path}`, data).then(resp => {
            resolve(resp)
        }, err => reject(err))
    })

    return promise;
}

export default Post;