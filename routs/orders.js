//get the router object from the library
const {Router} = require('express');
const router = Router();
const Order = require('../models/order');//import the Order model,

// content of the orders page download by link
router.get('/', (req, res) => {
    res.render('orders', {
        title: 'Orders', // seo-title
        isOrder: true //active link
    })

router.post('/', async (req, res) =>{
res.redirect('/orders')
    })


})
//const orderRoutes = require('./routs/orders')





//export the router object
module.exports = router;