

var array=[2,5,7,8,3]

console.log(array)

var promedio=array.reduce((a,b)=>(a+b))/array.length

console.log(promedio)

var des = array.filter(a => a<4).length/array.length

var ap = array.filter(a => a>4).length/array.length

console.log(ap)