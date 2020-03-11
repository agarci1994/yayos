import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/medication`,
            withCredentials: true
        });
    }

searchDrug = _id => this.service.get('/', {_id})
.then(response => response.data)
.catch(err => console.log(err))

searchDrugGrandmother = _id => this.service.get('/grandmother', {
    _id
})
.then(response => response.data)
.catch(err => console.log(err))
}
