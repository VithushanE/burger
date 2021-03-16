const express = require ('express')

const router = express.Router();

const orm = require("../config/orm")

router.get('/', async (req,res) =>{
    const burger = await orm.selectAll()
     console.log(burger)

     res.render('index', burger)

})

router.post('/api/create', async (req,res) =>{
    let input = req.body 
    let result = await orm.insertOne()
    console.log(result)
    res.redirect('/')
})

router.post('.api/burger/:id', async (req, res)=>{
    const id = req.params.id 

    const updateBurger = await orm.updateOne(id)

    res.redirect('/')
})

module.exports =router; 