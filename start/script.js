/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/

/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
  {
    nome: "Lampada",
    categoria: "Casa",
    prezzo: 24.99,
    rating: 4,
    immagine: "placeholder",
    disponibile: true,
  },
  {
    nome: "Zaino",
    categoria: "Accessori",
    prezzo: 39.9,
    rating: 5,
    immagine: "placeholder",
    disponibile: true,
  },
  {
    nome: "Tastiera",
    categoria: "Tecnologia",
    prezzo: 79.99,
    rating: 4,
    immagine: "placeholder",
    disponibile: false,
  },
  {
    nome: "Borraccia",
    categoria: "Sport",
    prezzo: 18.5,
    rating: 5,
    immagine: "placeholder",
    disponibile: true,
  },
  {
    nome: "Cuffie",
    categoria: "Audio",
    prezzo: 59.0,
    rating: 4,
    immagine: "placeholder",
    disponibile: true,
  },
  {
    nome: "Pennelli",
    categoria: "Arte",
    prezzo: 12.99,
    rating: 4,
    immagine: "placeholder",
    disponibile: true,
  },
  {
    nome: "Ventilatore",
    categoria: "Casa",
    prezzo: 15.49,
    rating: 3,
    immagine: "placeholder",
    disponibile: false,
  },
  {
    nome: "Mouse",
    categoria: "Informatica",
    prezzo: 27.9,
    rating: 5,
    immagine: "placeholder",
    disponibile: true,
  },
  {
    nome: "Giacca",
    categoria: "Abbigliamento",
    prezzo: 64.99,
    rating: 4,
    immagine: "placeholder",
    disponibile: true,
  },
  {
    nome: "Gioco",
    categoria: "Giochi",
    prezzo: 44.9,
    rating: 5,
    immagine: "placeholder",
    disponibile: true,
  },
  {
    nome: "PowerBank",
    categoria: "Tecnologia",
    prezzo: 34.99,
    rating: 4,
    immagine: "placeholder",
    disponibile: false,
  },
  {
    nome: "Tappetino",
    categoria: "Fitness",
    prezzo: 21.99,
    rating: 4,
    immagine: "placeholder",
    disponibile: true,
  },
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const formattaPrezzo = function (name, n) {
  return `${name}: € ${n}`;
};
console.log(formattaPrezzo(prodotti[5].nome, prodotti[5].prezzo));

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const stelline = function (nome, stelle) {
  let rating = "";
  for (let i = 0; i < 5 - stelle; i++) {
    rating = "☆" + rating;
  }
  for (let i = 0; i < stelle; i++) {
    rating = "★" + rating;
  }
  return `${nome}: ${rating}`;
};
console.log(stelline(prodotti[0].nome, prodotti[0].rating));

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const filtro = function (categoria) {
  const prodottiCategoria = [];
  for (let i = 0; i < prodotti.length; i++) {
    if (categoria === prodotti[i].categoria) {
      prodottiCategoria.push(prodotti[i]);
    }
  }
  return prodottiCategoria;
};
console.log(filtro("Tecnologia"));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const filtro2 = function () {
  const prodottiRating = [];
  for (let i = 0; i < prodotti.length; i++) {
    if (prodotti[i].rating >= 3 && prodotti[i].disponibile) {
      prodottiRating.push(prodotti[i]);
    }
  }
  return prodottiRating;
};
console.log(filtro2());

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
