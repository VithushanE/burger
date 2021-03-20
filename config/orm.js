// const orm = require('../../burgerApp/Solved/config/orm');

const db= require('./connection')('burger_db', "password")

    // const orm = {
   // Selecting all 
//    all: function (cb) {
//     db.query("SELECT * FROM burgers", function (err,result) {
//         if (err) throw err;
//         cb(result);
//     });
//    },

    // To insert 

//    insert: (burger_name, cb) =>{
//        const insertQuery = `INSERT INTO burgers (burger_name, is_devoured) VALUES ('${burger_name}', false)`;
//         db.query(this.insertQuery, function (err, result) {
//             if (err) {
//                 throw err;
//               }
//             cb(result);
//         });
//    },

//       update: (burgerID, cb) => {
//         const updateQuery = `UPDATE burgers SET is_devoured = true WHERE id = ${burgerID} ;`
//         db.query(this.updateQuery, function (err, result) {
//             if (err) {
//                 throw err;
//               }
//             cb(result);
//         });


//       },

      // To Delete 
    //   delete:(burgerID, cb) =>{
    //       const deleteQuery = `DELETE burgers SET is_devoured = true WHERE id = ${burgerID} ;`
    //       db.query(this.updateQuery, function (err, result) {
    //         if (err) {
    //             throw err;
    //           }
    //         cb(result);
    //     });

    //   }

    // };



 //Step 1: declare orm in const variable, and put the functions in it.


 const orm = {

// Selecting all 

selectAll: function selectAll() {
//    var result =  db.query("SELECT * FROM burgers") 
//     console.table(result)
    return  db.query("SELECT * FROM burgers") 
}, 

//updating 

update: function updateBurger(id){

    return db.query(`UPDATE burgers SET is_devoured = true WHERE id = ${id} ;`)
},

//deleting

delete: function deleteBurger(id){
    return db.query( `DELETE FROM burgers WHERE id = ${id} ;`)    
},

//creating 

create: function createBurger(burger_name){
    return  db.query(`INSERT INTO burgers (burger_name, is_devoured) VALUES ('${burger_name}', false);`)
    
}
}
  
  module.exports = orm;

