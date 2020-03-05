const axios = require('axios').default

class dietAPIHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `https://test-es.edamam.com/`
        })
    }
    getRecipe(diet) {
        console.log(`https://test-es.edamam.com/search?q=&app_id=${process.env.idEdam}&app_key=${process.env.keyEdam}&diet=${diet}`)
        return axios.get(`https://test-es.edamam.com/search?q=&app_id=${process.env.idEdam}&app_key=${process.env.keyEdam}&diet=${diet}`)
    }
}

module.exports = dietAPIHandler