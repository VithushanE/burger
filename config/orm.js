const connection = require("./connection.js");

const printQuestionMarks = (num) => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  };
  
  const objToSql = (ob) => {
    const arr = [];
  
  
    for (const key in ob) {
      let value = ob[key];
     
      if (Object.hasOwnProperty.call(ob, key)) {
       
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
       
        arr.push(`${key}=${value}`);
      }
    }
  
    
    return arr.toString();
  };
  
  const orm = {
    all(tableInput, cb) {
      const queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    // To insert 
    create(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;
    
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';
    
        console.log(queryString);
    
        connection.query(queryString, vals, (err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

// To update 
      update(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;
    
        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    

      // To Delete 
      delete(table, condition, cb) {
        let queryString = `DELETE FROM ${table}`;
        queryString += ' WHERE ';
        queryString += condition;
    
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    };


// var orm = { 
//  selectAll:  (cb) =>{
//     const burger ="SELECT * FROM burgers";
//     connection.query(burger, (err, result) => {

//     })

//     return burger
// },

//  insertOne:(input,cb) =>{
//      console.log(input)
//     const addBurger = db.query("INSERT INTO burgers VALUES (0,?,?)", [input, false])

//     return addBurger
// },

//  updateOne:  (id) => {
//      console.log(input)

//     // let update =  db.query(`UPDATE burgers SET is_devoured = true WHERE id = ${id}`)

//     // let update2 =  db.query(`SELECT * FROM burgers WHERE is_devoured = true`)

//     // return update 

//     let update =  `UPDATE burgers SET is_devoured = true WHERE id = ${id}`
//     console.log(update);
//     connection.query(update, (err, result) => {
//         if (err) {
//             throw err;
//           }
    
//           cb(result);
//     })
    
// },
// deleteOne: (id) => {
//     console.log(id)
//     const deleteBurger =  db.query(`DELETE FROM burgers WHERE id = ${id}`)
    
//     const burger = db.query("SELECT * FROM burgers WHERE is_devoured = false")

//     return burger
// }
// }

//   module.exports = orm;

// const db = require('./connection')('burger_db', "password")

// var orm = { 
//  selectAll:  (cb) =>{
//     const burger = db.query("SELECT * FROM burgers")

//     return burger
// },

//  insertOne:(input,cb) =>{
//      console.log(input)
//     const addBurger =db.query("INSERT INTO burgers VALUES (0,?,?)", [input, true])

//     return addBurger
// },

//  updateOne: async (id) => {
//     let update = await db.query(`UPDATE burgers SET devoured = true WHERE id = ${id}`)

//     let update2 = await db.query(`SELECT * FROM burgers WHERE devoured = true`)

//     return update
// },
// deleteOne: async (id) => {

//     const deleteBurger = await db.query(`DELETE FROM burgers WHERE id = ${id}`)
// }
// }

//   module.exports = orm;
