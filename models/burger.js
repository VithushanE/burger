// Have to import ORM to create functions that interact with Database

const orm = require ('../config/orm.js');

const burger = {

    selectAll(cb){
        orm.selectAll('burgers', (res) => cb(res));
    }, 

    insertOne(cb){
        orm.insertOne(burger_name, (res)=> cb(res));
    }, 

    updateOne(cb){
        orm.updateOne(burger_id, (res) => cb(res));
    },
    delete(cb){
        orm.deleteOne(burger_id, (res) => cb(res));
    }

}
module.exports = burger;