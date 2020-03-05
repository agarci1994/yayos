import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/diet`,
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