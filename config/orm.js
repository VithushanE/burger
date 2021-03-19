const db= require('./connection')('burger_db', "password")

// const printQuestionMarks = (num) => {
//     const arr = [];
  
//     for (let i = 0; i < num; i++) {
//       arr.push('?');
//     }
  
//     return arr.toString();
//   };
  
//   const objToSql = (ob) => {
//     const arr = [];
  
  
//     for (const key in ob) {
//       let value = ob[key];
     
//       if (Object.hasOwnProperty.call(ob, key)) {
       
//         if (typeof value === 'string' && value.indexOf(' ') >= 0) {
//           value = `'${value}'`;
//         }
       
//         arr.push(`${key}=${value}`);
//       }
//     }
  
    
//     return arr.toString();
//   };
  
  const orm = {

   // Selecting all CHECK IF ARROW FUNCTION WORKS 
   all: (cb) => {

    db.query("SELECT * FROM burger" () = (err,result) => {
        if (err) {
            throw err;
          }
        cb(result);
    });
   },
   
    // To insert 

   insert: (burger_name, cb) =>{
       const insertQuery = `INSERT INTO burgers (burger_name, is_devoured) VALUES ('${burger_name}', false)`;
        db.query(this.insertQuery, function (err, result) {
            if (err) {
                throw err;
              }
            cb(result);
        });
   },

      update: (burgerID, cb) => {
        const updateQuery = `UPDATE burgers SET is_devoured = true WHERE id = ${burgerID} ;`
        db.query(this.updateQuery, function (err, result) {
            if (err) {
                throw err;
              }
            cb(result);
        });


      },

      // To Delete 
      delete:(burgerID, cb) =>{
          const deleteQuery = `DELETE burgers SET is_devoured = true WHERE id = ${burgerID} ;`
          db.query(this.updateQuery, function (err, result) {
            if (err) {
                throw err;
              }
            cb(result);
        });

      }

    };

  module.exports = orm;

