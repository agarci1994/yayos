import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/bills`,
            withCredentials: true
        });
    }

    saveBills = (dayPay, type) => this.service.post('/new', {
            dayPay,
            type
        })
        .then(response => response.data)
        .catch(err => console.log(err))

    searchBills = _id => this.service.get('/all', {
            _id
        })
        .then(response => response.data)
        .catch(err => console.log(err))

    deleteBills = _id => this.service.get('/delete', {
            _id
        })
        .then(response => response.data)
        .catch(err => console.log(err))
}