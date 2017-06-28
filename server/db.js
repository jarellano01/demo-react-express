import mysql from 'mysql';

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'MyDb'
});



export default callback => {
    connection.connect(function(err) {
        if (err) {
        	console.log("Error Connecting to MySQL");
            console.error(err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
        callback(connection);
    });

}
