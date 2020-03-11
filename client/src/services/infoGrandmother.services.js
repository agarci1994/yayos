  
  import axios from "axios";

  export default class Services {
    constructor() {
      this.service = axios.create({
        baseURL: `${process.env.REACT_APP_URL}/info`,
        withCredentials: true
      });
    }

  
  find = user => this.service.post("/", {
          user
      })
      .then(response => response.data)
      .catch(err => console.log(err))
    }