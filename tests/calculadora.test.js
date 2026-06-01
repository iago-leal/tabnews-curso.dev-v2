const calculadora = require("../models/calculadora.js");

test("deve somar dois números", () => {
  const resultado = calculadora.somar(7, 5);
  expect(resultado).toBe(12);
  console.log(resultado);
});

test("deve somar dois números", () => {
  const resultado = calculadora.somar("banana", 5);
  expect(resultado).toBe("Erro");
  console.log(resultado);
});

test("deve somar dois números", () => {
  const resultado = calculadora.somar(5, "banana");
  expect(resultado).toBe("Erro");
  console.log(resultado);
});

test("deve subtrair dois números", () => {
  const resultado = calculadora.subtrair(7, 5);
  expect(resultado).toBe(2);
  console.log(resultado);
});

test("deve multiplicar dois números", () => {
  const resultado = calculadora.multiplicar(7, 5);
  expect(resultado).toBe(35);
  console.log(resultado);
});

test("deve dividir dois números", () => {
  const resultado = calculadora.dividir(7, 5);
  expect(resultado).toBe(1.4);
  console.log(resultado);
});

test("deve dividir dois números", () => {
  const resultado = calculadora.dividir(7, 0);
  expect(resultado).toBe("Erro");
  console.log(resultado);
});
