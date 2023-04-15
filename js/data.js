/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)

  return data;
}


const getCities = (data) =>{
let cities = data.map(elem => elem.city)

cities = new Set(cities)

cities = [...cities]


return cities
}










export default {
  getData,
  getCities
}