const connection = require('../db.js');

// Consulta por ID
function consultaId(id) {
  const query = `SELECT * FROM CLIENTE WHERE id = ${id}`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
}

// Consulta por SEXO
function consultaSexo(sexo) {
  const query = `SELECT * FROM CLIENTE WHERE sexo = '${sexo}'`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
}

// Consulta por SALÁRIO acima de 3000
function consultaSalario() {
  const query = `SELECT * FROM CLIENTE WHERE salario > 3000 ORDER BY salario`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
}

// Testando as consultas
consultaId(2);
consultaSexo('F');
consultaSalario();