import data from "./data.js";
import dom from "./dom.js";



const showData = await data.getData();
const card = dom.$('#cardContainer')


const cities = data.getCities(showData) ;

//mostrando y creando los tags de las ubicaciones. 
dom.modalLocation(cities);




//recorre los elementos para imprimirlos en pantalla. 
showData.forEach(element => {
    const cards = dom.newCard(element);

    card.appendChild(cards);
});

//traer valores del dom 

const listName =[...dom.$('.modal').children] ;
// empezamos a buscar al elemento li 
const findList =[...listName[0].childNodes[1].childNodes[3].childNodes[7].childNodes[1].children] 

//ya encontrado el elmento li este se pasara por cada elemento a un addEventListener
findList.forEach( elemt => {
    elemt.addEventListener('click',(elem) => {

    const nameData = elem.srcElement.childNodes[1];
        
    const p = dom.$('#city');
         
    p.innerHTML = `${nameData.data}`

    return p
    })
})

//Creando filtro del botton 

findList.forEach(elem => {
    elem.addEventListener('click', (elemt) =>{
        const buttonSearch = dom.$('#btSearch');


const datacity = elemt.srcElement.childNodes[1].data;

console.log(datacity)

    buttonSearch.addEventListener('click', () => {
       
    let filter = datacity;

  
    const finishFiltered = filter === '' ? showData : data.cityFilter(showData,filter);
    console.log(showData)
    console.log(finishFiltered);
    dom.filterCard(finishFiltered)
        })

    })

})

const buttonSearch = dom.$('#btSearch');

    buttonSearch.addEventListener('click', () => {
        const dataGuestChild = [...dom.$('.modal').children]  
    let finaldatachild = dataGuestChild[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[3].childNodes[7].childNodes[0].data
    let numberDataChild = Number(finaldatachild);

    

    const dataGuest = [...dom.$('.modal').children] 
    let finaldata = dataGuest[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[1].childNodes[7].childNodes[0].data
    let numberData = Number(finaldata)

   let suma = numberData + numberDataChild
    
   const maxGuest = suma == 0 ? showData : data.guestFilter(showData, suma)
   
   dom.filterCard(maxGuest);
  

 

    })



   







