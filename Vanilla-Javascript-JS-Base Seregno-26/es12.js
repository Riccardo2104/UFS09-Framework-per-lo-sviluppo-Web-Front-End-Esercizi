/*
dai un a-capo per spaziare il prossimo comando
estrai da "rest" tramite destrutturazione la proprietà "eta"
durante la destrutturazione rinomina "eta" in "etaPersona"
stampa il valore di etaPersona

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

const { nome, cognome, ...rest } = persona;
console.log('nome', nome);
console.log('cognome', cognome);
console.log('rest', rest);

const{altezza,...etaPersona}= rest

console.log("eta Persona", etaPersona);
