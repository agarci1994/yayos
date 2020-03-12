import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/doctor`,
            withCredentials: true
        });
    }

    findAll = () => this.service
        .get("/user")
        .then(response => response.data)
        .catch(err => console.log(err))


}