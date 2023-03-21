function mayomin(cadena){
let x = cadena.toLowerCase();
let y= cadena.toUpperCase();
if(x===cadena){
    document.write("La cadena ingresada esta en minusculas");
}else if(y===cadena){
    document.write("La cadena ingresada esta en mayusculas");
}else{
    document.write("La cadena ingresada esta en minusculas y mayusculas");
}
}
let cadena=prompt("Ingrese una cadena de caracteres: ");
mayomin(cadena)
