var Calculadora = {
    adicionar: function(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            return 0;
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        
        return num1+num2;
    },

    subtrair: function(num1, num2){
        return 0;
    },

    dividir: function(num1, num2){
        return 0;
    },

    multiplicar: function(num1, num2){
        return 0;
    },
};

//Usado na funcção 'require'do NodeJS
if(typeof module!=='undefined' && typeof module.exports!=='undefined'){
    module.exports = Calculadora;
}