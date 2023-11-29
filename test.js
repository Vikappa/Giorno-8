const starWarsCharacters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
    },
    {
        name: 'C-3PO',
        height: 167,
        mass: 75,
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a',
    },
    {
        name: 'R2-D2',
        height: 96,
        mass: 32,
        hair_color: 'n/a',
        skin_color: 'white, blue',
        eye_color: 'red',
        birth_year: '33BBY',
        gender: 'n/a',
    },
    {
        name: 'Darth Vader',
        height: 182,
        mass: 136,
        hair_color: 'none',
        skin_color: 'white',
        eye_color: 'yellow',
        birth_year: '41.9BBY',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 40,
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '19BBY',
        gender: 'female',
    },
    {
        name: 'Owen Lars',
        height: 178,
        mass: 80,
        hair_color: 'brown, grey',
        skin_color: 'light',
        eye_color: 'blue',
        birth_year: '52BBY',
        gender: 'male',
    },
    {
        name: 'Beru Whitesun lars',
        height: 165,
        mass: 75,
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'blue',
        birth_year: '47BBY',
        gender: 'female',
    },
    {
        name: 'R5-D4',
        height: 97,
        mass: 32,
        hair_color: 'n/a',
        skin_color: 'white, red',
        eye_color: 'red',
        birth_year: 'unknown',
        gender: 'n/a',
    },
    {
        name: 'Biggs Darklighter',
        height: 183,
        mass: 75,
        hair_color: 'black',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '24BBY',
        gender: 'male',
    },
    {
        name: 'Obi-Wan Kenobi',
        height: 182,
        mass: 77,
        hair_color: 'auburn, white',
        skin_color: 'fair',
        eye_color: 'blue-gray',
        birth_year: '57BBY',
        gender: 'male',
    },
]

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

.console.log("Prima dell'operazione")
for (let i = 0; i < starWarsCharacters.length; i++) {
    console.log(starWarsCharacters[i].name.length) //Prima dell'operazione
  }
  

// for(let i = 0; i < starWarsCharacters.length ; i++){
//     if(starWarsCharacters[i].gender === "n/a"){
//       starWarsCharacters[i].gender = "Robot"
//     }
//   }

//   for(let i = 0; i < starWarsCharacters.length ; i++){
//     console.log("Personaggio", starWarsCharacters[i].name, "gender:" , starWarsCharacters[i].gender)
//   }

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

// let crewMass = 957
// let qualcuno_non_è_passato_per_la_bilancia = true
// let contagiri = 0;

// while (qualcuno_non_è_passato_per_la_bilancia) {

//     crewMass += starWarsCharacters[contagiri].mass
//     console.log("Ciclo " + contagiri + " crewMass: " + crewMass + " Aggiunto peso membro n°" + (contagiri + 1) + ": kg" + starWarsCharacters[contagiri].mass)

//     contagiri++

//     if (contagiri >= starWarsCharacters.length) {
//         qualcuno_non_è_passato_per_la_bilancia = false
//     }
// }




/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

//  PER LA SCIENZA (non funziona perchè switch case deve fare confronto diretto col valore del case e nessuno di quelli scritti va bene) 
// switch (crewMass) {
//     case (crewMass >= 0 && crewMass < 500):
//       console.log("Ship is under loaded")
//       break;
  
//     case (crewMass >= 500 && crewMass < 700):
//       console.log("Ship is half loaded")
//       break;
  
//     case (crewMass >= 700 && crewMass < 900):
//       console.log("Warning: Load is over 700")
//       break;
  
//     case (crewMass >= 900 && crewMass < 1000):
//       console.log("Critical Load: Over 900")
//       break;
//     case (crewMass >= 1000):
//       console.log("DANGER! OVERLOAD ALERT: escape from ship now!")
//       break;
//     default:
//       console.log("Se leggi questa riga qualcosa è andato molto fuori dal seminato")
//       break;
//   }
  

