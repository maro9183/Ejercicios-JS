//Ejercicio 1

function ej1(){

//Ingreso de datos
var nombre = prompt('Ingrese su nombre')
var apellido = prompt('Ingrese su apellido')

var mensaje = 'Bienvenido '+nombre+' '+apellido

alert(mensaje)

}

//Ejercicio 1
function ej2(){
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
}

function ej3(){

//Ingreso de datos

var num1 = Number( prompt('Ingrese el primer número'))
var num2 = Number( prompt('Ingrese el segundo número'))
var num3 = Number(prompt('Ingrese el tercer número'))
var num4 = Number (prompt('Ingrese el cuarto número'))

//Calculo

var suma = num1+num2+num3+num4

var promedio = suma/4

//MEnsaje

alert('La suma de los 4 números es '+ suma + ' '+ 'y el promedio es '+ promedio)

}

function ej4(){
    //Ingreso de datos

var horas = prompt('Ingrese la cantidad de horas trabajadas en el mes')
var valorHora = prompt('Ingrese el valor de la hora para el empleado')

//Calculo

alert('El sueldo mensual a pagar es de $'+Number(horas*valorHora))


}

function ej5(){
  //Ingreso de datos

  var horas = Number(prompt('Ingrese la cantidad de horas trabajadas en el mes'))
  var valorHora = Number(prompt('Ingrese el valor de la hora para el empleado'))
  var antig = Number(prompt('Ingrese la antigüedad en la empresa (años)'))

  //Calculo

alert('El sueldo mensual a pagar es de $'+(horas*valorHora)*(1+(0.15*antig)))

}

function ej6(){
     //Ingreso de datos

  var horas = Number(prompt('Ingrese la cantidad de horas trabajadas en el mes'))
  var valorHora = Number(prompt('Ingrese el valor de la hora para el empleado'))
  var antig = Number(prompt('Ingrese la antigüedad en la empresa (años)'))
  var seguros = Number(prompt('Ingrese la cantidad de seguros vendidos en el mes'))
  var seguroMax = Number(prompt('Ingrese el valor del mayor seguro vendido'))

    //Calculo

    var bon1=seguroMax*0.5
    var sueldo=horas*valorHora
    var bonoant=sueldo*0.15*antig
    var bonocant=sueldo*0.25*seguros

    //Mensaje

    alert('El sueldo a pagar es de $'+Number(sueldo+bon1+bonoant+bonocant)+'\n \tEl valor de hora promedio es de $'+Number(sueldo+bon1+bonoant+bonocant)/horas)



/*Realice un programa para calcular e informar el sueldo mensual del empleado, 
teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido, 
un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual 
al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, calcular e 
informar el valor promedio de la hora del empleado
*/
}

function ej7(){
    //ingreso información

    var numero = Number(prompt('Ingrese un número para saber si es par, impar o nulo'))

    //Calculo

    if(numero==0){
        alert('El número es nulo')
        
    }else 
    if (numero%2==0){
        alert('El número ingresado es par')
    }else
           
            alert('El número ingresado es impar')
         
       

}


function ej8(){
    //ingreso información

    var numero = Number(prompt('Ingrese un número para saber si multiplo de 3'))
    if(numero%3===0){
        alert('El número ingresado es múltiplo de 3')
    }else
    alert('El número ingresado no es múltiplo de 3')
}
//Ejercicio 9 con if
function ej9if(){
    
 
    function procesarEntrada(callback){
        var letra=prompt('Ingrese un caracter para saber si es una letra y si es vocal o consonante')
        callback (letra)
    }


    function esLetra(letra) {
      var charLetra = letra.toUpperCase().charCodeAt(0);
      console.log(charLetra > 64 && charLetra < 91);

      if ((charLetra > 64 && charLetra < 91) === true) {
            console.log("es letra");
            var vocales = "AEIOU";
            console.log(letra);
            if(vocales.includes(letra.toUpperCase())) {
                alert("El caracter ingresado es una vocal");
            }else 
            alert("El caracter ingresado es una consonante");
          
            }else
        alert('El caracter ingresado no es una letra')
    }
   
    procesarEntrada(esLetra)

   
}

