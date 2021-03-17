const db = require('./connection')('burger_db', "password")

var orm = { 
 selectAll:  (cb) =>{
    const burger = db.query("SELECT * FROM burgers")

    return burger
},

 insertOne:(input,cb) =>{
     console.log(input)
    const addBurger =db.query("INSERT INTO burgers VALUES (0,?,?)", [input, false])

    return addBurger
},

 updateOne: async (id) => {
    let update = await db.query(`UPDATE burgers SET devoured = true WHERE id = ${id}`)

    let update2 = await db.query(`SELECT * FROM burgers WHERE devoured = true`)

    return update2
},
deleteOne: async (id) => {

    const deleteBurger = await db.query(`DELETE FROM burgers WHERE id = ${id}`)
}
}

  module.exports = orm;

  