import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:5000/api/memory",
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

}