const calculadora = require("../calculadora");

//console.log(calculadora.suma);

/* test("debe sumar  a + b", () => {
    expect(calculadora.suma(10, 10)).toBe(20)
})

test("debe restar a - b", () => {
    expect(calculadora.resta(20, 10)).toBe(10)

})
test("debe multiplicar a * b", () => {
    expect(calculadora.multiplicacion(10, 10)).toBe(100)

})
test("debe dividir a / b", () => {
    expect(calculadora.division(2, 2)).toBe(1)

})


 */


test("Prueba toda la calculadora", () => {
    expect(calculadora.resta(2, 2)).toBe(0)
    expect(calculadora.suma(2, 2)).toBe(4)
    expect(calculadora.division(2, 2)).toBe(1)
    expect(calculadora.multiplicacion(2, 2)).toBe(5)
})