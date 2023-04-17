/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);
const newEl = tag => document.createElement(tag);
const container = $('#cardContainer')

//Funcion para creal el elemento div.
const newCard = (obj) => {

    const div = newEl('div');
    div.className = "col-lg-4 col-md-6 col-sm-12 card-img mt-4";

    div.innerHTML = ` 
    <div class="img">
      <img class="w-100 rounded-4 img1" src="${obj.photo}" alt="alternative picture">
    </div>
    <div class="info d-flex justify-content-start mt-3 gap-2">
      <div class="row gap-2 flex-fill">
        <spam class=" ${!obj.superHost ? 'hide':''} ms-2 col-4 text-center px-0 border border-dark rounded-pill text-uppercase sp fw-bold py-1 dk-gray">Super Host</spam>
        <spam class="col-7 text-start tx-gray px-0 gray py-1 type">${obj.type}. ${obj.beds === null ? 0 : obj.beds } beds</spam>
        <spam class="col-12 text-start tx-title mt-gray monrat">${obj.title}</spam>
      </div>
      <div class="d-flex flex-row gap-2">
        <span class="material-symbols-outlined rd-start">
          star
          </span>
          <P class="mb-0 mt-1 raiting">${obj.rating}</P>

        </div>
    </div>
    `
    return div;
}

//funcion para mostrar las localizaciones de la los windbnb
const modalLocation = (cities) => {

  const ul = $('#modalList')



  cities.forEach(elem => {
    const li = newEl('li');

    li.className = `rounded-pill list-header justify-content-center pointer`

    li.innerHTML = `<span class=" px-4 material-symbols-outlined">location_on</span> ${elem}`
  
    ul.appendChild(li);
  })

}


const dataGuest = [...$('.modal').children] 

let finaldata = dataGuest[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[1].childNodes[7].childNodes[0].data
//agregar cantidad de invitados. 

const plus = $('#plus');

plus.addEventListener('click', () =>{

const guest = $('#guestNumber')

finaldata++

guest.innerHTML = finaldata;

return guest
})

//resta
const less = $('#less');

less.addEventListener('click', () =>{

  if(finaldata > 0){

    const guest = $('#guestNumber')

    finaldata--;

    guest.innerHTML = finaldata;
    
  } return
  
 
})
const dataGuestChild = [...$('.modal').children]  

let finaldatachild = dataGuestChild[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[3].childNodes[7].childNodes[0].data;

const plusChild = $('#plusChild');

plusChild.addEventListener('click', () =>{

const guestChild = $('#guestNumberChild')

finaldatachild++

guestChild.innerHTML = finaldatachild;

return guestChild
})

//resta
const lessChild = $('#lessChild');

lessChild.addEventListener('click', () =>{

  if(finaldatachild > 0){

    const guestChild = $('#guestNumberChild')

    finaldatachild--;

    guestChild.innerHTML = finaldatachild;
    
  } return
  
 
})


//nuevas card

const filterCard = (arr) => {

  container.innerHTML = '';

  arr.forEach( elem => {
    const card = newCard(elem);

    container.appendChild(card);
  })

}

export default{
    newCard,
    $,
    modalLocation,
    filterCard
}
