/*
Usare lo spread operator per unire 2 array

creare un nuovo array di nome "tutti"
usare lo spread operator per far confluire entrambi gli array
*/

const principali = ['Renzo', 'Lucia'];
const secondari = ['Griso', 'Don Abbondio', 'Don Rodrigo'];


const tutti = [...principali, ...secondari];

console.log("ttuti", tutti);