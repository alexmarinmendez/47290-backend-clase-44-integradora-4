import mongoose from 'mongoose'

const PizzaModel = mongoose.model('Pizza', new mongoose.Schema({
    name: String,
    size: String,
    price: Number
}))

export default PizzaModel