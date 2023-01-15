//connected  from the 'mongoose' package the class 'Schema' and function 'model'
const {Schema, model} = require('mongoose');

//create a new 'orderSchema' object of the 'Schema' class
const orderSchema = new Schema ({

})

//exported 'model'
module.exports = model('Order', orderSchema)