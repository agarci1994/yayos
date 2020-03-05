const mongoose = require('mongoose')
require("dotenv").config()
mongoose.connect(`${process.env.DB_SERVER}`)
const Drug = require('../models/Medications.model')


const drugs = [{
    name: "Tension",
    quantity: 20,
    quantityDay: 1,
    day: ["Monday", "Tuesday", "Friday"],
    hours: ["Morning", "Night"],
    description: "Pastilla para regular la tensión arterial",
    color: "blue",
    form: ["big-circle"],
    price: 8.30,
    yayo: new mongoose.Types.ObjectId("5e60e4df725854001794a419")
  },
  {
    name: "Alergia",
    quantity: 20,
    quantityDay: 1,
    day: ["Friday"],
    hours: ["Night"],
    description: "Pastillas para la alergia",
    color: "White",
    form: ["little-circle"],
    price: 2.1,
    yayo: new mongoose.Types.ObjectId("5e60e4df725854001794a419")
  },
  {
    name: "Depresion",
    quantity: 20,
    quantityDay: 1,
    day: ["Monday", "Tuesday", "Friday"],
    hours: ["Morning", "Night"],
    description: "Pastilla para la depresión",
    color: "blue",
    form: ["liquid"],
    price: 4.23,
    yayo: new mongoose.Types.ObjectId("5e60e4df725854001794a419")
  },
  {
    name: "Almax",
    quantity: 20,
    quantityDay: 1,
    day: ["Monday", "Tuesday", "Friday"],
    hours: ["Morning", "Night"],
    description: "Contra la acidez",
    color: "blue",
    form: ["big-circle"],
    price: 4,
    yayo: new mongoose.Types.ObjectId("5e60e4df725854001794a419")
  },
  {
    name: "Omeprazol",
    quantity: 20,
    quantityDay: 1,
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    hours: ["Morning"],
    description: "Pastilla para los acidos del estomago",
    color: "blue",
    form: ["little-circle"],
    price: 3.4,
    yayo: new mongoose.Types.ObjectId("5e60e4df725854001794a419")

  }
]


Drug.insertMany(
    drugs
  )
  .then(() => mongoose.connection.close())
  .catch(err => console.log(err))