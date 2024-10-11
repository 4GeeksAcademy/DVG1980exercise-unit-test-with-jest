const fromEuroToDollar = function(valor_Euro) {
    let valor_Dollar = valor_Euro * 1.07;
    return valor_Dollar;
}

const fromDollarToYen = function(valor_Dollar) {
    let valor_Yen = valor_Dollar / 156.5;
    return valor_Yen;
}

const fromYenToPound = function(valor_Yen) {
    let valor_Pound = valor_Yen / 0.87;
    return valor_Pound; 
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };