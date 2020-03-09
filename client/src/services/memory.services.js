import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/memory`,
            withCredentials: true
        });
    }

    memory = ({
            description,
            date
        }) => this.service
        .post("/list", {
            description,
            date
        })
        .then(response => response.data)
        .catch(err => console.log(err))
        
        
        update = () => this.service.get("/find").then(response => console.log("kjnjnk", response)).catch(err => console.log(err))
        delete = (user) => this.service.get("/delete", {id: user._id}).then(response => console.log("kjnjnk", response)).catch(err => console.log(err))
    }