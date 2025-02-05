

// let config = {
// 	user: 'db_a6478c_laboratoriov2_admin',
// 	password: 'razors1805',
// 	server: 'sql8010.site4now.net',
// 	database: 'db_a6478c_laboratoriov2',
// 	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
// };


// let config = {
// 	user: 'a6478c_laborat',
// 	password: 'razors1805',
// 	host: 'mysql5050.site4now.net',
// 	database: 'db_a6478c_laborat',
// 	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
// };

let config = {
    user: 'a6478c_laborat',
    password: 'razors1805',
    host: 'mysql5050.site4now.net',
    database: 'db_a6478c_laborat',
    waitForConnections: true,
    connectionLimit: 10,  // Ajustar según el límite del servidor
    queueLimit: 0
};

let configx = {
	user: 'iEx',
	password: 'iEx',
	server: 'DESKTOP-3L7R1E4\\SQL22',
	database: 'laboratorio',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};



// const sql = require('mssql');

// let execute = {
// 	Query : (res,sqlqry)=>{	
		
		
// 		try {
// 		  const pool1 = new sql.ConnectionPool(config, err => {
// 			new sql.Request(pool1)
// 			.query(sqlqry, (err, result) => {
// 				if(err){
// 					console.log(err.message);
// 					res.send('error')
// 				}else{
// 					res.send(result);
// 				}					
// 			})
// 			sql.close();  
// 		  })
// 		  pool1.on('error', err => {
// 			  console.log('error sql = ' + err);
// 			  sql.close();
// 			  res.send('error');
// 		  })
// 		} catch (error) {
// 			console.log(error);
// 		  res.send('error')   
// 		  sql.close();
// 		}
// 	}
// }


const mysql = require('mysql2');

let execute = {
    Query: (res, sqlqry) => {
        const pool = mysql.createPool(config);

        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err.message);
                res.send('error');
                return;
            }

            connection.query(sqlqry, (err, results) => {
                connection.release();  // Liberar la conexión de vuelta al pool

                if (err) {
                    console.log(err.message);
                    res.send('error');
                } else {
                    res.send(results);
                }
            });
        });

        pool.on('error', (err) => {
            console.log('error sql = ' + err);
            res.send('error');
        });
    }
};


module.exports = execute;

