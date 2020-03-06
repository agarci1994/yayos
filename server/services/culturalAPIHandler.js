const axios = require('axios').default

class culturalAPIHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `https://datos.madrid.es/egob`
        })
    }
    getCultural = () => this.axiosApp.get(`/catalogo/206974-0-agenda-eventos-culturales-100.json`)
}

module.exports = culturalAPIHandler