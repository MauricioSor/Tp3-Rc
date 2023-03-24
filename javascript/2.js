let ciudades=[]
while(confirm("Presione cancelar para terminar")!== false){
    ciudades.push(prompt("Ingrese nombre de ciudad:"));
}
document.write('Las ciudades ingresadas son: '+ciudades+'<br> Tiene un tamaño de: '+ciudades.length+' Elementos<br>Primer elemento :'+ciudades[0]+'<br>Tercer elemento: '+ciudades[2]+'<br>Ultimo elemento: '+ciudades[ciudades.length-1]+'<br>El que ocupa la segunda posicion es: '+ciudades[1]);
ciudades.push('Paris');
document.write('<br>El ultimo es: '+ciudades[ciudades.length-1]);
ciudades.splice(1,0,'Barcelona');
document.write('<br>Nueva lista de elementos: '+ciudades);