function ej9(){
    var caracter = prompt('Ingrese un caracter para saber si es una letra y si es vocal o consonante')
    var esChar = caracter.toUpperCase().charCodeAt(0)
    console.log(esChar)
    if((esChar>64 && esChar<91)===true){
        var vocales = 'AEIOU'
        if(vocales.includes(caracter.toUpperCase())){
            alert("El caracter ingresado es una vocal")
        }else
        alert('El caracter ingresado es una consonante')
    }else
        alert('El caracter ingresado no es una letra')
}

/*10. Se le solicita al usuario que ingrese los extremos de un rango numérico y un 
número. Realice un programa para informar si el número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si es número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
enteros.
*/
function ej10(){
   
    var extinf=Number(prompt('Ingrese un número que será el extremo inferior de un rango'))
    var extsup=Number(prompt('Ingrese un número que será el extremo superior de un rango. Debe ser al menos 5 números enteros más grande que el inferior'))
    if((extsup-extinf)<5){
        alert('La diferencia entre el límite inferior y el superior debe ser de al menos 5 números enteros. Vuelva a intentarlo')
        return
    }else
        var numero = Number(prompt('Ingrese un número'))
        var esPar=numero%2===0
        if(numero>=extinf && numero<=extsup && esPar){
            alert('El número ingresado es par')
        }else
            if(numero<=extinf && !esPar || numero>=extsup && !esPar){   
                alert('El numero es impar')
                
            }

        

}

/*11. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice 
un programa para calcular e informar la operación solicitada entre ambos números.*/

function ej11(){
    var num1=Number(prompt('Ingrese el primer número'))
    var num2=Number(prompt('Ingrese el segundo número'))
    var op = prompt('Ingrese un operador matemático \n+  -  *  / ')

    switch (op) {
        case '+':
            alert(num1+num2)
            break;
        case '-':
            alert(num1-num2)
            break;
        case '*':
            alert(num1*num2)
            break;
        case '/':
            alert(num1/num2)
            break;
        default:
            alert('No ingreso un operador correcto')
            
    }

}

/*12. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el 
algoritmo para informar si el triángulo es equilátero, isósceles o escaleno.*/

function ej12(params) {
    var l1=Number(prompt('Ingrese el primer lado de un triangulo'))
    var l2=Number(prompt('Ingrese el segundo lado de un triangulo'))
    var l3=Number(prompt('Ingrese el tercer lado de un triangulo'))

    if(l1===l2 && l2===l3){
       
            alert('El triangulo es equilatero')
        }else 
            if(l1===l3 || l2===l3 || l1===l2){
                alert('El triangulo es isoceles')
            }else
            alert('El triangulo es escaleno')      
}


/*13. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al 
usuario que ingrese la categoría a la que pertenece que define el sueldo básico 
mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las 
horas extras. Se sabe que:
a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 
más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 
más.
Realice un programa para calcular e informar el sueldo mensual del empleado, 
indicando si su sueldo supera o no los u$s 4000*/

function ej13(){
    var categoria=Number(prompt('Ingrese su categoría:\ncategoría 1: u$s 2000, \ncategoría 2: u$s 3000, \ncategoría 3: u$s 4000'))
    var horas=Number(prompt('Ingrese la cantidad de horas extras trabajadas'))
    switch (categoria) {
        case 1:
            if(horas>20){
                alert('El sueldo es de $2500. \n No supera los $4000')
            }else
            alert('El sueldo es de $2000. \n No supera los $4000')
            break;
        case 2: 
            alert('El sueldo es de $3000.\n No supera los $4000')
            break;
        case 3:
            if(horas>30){
                alert('El sueldo es de $5000. \n Supera los $4000')
            }else
                alert('El sueldo es de $4000.\n No supera los $4000')
            break;
        default:
            alert('Ingresó una categoría incorrecta')
    }
}

/*14. Se le solicita al usuario que ingrese 3 números. Realice un programa para informar 
si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.*/


