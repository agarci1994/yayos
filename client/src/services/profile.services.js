import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/profile',
            withCredentials: true
        })
    }

    handleUpload = theFile => this.service.post('/upload', theFile).then(response => response.data).catch(err => console.log(err))
}