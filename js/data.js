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

//obtener filtradas las ciudades sin que estas se repitan. 
const getCities = (data) =>{
let cities = data.map(elem => elem.city)

cities = new Set(cities)

cities = [...cities]


return cities
}

const cityFilter = (arr, filter) => {
   let filtered = arr.map( elem => `${elem.city}, ${elem.country}` === filter)

   return filtered
}

const guestFilter = (arr, maxGuest) => {

let filtered = arr.filter(elem => elem.maxGuests == maxGuest )

return filtered
}




export default {
  getData,
  getCities,
  cityFilter,
  guestFilter
}