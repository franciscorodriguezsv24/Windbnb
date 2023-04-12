/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);

const newCard = (obj) => {

    const div = document.createElement('div');
    div.className = "div-img";

    div.innerHTML = `
    
    `
}