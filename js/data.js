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

const cityFilter = (getData, filter) => {
   let filtered = getData.filter( elem => `${elem.city}, Finland` == filter.trim())

   return filtered
}


const guestFilter = (arr, maxGuest) => {

let filtered = arr.filter(elem => elem.maxGuests >= maxGuest )

return filtered
}

const supremeFilter = (arr,citi,maxGuest) => {

  let filtered = arr.filter (elem => `${elem.city}, Finland` == citi.trim() && elem.maxGuests >= maxGuest )

  return filtered
}




export default {
  getData,
  getCities,
  cityFilter,
  guestFilter,
  supremeFilter
}