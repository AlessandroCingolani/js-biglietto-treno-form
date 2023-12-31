/*
1. Aggiungo variabili prezzo e sconti
2. Creato costanti per richiamare element o selector 
3. creato variabili dentro la funzione click per prendere con value gli input
4. Faccio calcolo del prezzo
5. Genero random carrozza 
6. printo nell html i valori ottenuti
7. condizionale per vari sconti e print 
8. aggiungo bottone per svuotare dati form
9. fixed il prezzo finale
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
const btnCancel = document.getElementById('cancel');
const displayBlock = document.querySelector('.generated-block');
const errorMessage = document.querySelector('.errorMessage');




// btn for stamp ticket
btnGener.addEventListener('click',function(){

  if(!isNaN(name.value)){
    errorMessage.classList.remove('d-none');
    console.log('Error put string value!');
   }else {
     errorMessage.classList.add('d-none');
     displayBlock.classList.remove('d-none');
     const traveler = name.value;
     const distance = km.value;
     const discountOpz = age.value;
     let price = distance * priceForKm;
     const wagon = (Math.floor(Math.random()*9)+1);
     const cp = Math.floor(Math.random()* (maxCp - minCp +1) + minCp);
   
     if(discountOpz === 'Minorenne'){
       price *= 1 - (underDiscount / 100);
       document.querySelector('.discount').innerHTML = 'Sconto ' + discountOpz;
     }else if (discountOpz === 'Over65'){
       price *= 1 - (overDiscount / 100);
       document.querySelector('.discount').innerHTML = 'Sconto ' + discountOpz;
     }else{
       document.querySelector('.discount').innerHTML = 'Biglietto Standard';
     }
   
   
     document.querySelector('.saluto').innerHTML = traveler;
   
     document.querySelector('.costo').innerHTML ='€'
     + price.toFixed(2);
   
   
     document.querySelector('.wagon').innerHTML = wagon;
   
     document.querySelector('.cp').innerHTML = cp; 
   }
});



btnCancel.addEventListener('click',function(){
  displayBlock.classList.add('d-none');
  km.value ='';
  name.value ='';
  age.value ='Minorenne';
  errorMessage.classList.add('d-none');
});