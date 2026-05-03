/*

Estrarre nome
Usare la sintassi a punto per estrarre il nome

estrarre nome OPPURE assegnare "Nessuna stringa"
stampare valore con "console.log"
provare a commentare la proprietà "nome" dell'oggetto
ripristinare nome con annulla (command o control + Z)
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

const nome = persona?.nome ?? "Nessuna stringa";
console.log("valore", nome);

