import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/auth",
      withCredentials: true
    });
  }

  signup = ({
    username,
    password,
    name,
    surname,
    city,
    age,
    role,
    yayo,
    especiality,
    diet,
    recipe,
    memory
  }) =>
    this.service
      .post("/signup", {
        username,
        password,
        name,
        surname,
        city,
        age,
        role,
        yayo,
        especiality,
        diet,
        recipe,
        memory
      })
      .then(response => response.data)
      .catch(err => console.log(err))

  login = ({ username, password }) =>
    this.service
      .post("/login", {
        username,
        password
      })
      .then(response => response.data)
      .catch(err => console.log(err))

  logout = () => this.service.post("/logout").then(response => response.data).catch(err=> console.log(err))

  loggedin = () =>
    this.service.get("/loggedin").then(response => response.data).catch(err => console.log(err))
}
