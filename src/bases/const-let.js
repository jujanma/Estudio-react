//vbles y constantes

const nombre = "juan";
const apellido = "marin";

let valorDado = 5;
console.log(nombre, apellido, valorDado);

if (true) {
  //Variable de scope, no tira error ya que solo existe aqui adentro
  const nombre = "otro";
  console.log(nombre);
}
