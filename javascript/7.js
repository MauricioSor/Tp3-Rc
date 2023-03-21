function tabla(x){
document.write('<br>Su tabla de multiplicacion es:<br><ul>');
for(let i=1,y=0;i<=10;i++){
    document.write('<li>'+x+' * '+i+' = '+(y=i*x)+'</li>');
}
document.write('<br></ul>');
}
let n= parseInt(prompt("Ingrese el numero del que quiere obtener su tabla:"));
tabla(n);
