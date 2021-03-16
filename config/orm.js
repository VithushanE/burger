const db = require('./connection')('burger_db', "password")

 
const selectAll = async () => {
    const burger = await db.query("SELECT * FROM burgers")

    return burger
}

const insertOne = async () => {
    const addBurger = await db.query("INSERT INTO burgers VALUES (0,?,?)", [input.burgerName, false])

    return addBurger
}

const updateOne = async (id) => {
    let update = await db.query(`UPDATE burgers SET devoured = true WHERE id = ${id}`)

    let update2 = await db.query(`SELECT * FROM burgers WHERE devoured = true`)

    return update2
}


  module.exports = orm;

  