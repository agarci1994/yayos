const axios = require('axios').default

class dietAPIHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `https://test-es.edamam.com/`
        })
    }
    getRecipe(diet) {
        return this.axiosApp.get(`search?q=&app_id=${process.env.idEdam}&app_key=${process.env.keyEdam}&diet=${diet}`)
    }
}

module.exports = dietAPIHandler