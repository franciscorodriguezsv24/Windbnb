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

//filtro de ambos.
const buttonSearch3 = dom.$('#btSearch');

    buttonSearch3.addEventListener('click', () => {
        //city
        const datacity = dom.$('.modal').children;
        const citi = datacity[0].childNodes[1].childNodes[3].childNodes[1].childNodes[3].childNodes[0].data;
    console.log(citi)
        //Number
        const dataGuestChild = [...dom.$('.modal').children]  
        let finaldatachild = dataGuestChild[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[3].childNodes[7].childNodes[0].data
        let numberDataChild2 = Number(finaldatachild);
    
        
    
        const dataGuest = [...dom.$('.modal').children] 
        let finaldata = dataGuest[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[1].childNodes[7].childNodes[0].data
        let numberData2 = Number(finaldata)
    
        let suma2 = numberData2 + numberDataChild2


        
            let finishFiltered = citi.innerHTML !== citi && suma2 == 0 ? data.cityFilter(showData,citi):showData
        console.log(citi)
            dom.stayPlaces(citi)

        dom.filterCard(finishFiltered)

        const locationNumber = finishFiltered.length
    
        dom.stayNumber(locationNumber);
    }
    )




    // filtro Max Guests
    const buttonSearch1 = dom.$('#btSearch');
    
        buttonSearch1.addEventListener('click', () => {
            const dataGuestChild = [...dom.$('.modal').children]  
        let finaldatachild = dataGuestChild[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[3].childNodes[7].childNodes[0].data
        let numberDataChild = Number(finaldatachild);
    
        const dataGuest = [...dom.$('.modal').children] 
        let finaldata = dataGuest[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[1].childNodes[7].childNodes[0].data
        const numberData = Number(finaldata)

        const datacity = dom.$('.modal').children;
        const citi = datacity[0].childNodes[1].childNodes[3].childNodes[1].childNodes[3].childNodes[0].data;
    
       const suma = numberData + numberDataChild

        if( suma !== 0 && citi.textContent !== citi){
            const maxGuest = data.guestFilter(showData, suma);

            console.log(maxGuest)

            dom.filterCard(maxGuest)

            const dataFinal = maxGuest.length
      
            dom.stayNumber(dataFinal);
        }else if(suma !== 0 && citi.innerHTML == citi){
       
         const supremeFilter = data.supremeFilter(showData,citi,suma)
         console.log(supremeFilter);


         dom.filterCard(supremeFilter);

         const dataMaxGuests = supremeFilter.length;

         dom.stayNumber(dataMaxGuests);
        }
    })
      
       