const express = require ('express')

const router = express.Router();

// Importing model burger.js 
const burger = require('../models/burger.js');

// Creating routes within these routes
router.get('/', (req, res) =>{
    burger.all((data)=>{
        const hbsObject ={
            burgers:data,
        };
        console.log(hbsObject); 
        res.render('index', hbsObject);
    });
});

router.post('/api/burger', (req,res) => {
    burger.create(['burger_name', 'is_devoured' ], [req.body.burger_name, req.body.is_devoured], (result) =>{
      
        res.json({id: result.insertId});
    });
});

router.put('/api/burgers/:id', (req,res) => {
    const condition = `id = ${req.params.id}`; 

    console.log('condition', condition); 

   burger.update({
       is_devoured: req.body.is_devoured,
   }, 
   condition, 
   (result)=> {
       if (result.changedRows === 0) {
           return res.status(404).end();
       }
       res.status(200).end();
   }
   ); 
}); 


router.delete('/api/burgers/:id', (req,res) =>{
    const condition = `id = ${req.params.id}`;

    burger.delete(condition, (result) =>{
        if(result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;



// // const orm = require("../config/orm")

// const burger = require('../models/burger')

// // router.get('/', async (req,res) =>{
// //     const burger = await orm.selectAll()
// //      console.log(burger)
// //      res.render('index',{burger:burger})

// // })

// router.get('/',  (req, res) => {
//     burger.selectAll((data) => {
//         const burgerObject = {
//             burgers: data,
//         };
//         console.log(burgerObject);
//         res.render('index', burgerObject);
//     });
// });


router.post('/api/create/', async (req,res) =>{
    let input = req.body.name
    console.log(input)
    let result = await orm.insertOne(input)
    console.log(result)
    res.redirect('/')
})

// router.post('/api/burgers/',  (req,res) =>{
   
//   burger.insertOne(['burger_name', 'is_devoured'], 
//     [req.body.burger_name, req.body.is_devoured], 
//   (result) =>{
//       res.json({id: result.insertId});
//   }) ;
//   });


// // router.put('/api/burger/:id', async (req, res)=>{
// //     const id = req.params.id 
// //     const updateBurger = await orm.updateOne(id)
// //     console.log(updateBurger)
// //     res.redirect('/')
// // })

// router.put('/api/burgers/:id', (req, res)=>{
//     const condition = `id = ${req.params.id}`; 
   
//     console.log('condition', condition)
  
//    burger.updateOne(
//     {is_devoured: req.body.is_devoured
//     },
//     condition, 
//    (result) =>{
//     if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
   
//    ); 
// });


// // router.delete('api/burger/:id', async (req,res) =>{
// //     let input = req.body.name
// //     console.log(input)
// //     let result = await orm.deleteOne(id)
// //     console.log(result)
// //     res.redirect('/')
    
// //     if (result.affectedRows === 0){
// //         return res.status(404).end();
// //     }
// //     res.status(200).end();
// // })

// router.delete('api/burgers/:id',  (req,res) =>{
// const condition = `id = ${req.body.id}`
  
// burger.deleteOne(condition, (result) => {
//     if (result.affectedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

// });
  
// });

// module.exports =router; 

// const express = require ('express')

// const router = express.Router();

// const orm = require("../config/orm")

// router.get('/', async (req,res) =>{
//     const burger = await orm.selectAll()
//      console.log(burger)

//      res.render('index',{burger:burger})

// })

// router.post('/api/create', async (req,res) =>{
//     let input = req.body.name
//     console.log(input)
//     let result = await orm.insertOne(input)
//     console.log(result)
//     res.redirect('/')
// })

// router.post('/api/burger/:id', async (req, res)=>{
//     const id = req.params.id 

//     const updateBurger = await orm.updateOne(id)

//     res.redirect('/')
// })

// router.delete('api/burger/:id', async (req,res) =>{
//     if (result.affectedRows === 0){
//         return res.status(404).end();
//     }
//     res.status(200).end();
// })

// module.exports =router; 
