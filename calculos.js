module.exports = {
    kelvin: function(valor) {
    return (273.15 + parseFloat(valor));
    },
    fahrenheit: function (valor){
    return ((valor * 9/5) + 32);
    }
   };