const axios = require('axios').default

class centerAPIHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `https://datos.madrid.es/egob/catalogo/200337-0-centros-mayores.json`
        })
    }
    getCenter() {
        return this.axiosApp.get(`/catalogo/200337-0-centros-mayores.json`)
    }
}

module.exports = centerAPIHandler