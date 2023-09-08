/*
1. Aggiungo variabili prezzo e sconti
2. Creato costante per nome e il bottone genera 
 */
const priceForKm = 0.21;
const underDiscount = 20;
const overDiscount = 40;
const name = document.getElementById('name');
const km = document.getElementById('km');
const btnGener = document.getElementById('btn-gener');
const displayBlock = document.querySelector('.generated-block');

btnGener.addEventListener('click',function(){
  displayBlock.classList.remove('d-none')
  const traveler = name.value;
  const distance = km.value;
  const price = distance * priceForKm;
  document.querySelector('.saluto').innerHTML = traveler;
  document.querySelector('.costo').innerHTML ='€'
  + price;
});
