//connected  from the 'mongoose' package the class 'Schema' and function 'model'
const {Schema, model} = require('mongoose');

//create a new 'course' object of the 'Schema' class
const course = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: String,
    userId: { //to link tables in the database
        type: Schema.Types.ObjectId,
        ref: 'User' //linking with the model/user.js -> 'model('User', userSchema)' table in the database
        }
})



//exported 'model'
module.exports = model('Course', course);