import data from "./data.js";
import dom from "./dom.js";



const showData = await data.getData();
const card = dom.$('#cardContainer')


const cities = data.getCities(showData) ;

dom.modalLocation(cities);

console.log(cities);




showData.forEach(element => {
    const cards = dom.newCard(element);

    card.appendChild(cards);
});



