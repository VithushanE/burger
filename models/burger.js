
// // Have to import ORM 

const orm = require ('../config/orm.js');


const burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res)
        })
    },
    insertOne: function(newBurgerName, cb){
        orm.insertOne(newBurgerName, function(res){
            cb(res)
        })
    },
    update: function(burgerId, cb) {
        orm.update(burgerId, function(res){
            cb(res)
        })
    }
}

module.exports = burger;










// const burger = {
//     all: (cb) => {
//       orm.all('burgers', (res) => cb(res));
//     },
    // The variables cols and vals are arrays.
    // create: (burger_name, cb) => {
    //   orm.create(burger_name , (res) => cb(res));
    // },
    // update: (burgerID, cb) => {
    //   orm.update( burgerID, (res) => cb(res));
    // },
    // delete(burgerID, cb) {
    //   orm.delete( burgerID, (res) => cb(res));
    // },
//   };
  
  // Export the database functions for the controller (catsController.js).
//   module.exports = burger;
  






// const burger = {

//     selectAll(cb){
//         orm.selectAll('burgers', (res) => cb(res));
//     }, 

//     insertOne(cb){
//         orm.insertOne(burger_name, (res)=> cb(res));
//     }, 

//     updateOne(cb){
//         orm.updateOne(burger_id, (res) => cb(res));
//     },
//     delete(condition, cb){
//         orm.deleteOne(burger_id, (res) => cb(res));
//     }

// }
// module.exports = burger;

// Have to import ORM to create functions that interact with Database

// const orm = require ('../config/orm.js');

// const burger = {

    // selectAll(cb){
    //     orm.selectAll('burgers', (res) => cb(res));
    // }, 

    // insertOne(cb){
    //     orm.insertOne(burger_name, (res)=> cb(res));
    // }, 

    // updateOne(cb){: async function (burger_id, (cb){
    //     orm.updateOne(burger_id, (res) => cb(res));
    // },
    
    // delete(cb){
    //     orm.deleteOne(burger_id, (res) => cb(res));
    // }

// }
// module.exports = burger;
