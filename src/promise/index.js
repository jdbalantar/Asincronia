//* Nos regresa una funcion con dos funciones dentro - Resolve - Reject

const cows = 9;

/**
 ** @esolve -> Es la función que se ejecuta cuando funciona la solicitud
 ** @reject -> Es la función que se ejecuta cuando falla la solicitud
 */
const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`Tenemos ${cows} vacas en la granja`)
    } else {
        reject("No contamos con esas vacas en la granja")
    }
})

/** 
 ** @then -> Es la función con la que obtenemos el resultado arrojador por @resolve
 ** @catch -> Es la función con obtenemos el error arroojado por @reject
 ** @finally -> Es el código que se ejecuta sin importar el resultado
 * @*/
countCows.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Finally");
})