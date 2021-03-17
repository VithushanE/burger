const express = require ('express')

const router = express.Router();

const orm = require("../config/orm")

router.get('/', async (req,res) =>{
    const burger = await orm.selectAll()
     console.log(burger)

     res.render('index',{burger:burger})

})

router.post('/api/create', async (req,res) =>{
    let input = req.body.name
    console.log(input)
    let result = await orm.insertOne(input)
    console.log(result)
    res.redirect('/')
})

router.post('/api/burger/:id', async (req, res)=>{
    const id = req.params.id 

    const updateBurger = await orm.updateOne(id)

    res.redirect('/')
})

router.delete('api/burger/:id', async (req,res) =>{
    if (result.affectedRows === 0){
        return res.status(404).end();
    }
    res.status(200).end();
})

module.exports =router; 