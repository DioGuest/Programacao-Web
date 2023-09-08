const calc = require('./util/calculadora'); // Mapeando arquivo JS a onde fica os codigo "Declarando caminho para acessar !"
const express = require('express'); // declaração basica para usar o framework express web

const app = express(); // declaração basica para usar o framework express web



//Operações para cada pagina "Endereço" uma operação  matematica.
app.get("/somar/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

app.get("/dividir/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.dividir(a, b)}`);
});

app.get("/multiplicar/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.multiplicar(a, b)}`);
});

app.get("/subtrair/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.subtrair(a, b)}`);
});
// fim das operações .

const PORT = 8080;// declaração basica para usar o framework express web
app.listen(PORT, function () {// declaração basica para usar o framework express web
    console.log("app rodando na porta "+PORT);// declaração basica para usar o framework express web
});// declaração basica para usar o framework express web


                            //   dominio             nome pagina depois operadores
//no navegador acessar no padão, http://localhost:8080/dividir/200/300