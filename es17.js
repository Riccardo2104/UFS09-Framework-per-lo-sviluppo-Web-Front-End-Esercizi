/*
Estrarre il valore di chiave2 oppure "Non trovato" in una costante di nome "valore"
provare ad eliminare l'array di oggetti "arrayDiOggetti"
ripristinare l'array
provare a cambiare indice (da 1 a 0 o numero eccedente l'array)
*/

const persona = {
  nome: 'Mario',
  array: ['uno', 'due'],
  arrayDiOggetti: [
    { chiave1: 'valore1' },
    { chiave1: 'valore2', chiave2: 'solo qui' },
    { chiave1: 'valore3' },
  ],
  oggetto: { chiave: 'valore' },
  funzione: () => {
    console.log('funzione');
  },
};
const nome = persona?.nome ?? 'Nessuna stringa';
console.log('nome', nome);

const array = persona?.array ?? [];
console.log('array', array);

const valore = persona?.arrayDiOggetti?.[1]?.chiave2 ?? "Non trovato";

console.log("VALORE", valore)