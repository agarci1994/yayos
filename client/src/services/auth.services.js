import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/auth`,
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
    user,
    especiality,
    diet,
    recipe,
    memory,
    phone
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
        user,
        especiality,
        diet,
        recipe,
        memory,
        phone
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
