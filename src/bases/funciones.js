//Funciones JS
const saludar=function(nombre){
    return `Hola ${nombre}`
}
//arrow function
const saludar2 = (nombre)=>{
    return `Hola ${nombre}`
};
const saludar3 = (nombre)=>`Hola ${nombre}`;

console.log(saludar2("Juan Manuel"))



const getUser = ()=>{
    return{
        uid: 'ABC123',
        username: 'El_papi1502',
    }
};

console.log(getUser())

//Tarea
//1. convertir a funcion flecha


const getUsuarioActivo =(nombre)=>{
    ({
        uid:'ABC567',
        username:nombre,
    })
};

const usuarioActivo = getUsuarioActivo('Ferxxo');
console.log(usuarioActivo);