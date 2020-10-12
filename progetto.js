var nomeUtente = prompt ('Qual è il tuo nome?');
console.log(nomeUtente);
// console.log(2);
// console.log("sono una stringa");
document.getElementById('nome').innerHTML = nomeUtente;


//console.log(document.getElementById('nome').innerHTML);

var cognomeUtente = prompt('Qual è il tuo cognome?');
console.log(cognomeUtente);
document.getElementById('cognome').innerHTML =cognomeUtente;

var colorePreferito = prompt('Qual è il tuo colore preferito?');
console.log(colorePreferito);
document.getElementById('colore').innerHTML = colorePreferito;

var password = nomeUtente + cognomeUtente + colorePreferito + "20";
document.getElementById('password').innerHTML = password;
// mettilo in un elemento usando document.getelementby...
