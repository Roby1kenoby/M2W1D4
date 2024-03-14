/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
I tipi primitivi (elementi base su cui si possono appoggiare tutta una serie di funzioni e operatori) di JavaScript sono i seguenti:
    
    Null --> è un tipo di dato che indica che una specifica variabile è stata creata ed inizializzata con un valore "vuoto", ovvero 
    c'è il contenitore ed è già stato riempito
    
    Undefined --> è un tipo di dato che indica che una specifica variabile è stata creata, ma non è ancora stata inizializzata 
    (c'è il contenitore, ma non ha ancora nessun valore al suo interno) 
    
    String --> definisce un tipo di dato testauale (tecnicamente è un array di lettere)
    
    Number --> definisce un tipo di dato per numeri interi o decimali, che però può arrivare solo fino ad un certo massimo e minimo
    
    BigInt --> anche questo definisce un tipo di dato per numeri interi o decimali, ma che sorpassa i limiti imposti dal tipo Number
    
    Boolean --> definisce un tipo di dato binario (0\1, true false), viene usato di solito per effettuare considerazioni di tipo logico
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.*/

/* SCRIVI QUI LA TUA RISPOSTA 
    È un contenitore malleabile, modificabile in base alle esigenze dell'utente. 
    Può contenere dati sotto forma di coppie chiave valore (i valori possono essere di qualsiasi tipo base di dato tra quelli indicati 
        nella risposta precedente). 
    Un valore id una chiave può anche essere una funzione (insieme di istruzioni richiamabili che svolgono compiti specifici, definiti
        dallo sviluppatore)
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    // così scrivo direttamente in console il risultato dell'addizione
    console.log("la somma di 12 e 20 è " + (12 + 20))

    // posso anche usare delle variabili
    let a = 12
    let b = 20
    let c = a + b
    console.log(`la somma tra ${a} e ${b}, usando delle variabili è ${c}`)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let x = 12
    console.log(`x è uguale a ${x}`)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let name = "Roberto"
    console.log(`Il mio nome, memorizzato nella variabile name, è ${name}`)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    // anche qui, posso scrivere direttamente il valore in console
    console.log("la differenza tra 4 e x è " + (4-x))

    // oppure usare delle variabili
    const fixedValue = 4
    let result = fixedValue - x
    console.log(`la differenza tra 4 e x, messa in una variabile, è ${result}`)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let name1 = "john"
    let name2 = "John"
    
    // lo so che non era il caso di fare una funzione, ma mentre c'ero mi sono impegnato.
    function checkNames(n1, n2){
        if(n1 != n2){
            console.log(`I due nomi (${n1} e ${n2}) sono differenti`)
        }
        else{
            console.log(`I due nomi (${n1} e ${n2}) sono identici`)
        }
    }

    // stessa funzione ma su una sola riga e con condizione di uguaglianza al posto che di disuguaglianza
    function checkNames2(n1,n2){
        return n1 === n2 ? console.log(`I due nomi (${n1} e ${n2}) sono identici`) : console.log(`I due nomi (${n1} e ${n2}) sono differenti`)
    }


    // controllo pre lowercase
    checkNames2(name1, name2)

    // controllo con lowercase
    checkNames2(name1.toLowerCase(), name2.toLowerCase())
    



