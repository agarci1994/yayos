import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/profile`,
            withCredentials: true
        })
    }

    handleUpload = theFile => this.service.post('/upload', theFile).then(response => response.data).catch(err => console.log(err))
}