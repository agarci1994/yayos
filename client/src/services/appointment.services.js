import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/medical`,
            withCredentials: true
        });
    }

    saveMedical = (description, date, time) => this.service.post('/new', {
            description,
            date,
            time
        })
        .then(response => response.data)
        .catch(err => console.log(err))

        searchAppointment = _id => this.service.get('/all', {
                _id
            })
            .then(response => response.data)
            .catch(err => console.log(err))
}
