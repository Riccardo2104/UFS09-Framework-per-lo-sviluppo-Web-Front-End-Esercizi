/*
Spread operator oggetti
Usare lo spread operator per creare un nuovo oggetto

creare un nuovo oggetto "persona" che contiene le proprietà di entrambi gli oggetti
stampare il valore nella console Risultato: il nuovo oggetto deve contenere tutte le proprietà dei precedenti
*/


const anagrafica = {
  nome: 'Renzo',
  cognome: 'Tramaglino',
  eta: 32,
};

const indirizzo = {
  via: 'Dei Bravi',
  numeroCivico: 31,
};

    
const {...anagrafica, ...indirizzo} = persona;

console.log('persona', persona);
//

