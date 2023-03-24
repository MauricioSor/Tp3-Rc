function paridad (n){
let x=n%2;
if(x==0){
    document.write("El numero es par");
}else{
    document.write("El numero es impar");
}
}
let n= parseInt(prompt("Ingrese un numero: "));
paridad(n);