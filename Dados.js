const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'luamuda',
  password: 'password',
  database: 'clientes',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
});

module.exports = connection;