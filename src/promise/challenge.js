import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1"

const fetchData = (urlApi) => fetch(urlApi);

fetchData(`${API}/products`)
    .then(respone => respone.json())
    .then(products => { console.log(products) })
    .then(() => { console.log("Hola"); })
    .catch(error => console.log(error));