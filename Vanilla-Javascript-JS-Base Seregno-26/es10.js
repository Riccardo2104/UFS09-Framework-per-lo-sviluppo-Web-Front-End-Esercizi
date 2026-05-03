/*
Usa la destrutturazione per estrarre il nome e il cognome
stampa il risultato tramite console.log("variabile",variabile)
*/

const persona = {
  nome: 'Renzo',
  cognome: 'Tramaglino',
  eta: 32,
  altezza: 1.72,
};

// completare il codice

// usa la sintassi a punto per estrarre il nome
const nomePersona = persona.nome;
console.log('nomePersona', nomePersona);

// usa la sintassi a punto per estrarre il cognome
const cognomePersona = persona.cognome;
console.log('cognomePersona', cognomePersona);


const {eta, altezza, ...nomeecognome} = persona;

console.log("Nome e cognome", nomeecognome);