/*
1. Aggiungo variabili prezzo e sconti
2. Creato costante per nome e il bottone genera 
 */
const priceForKm = 0.21;
const underDiscount = 20;
const overDiscount = 40;
const name = document.getElementById('name');
const btnGener = document.getElementById('btn-gener');

btnGener.addEventListener('click',function(){
  console.log(name.value);
  const traveler = name.value;
});


