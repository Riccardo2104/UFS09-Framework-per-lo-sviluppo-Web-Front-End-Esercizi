/*
Usa il parametro Rest per estrarre la parte restante Creare una variabile "rest" che conterrà tutto tranne "nome" e 
"cognome"
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




console.log("Variabile rest", rest);