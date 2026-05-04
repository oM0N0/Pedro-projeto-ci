const saudacao = require('./hello');

const resultado = saudacao("Mundo");
const esperado = "Hello, Mundo!";

if (resultado !== esperado) {
  console.error('Falha: esperado"${esperado}", porém recebeu "${resultado}"');
  process.exit(1);
}

console.log("Todos os testes passaram!");
