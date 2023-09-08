/*
1. Aggiungo variabili prezzo e sconti
2. Creato costanti per richiamare element o selector 
3. creato variabili dentro la funzione click per prendere con value gli input
4. Faccio calcolo del prezzo
5. Genero random carrozza 
6. printo nell html i valori ottenuti
 */
const priceForKm = 0.21;
const underDiscount = 20;
const overDiscount = 40;
const minCp = 90000;
const maxCp = 99999;
const name = document.getElementById('name');
const km = document.getElementById('km');
const age = document.getElementById('age');
const btnGener = document.getElementById('btn-gener');
const displayBlock = document.querySelector('.generated-block');

btnGener.addEventListener('click',function(){
  displayBlock.classList.remove('d-none')
  const traveler = name.value;
  const distance = km.value;
  const discountOpz = age.value;
  const price = distance * priceForKm;
  const wagon = (Math.floor(Math.random()*9)+1);
  const cp = Math.floor(Math.random()* (maxCp - minCp +1) + minCp);



  document.querySelector('.saluto').innerHTML = traveler;
  
  document.querySelector('.costo').innerHTML ='€'
  + price;

  document.querySelector('.discount').innerHTML = discountOpz;

  document.querySelector('.wagon').innerHTML = wagon;

  document.querySelector('.cp').innerHTML = cp;
});
