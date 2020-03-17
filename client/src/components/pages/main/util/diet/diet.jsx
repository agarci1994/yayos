import React, {Component} from "react"
import { Link } from "react-router-dom"

/* ----- UI components ----- */
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button";

/* ----- Services ----- */
import DietServices from "../../../../../services/dietType.services"

/* ----- RRD compoennts ----- */
import CardFood from "../../../../cards/diet/food"
import Recipes from "../../../../cards/diet/recipes"

/* ----- CSS ----- */
import './diet.css'


const type = [{ type: "Equilibrada", description: "Valores de proteínas, grasas y carbohidratos equilibrados", typeAPI:"balanced"},
  { type: "Alto contenido en fibra", description: "Más de 5 g de fibra por porción.", typeAPI:"high-fiber" },
  { type: "Alto en proteína", description: "Más del 50% de las calorías totales de las proteínas.", typeAPI:"high-protein" },
  { type: "Baja en carbohidratos", description: "Menos del 20% del total de calorías de carbohidratos", typeAPI:"low-carb" },
  { type: "Bajo en grasa", description: "Menos del 15% del total de calorías provenientes de grasas", typeAPI:"low-fat" },
  { type: "Bajo en sodio", description: "Menos de 140 mg de Na por porción", typeAPI:"low-sodium" },
  { type: "Amigable para los riñones", description: "menos de 250 mg de fosforo, menos de 500 mg de potasio y menos de 500 mg de sodio", typeAPI:"kidney-friendly" },
  { type: "Bajo en azucar", description: "Menos de 4 g de azúcar por porción", typeAPI:"sugar-conscious" }]



class Diet extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      recipe: props.loggedInUser.recipe,
      diet: props.loggedInUser.diet };
    this.dietServices = new DietServices();
  }

  dietChange = (type) =>{

    this.setState({ diet: type });
  this.dietServices.dietType(type)
}

takeRecipes = () => {
  return this.state.recipe.length !== 1 && this.state.recipe.map((elm, idx) => <Recipes key={idx} day={idx} breakfast={elm[idx].breakfast.name} ingredientsBreakfast={elm[idx].breakfast.ingredients} lunch={elm[idx].lunch.name} ingredientsLunch={elm[idx].lunch.ingredients} dinner={elm[idx].dinner.name} ingredientsDinner={elm[idx].dinner.ingredients} />)}

 search(){
   this.dietServices.searchMain()
   .then(response => this.setState({recipe: response.recipe}))
   .catch(err => console.log(err))
 }

render() {
return this.state.diet.length ? (
    <div>
      <Container>
      <div className="button-back">
        <Button as="div" variant="light" size="sm">
          <Link to="/main">Volver</Link>
        </Button>
      </div>
         <article className="titleDiet">
         <h2>Tu menu de hoy es:</h2>
         <div className="button new-recipe" onClick={()=> this.search()}>
        Nueva Dieta
         </div>
          </article>
       <Row>
         <Col md={12}>
        <Table responsive="sm">
          <thead className="tr-orange">
              <tr>
                <th>Dia</th>
                <th>Desayuno</th>
                <th>Almuerzo</th>
                <th>Cena</th>
              </tr>
          </thead>
          <tbody>
       {this.takeRecipes()}
          </tbody>
        </Table>
          </Col>
        </Row>
        <div className="imgDiet">
        <img src = "../../../../../../images/cook.jpg" alt="cook"/>
      </div>
      </Container>
    </div>
) : (
  <Container>
    <Row>
      <Col md={12}>
        <article className="type-diet">
          <h3>Antes tienes que elegir tu dieta</h3>
      <section>
 <Row>
                {type.map((elm, idx) => <CardFood  key={idx} dietChange={(e) => this.dietChange(e)} typeAPI={elm.typeAPI} type={elm.type} description={elm.description} />)}
 </Row>
      </section>
 </article>
      </Col>
    </Row>
  </Container>)
    }
  }

  export default Diet