function ej14(){
    var numero=Number(prompt('Ingrese un número de 3 cifras'))
    if(numero/100<1){
        alert('El número ingresado no tiene 3 cifras. Intentelo de nuevo')
        return
    }else
        var div3=numero%3
        var div5=numero%5
        if(div3===0 && div5===0){
            alert('El número ingresado es multiplo de 3 y de 5')
                
        }else
            if(div3===0 && div5!=0){
                alert('El número ingresado es múltiplo de 3 pero no de 5')
            }else
            if(div3!=0 && div5===0){
                alert('El número ingresado es múltiplo de 5 pero no de 3')
            }else
            alert('El número no es múltiplo ni de 3 ni de 5')
}

/*15. Se le solicita al usuario que ingrese los extremos de un rango numérico y una 
cantidad de valores desconocidos.
Realice un programa para informar si cada número está dentro del rango.
Si está en rango, informar si el número es par.
Si no está dentro del rango, informar si es número es impar.
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
enteros*/

function ej15(){
    
    do{
        var extinf=Number(prompt('Ingrese un número que será el extremo inferior de un rango. El numero debe ser mayor a 0'))
    } while(extinf<0)  
    
    do{
        var extsup=Number(prompt('Ingrese un número que será el extremo superior de un rango. Debe ser al menos 5 números enteros más grande que el inferior'))
    } while (extsup<extinf+5)
        
    do{
        var numero=prompt('Ingrese un número cualquiera (Escriba "Dale Lobo" para salir')
        if(numero>=extinf && numero<=extsup){
            if(numero%2===0){
                alert('El número está dentro del rango y es par')
            }else
            alert('El número está dentro del rango y es impar')
        }else
            if(numero<extinf || numero<extsup){
                if(numero%2!=0){
                    alert('El número está fuera del rango y es impar')
                }else
                alert('El número está fuera del rango y es par')
            }


    }while(numero!='Dale Lobo')
       
        
}

/*16. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice 
un programa para calcular e informar cada operación deseada entre los dos números. 
Ese proceso se puede repetir mientras lo desee el usuario. Todos los valores deben ser 
validados.*/
function ej16(){

do{

    do{
    var num1=Math.floor(Number(prompt('Ingrese el primer número para realizar una operación.')))
    }while(num1<0)
    
    do{
    var num2=Number(prompt('Ingrese el segundo número para realizar una operación'))
    }while (num2<0)

    var op = prompt('Ingrese un operador matemático \n+  -  *  / \n0 para salir')

    
    switch (op) {
        case '+':
            
            alert(num1+num2)
            break;
        case '-':
            alert(num1-num2)
            break;
        case '*':
            alert(num1*num2)
            break;
        case '/':
            alert(num1/num2)
            break;
        case '0':
            break;
        default:
            alert('No ingreso un operador correcto')
            
    }
}while(op!=0)
}



/*17. Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una 
comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar:
a. El porcentaje de alumnos aprobados (nota igual o superior a 4).
b. El porcentaje de alumnos desaprobados (nota inferior a 4).
c. El promedio de las notas.
Tenga en cuenta que solamente las notas pueden ir del 1 al 10.
*/
function ej17array(){

var notas = []


    do{
        var nota = prompt('Ingrese la nota del alumno. \nX para calcular')
        console.log('nota '+nota)
        if(nota.toString().toUpperCase()==="X"){
            break
        }else
        if(nota<=10 && nota>=1){
        notas.push(Number(nota))

        console.log(notas)
        }else
        alert('El número de la calificación debe estar entre 1 y 10')
        continue
    }while(nota.toString().toUpperCase()!='X')

    var des = notas.filter(b => b<4).length/notas.length*100
    var ap = notas.filter(a => a>=4).length/notas.length*100
    var promedio=notas.reduce((a,b) => (a+b))/notas.length

    alert('El porcentaje de desaprobados es '+des+"%" +'\nEl porcentaje de aprobados es '+ ap+'%'+ '\nEl promedio de las notas es de: '+promedio+'\nCantidad de alumnos: '+notas.length   )
    


}

