import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:5000/api/diet",
            withCredentials: true
        });
    }

    dietType = (diet) => {
        this.service
            .post("/new", {
                diet
            })
            .then(response => response.data)
            .catch(err => console.log(err))
    }

    searchMain = () => this.service.get('/main').then(response => response.data).catch(err => console.log(err))
}