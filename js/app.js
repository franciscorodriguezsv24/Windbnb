import data from "./data.js";
import dom from "./dom.js";



const showData = await data.getData();
const card = dom.$('#cardContainer')

showData.forEach(element => {
    const cards = dom.newCard(element);

    card.appendChild(cards);
});

