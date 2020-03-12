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

    updateUser = (alergy, sick, diet, id) => this.service.post("/update", {
            alergy,
            sick,
            diet,
            id
        })
        .then(response => response.data)
        .catch(err => console.log(err))

    addDrug = (id,
            name,
            quantity,
            quantityDay,
            price,
            description,
            hours,
            day,
            color) => this.service.post("/add", {
            id,
            name,
            quantity,
            quantityDay,
            price,
            description,
            hours,
            day,
            color
        })
        .then(response => response.data)
        .catch(err => console.log(err))

}