function ej17(){

    var ap=0
    var des=0
    var sumanotas=0


    do{
        var nota = prompt('Ingrese la nota del alumno. \nX para calcular')
        if(nota.toString().toUpperCase()==="X"){
            break
        }else
        if(nota<=10 && nota>=1){
            sumanotas+=Number(nota)
            if(nota>4){
                ap++
            }else
                des++
        }else
            alert('El número debe estar entre 1 y 10')

    }while(nota!='X')

    alert('El porcentaje de desaprobados es '+des/(des+ap)+"%" +'\nEl porcentaje de aprobados es '+ ap/(des+ap)+'%'+ '\nEl promedio de las notas es de: '+sumanotas/(des+ap)+'\nCantidad de alumnos: '+(des+ap)   )
}


/*18. Se le solicita al usuario que ingrese una cantidad desconocida de números. Realice 
un programa para calcular e informar:
a. La sumatoria de los valores ingresados.
b. El menor valor ingresado.
c. El mayor valor ingresado.*/

function ej18(){
    var suma=0
    var min=Infinity
    var max=0
    do {
        var num=Number(prompt('Ingrese cualquier número \npresione cualquier letra para continuar'))
        
        num=Number(num)
        
        if(Number.isInteger(num)){
            num=Number(num)
            
            suma+=num
            if(num<min){
                min=num
            }else
                if(num>max){
                    max=num
                }
        }

    } while (Number.isInteger(num));

    alert('La suma de los valores es: '+suma+'\nEl menor valor ingresado fue: '+min+'\nEl mayor valor ingresado fue: '+max)
}


function ej18array(){

    var numeros=[]
    do {
        var num = Number(prompt('Ingrese cualquier número \npresione cualquier letra para continuar'))
        if(Number.isInteger(num)){
        numeros.push(num)
        }else
        break    

    } while (Number.isInteger(num));
  
    var suma=numeros.reduce((a,b) => (a+b))
    var max = numeros.reduce((a,b) => Math.max(a,b))
    var min = numeros.reduce((a,b)=>Math.min(a,b))
    alert('La suma es de: '+suma+'\nEl mínimo es de: '+min+'\nEl máximo es de: '+max)
}


/*19. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, 
M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular 
e informar:
a. El porcentaje de mujeres mayores a 25 años. 
b. El porcentaje de hombres menores de 18 años
c. El promedio de edad de las mujeres. edadMujer/mujeres
d. El promedio de altura de los hombres.
e. La menor edad ingresada. edadesMenor
f. La mayor altura ingresad
*/



