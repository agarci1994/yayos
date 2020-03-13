import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./food.css";

const Recipes = props => {
  let day;
  const [modalShow, setModalShow] = React.useState(false);
  const [recipe, setRecipe] = React.useState();
  const [ingredients, setIngredients] = React.useState();

  const close = () => {
    setModalShow(false);
  };

  const open = (recipe, ingredients) => {
    setModalShow(true);
    setRecipe(recipe);
    setIngredients(ingredients);
  };

  switch (props.day) {
    case 0:
      day = "Lunes";
      break;
    case 1:
      day = "Martes";
      break;
    case 2:
      day = "Miercoles";
      break;
    case 3:
      day = "Jueves";
      break;
    case 4:
      day = "Viernes";
      break;
    case 5:
      day = "Sábado";
      break;
    case 6:
      day = "Domingo";
      break;
    default:
      day = "Extra";
      break;
  }
  return (
    <>
      <tr>
        <td>{day}</td>
        <td onClick={() => open(props.breakfast, props.ingredientsBreakfast)}>
          {props.breakfast}
        </td>
        <td onClick={() => open(props.lunch, props.ingredientsLunch)}>{props.lunch}</td>
        <td onClick={() => open(props.dinner, props.ingredientsDinner)}>{props.dinner}</td>
      </tr>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>{recipe}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{ingredients}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => close()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Recipes;
