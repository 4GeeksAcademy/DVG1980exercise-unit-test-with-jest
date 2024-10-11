describe ('fromEuroToDollar',() => {

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); 
})
});
///////////////////////////////////////////////////////////////////////////
describe ('fromDollarToYen',() => {

test("One dollar should be 146.26 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(1);

    const expected = 1 / 156.5;

    // Hago mi comparación (la prueba)
    expect(yenes).toBe(expected);  
})
});
///////////////////////////////////////////////////////////////////////////
describe ('fromYenToPound',() => {

test("One yen should be 179.88 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1);

    const expected = 1 / 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected); 
})
});