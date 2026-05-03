/*
Estrarre array oppure array vuoto
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




