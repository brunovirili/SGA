/* console.log("Abriendo SGA")

setTimeout(() => {
    console.log("Alumnos cargados")
}, 3000);

console.log("El usuario puede seguir navegando") */

/* function obtenerAlumnos(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Ana", "Juan", "Pedro"])
        }, 3000);
    })
} */

async function prueba(){
const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
console.log(respuesta)
}
prueba();