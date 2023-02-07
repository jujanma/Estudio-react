const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zipcode: 55321457,
    lat: 14.32,
    long: 15.32,
  },
};

const persona2 = { ...persona };
persona2.nombre = "Peter";
console.log({ persona });
console.log(persona2);
