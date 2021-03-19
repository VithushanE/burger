// // Have to import ORM 

const orm = require ('../config/orm.js');

const burger = {
    all(cb) {
      orm.all('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    create(cols, vals, cb) {
      orm.create('burgers', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
      orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
    delete(condition, cb) {
      orm.delete('burgers', condition, (res) => cb(res));
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  






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

    // updateOne: async function (burger_id, (cb){
    //     orm.updateOne(burger_id, (res) => cb(res));
    // },
    
    // delete(cb){
    //     orm.deleteOne(burger_id, (res) => cb(res));
    // }

// }
// module.exports = burger;
