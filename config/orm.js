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

all: function selectAll( result) {
   var result =  db.query("SELECT * FROM burgers") 
    console.table(result)
    return (result)
}, 

//updating 

update: function updateBurger(){
    var result2 = db.query(`UPDATE burgers SET is_devoured = true WHERE id = ${id} ;`)
    console.log(result2)
    return result2
},

//deleting

delete: function deleteBurger(){
    var result3 = db.query( `DELETE FROM burgers WHERE id = ${id} ;`)
    console.log(result3)
    return result3
},

//creating 

create: function createBurger(){
    var result4 = db.query(`INSERT INTO burgers (burger_name, is_devoured) VALUES ('${burger_name}', false);`)
    console.log(result4)
    return result4
}
}
  
  module.exports = orm;

