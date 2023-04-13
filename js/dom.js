/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);
const newEl = tag => document.createElement(tag);

const newCard = (obj) => {

    const div = newEl('div');
    div.className = "col card-img mt-4";

    div.innerHTML = ` 
    <div class="img">
      <img class="w-100 rounded-4 img1" src="${obj.photo}" alt="alternative picture">
    </div>
    <div class="info d-flex justify-content-start mt-3 gap-2">
      <div class="row gap-2 flex-fill">
        <spam class=" ms-2 col-4 text-center px-0 border border-dark rounded-pill text-uppercase sp fw-bold py-1 dk-gray">${obj.superHost}</spam>
        <spam class="col-7 text-start tx-gray px-0 gray py-1">${obj.type}. ${obj.beds}beds</spam>
        <spam class="col text-start tx-title mt-gray monrat">${obj.title}</spam>
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

export default{
    newCard,
    $
}