//connected  from the 'mongoose' package the class 'Schema' and function 'model'
const {Schema, model} = require('mongoose');

//create 'user' object of the 'Schema' class
const userSchema = new Schema({
    email: {
        type: String,
        required: true  //field is mandatory
    },
    name: {
        type: String,
        required: true //field is mandatory
    },
    cart: {
        items: [ //purchase items
            {
                count: {
                    type: Number,
                    require: true,
                    default: 1 //default quantity = 1
                },
                courseId: { // reference with any course
                    type: Schema.Types.ObjectId,
                    ref: 'Course', //linking with the model/course.js -> 'model('Course', course)' table in the database
                    required: true
                }
            }
        ]
    }


})

//register a new 'User' model with the 'userSchema' schema
model.exports = model('User', userSchema);





