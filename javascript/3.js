function lanzamientoDeDados() {
    return Math.floor(Math.random() * 6) + 1;
}

function sumaDados() {
    let dado1 = lanzamientoDeDados();
    let dado2 = lanzamientoDeDados();
    return dado1 + dado2;
}
let suma=[];

for (let i=0;i<50;i++) {
    let resultado=sumaDados();
    suma.push(resultado);
}
for (let i=2; i<=12;i++) {
    let contador=0;
    for (let j=0;j<suma.length; j++) {
        if (suma[j]===i) {
            contador++;
        }
    }
    document.write(`<br>La suma ${i} aparece ${contador} veces`);
}


