
function perimetro(x,y){
let p=2*(x+y);
document.write('El perimetro del triangulo es: '+p);
}
let lados= parseInt(prompt("Ingrese lados del triangulo: "));
let base= parseInt(prompt("Ingrese el lado de la base: "));
perimetro(lados,base);