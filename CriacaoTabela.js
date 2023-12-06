const connection = require('../db.js');

const CriacaoTabela = `
CREATE TABLE CLIENTE (
  id INT AUTO_INCREMENT,
  nome VARCHAR(32),
  sexo VARCHAR(1),
  idade SMALLINT,
  salario FLOAT,
  cidade CHAR(255),
  estado VARCHAR(2),
  PRIMARY KEY (id)
);
`;

connection.query(CriacaoTabela, (err, results) => {
  if (err) throw err;
  console.log('Tabela CLIENTE criada com sucesso!');
  connection.end();
});