function ej19(){
    var hombres=0 //Cuantos hombres
    var mujeres=0 //c)Cuantas mujeres

    var edadesMujer=0 //c) acumula edades de mujeres para promedio 
    var edadMenor=Infinity //E) La menor de las edades H y M 
    var hombresMenor18=0 //b)Acumula cant de hombre menores a 18 años H
    var mujeresMayor25=0 //a)Acumula cant de mujeres mayores a 25 años M

    var alturasHombre=0 //d)Acumula altura de hombres para promedio
    
    var alturaMax=0 //F) La mayor altura H y M
    

    function carga(){
        while (sexo!= "M" && sexo!="H"    ) {
            var sexo=prompt('Ingese H para hombre y M para mujer').toString().toUpperCase()
            if(sexo==='M'){
                mujeres++
                while(!Number.isInteger(edad)){
                    var edad=Number(prompt('Ingrese la edad de la persona'))
                    edadesMujer+=edad
                    
                    if(edad<edadMenor){
                        edadMenor=edad
                    }
                    if(edad>25){
                        mujeresMayor25++
                        console.log('mujeres mayor'+mujeresMayor25)
                    }

                }
                while(!Number.isFinite(altura)){
                    var altura=Number(prompt('Ingrese la altura de la persona'))
                    if(altura>alturaMax){
                        alturaMax=altura
                    }
                }

            }else   
                if(sexo==='H'){
                    hombres++
                    while(!Number.isInteger(edad)){
                        var edad=Number(prompt('Ingrese la edad de la persona'))
                        if(edad<edadMenor){
                            edadMenor=edad
                        }
                        if(edad<18){
                            hombresMenor18++
                            console.log('hombres menor '+hombresMenor18)
    
                        }
                    }
                    while(!Number.isFinite(altura)){
                        var altura=Number(prompt('Ingrese la altura de la persona'))
                        alturasHombre+=altura
                        if(altura>alturaMax){
                            alturaMax=altura
                        }
                    }
                }
          
        } 
        
       

    }

    do{
    
        carga()
        
        //console.log(datos)
        var continua=prompt('Desea cargar una persona más?','SI')
        
    
    }while(continua==='SI')

    alert(`% mujeres >25: ${(mujeresMayor25 / mujeres) * 100}% \n% Hombres <18: ${(hombresMenor18 / hombres) * 100} \n Promedio edad mujeres: ${Math.floor(edadesMujer/mujeres)}\n Promedio altura hombres ${alturasHombre/hombres}\n Menor edad: ${edadMenor}\n Mayor altura: ${alturaMax}`)


}
function ej19array(){

    
      
//Defino función carga que voy a llamar en el Dowhile. Crea el objeto persona, carga los datos. 
function carga(){   
    
    //constructor persona
    class persona {
        constructor(sexo, edad, altura) {
            this.sexo = sexo
            this.edad = edad
            this.altura = altura
        }
    }

//Ingreso sexo
while (sexo!= "M" && sexo!="H"    ) {
    var sexo=prompt('Ingese H para hombre y M para mujer').toString().toUpperCase()
  
} 
//Ingreso edad
while(!Number.isInteger(edad)){
    var edad=Number(prompt('Ingrese la edad de la persona'))
}
//Ingreso altura
while(!Number.isFinite(altura   )){
    var altura=Number(prompt('Ingrese la altura de la persona'))

}
//Creo nuevo elemento como los datos extraidos
nuevo= new persona(sexo,edad,altura) 

//Funcion que corre 
}

//Creo el arreglo Datos para ingresar los datos 
var datos = []

do{
    
    carga()
    datos.push(nuevo)
    //console.log(datos)
    var continua=prompt('Desea cargar una persona más? 1 para continuar','1')
    

}while(continua==='1')






var mujeres=datos.filter((datomuj) => (datomuj.sexo==='M'))

console.log(mujeres)

var hombres=datos.filter((datohom) => (datohom.sexo==='H'))

console.log(hombres)

var muj25=(datos.filter((datom) => (datom.sexo==='M',datom.edad>25)).length) / mujeres.length*100

console.log(muj25)

var hom18=(datos.filter((datoh) => (datoh.sexo==='H',datoh.edad<18)).length) / hombres.length*100

console.log(hom18)

var proedmu=mujeres.reduce((a,b) => (a+b.edad),0)/mujeres.length

var proalthom=hombres.reduce((a,b) => a+b.altura,0)/hombres.length

var menoredad=datos.reduce((a,b) => Math.min(a,b.edad),Infinity)

console.log(menoredad)

var mayoraltura=datos.reduce((a,b) => Math.max(a,b.altura),0)

console.log(mayoraltura)


alert('El porcentaje de mujeres mayores a 25 años es: '+muj25+'%'+
'\nEl porcentaje de hombres menores de 18 años es: '+hom18+'%'+
'\nEl promedio de edad de las mujeres es: '+proedmu+
'\nEl promedio de altura de los hombres '+proalthom+
'\nLa menor edad ingresada '+menoredad+
'\nLa mayor altura ingresad '+mayoraltura)

console.log('El porcentaje de mujeres mayores a 25 años es: '+muj25+'%'+
'\nEl porcentaje de hombres menores de 18 años es: '+hom18+'%'+
'\nEl promedio de edad de las mujeres es: '+proedmu+
'\nEl promedio de altura de los hombres '+proalthom+
'\nLa menor edad ingresada '+menoredad+
'\nLa mayor altura ingresad '+mayoraltura)

}
