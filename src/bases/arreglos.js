//arrays; coleccion de info que esta en una misma vble

// const arreglo = new Array();
const arreglo = [1, 2, 3, 4];
// arreglo.push(1); mejor usar spread que el push

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map((numero) => {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
