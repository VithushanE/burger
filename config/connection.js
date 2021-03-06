const mysql = require( 'mysql' )

// use this wrapper to create promise around mysql
class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( 
            process.env.JAWSDB_URL ? process.env.JAWSDB_URL : config );
    }
    query( sql, args=[] ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}

function dbConnect( dbName, dbPassword ){
    // at top INIT DB connection
    const db = new Database({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        /*! please fill in your password; then create the database name below and create the table */
        password: "password",
        database: "burger_db"
    })
    return db
}
    

module.exports = dbConnect