//Ingreso de datos

var diametro = prompt('Ingrese el diametro del círculo en cm para el cual quiere calcular la circunferencia')
const pi=3.1416
var radio=diametro/2
//Calculo


var perimetro=pi*diametro
var area= pi*Math.pow(radio,2)

//mensaje



alert('El area del circulo es '+area+'cm2')
alert('El perimetro del ciruculo es '+perimetro+'cm')