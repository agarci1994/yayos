import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/events`,
            withCredentials: true
        });
    }

    searchCenter = () => this.service.get('/center')
        .then(response => response.data)
        .catch(err => console.log(err))

    searchCultural = () => this.service.get('/cultural')
        .then(response => response.data)
        .catch(err => console.log(err))
    }