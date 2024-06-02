# React Router DOM

React Router DOM è una libreria molto popolare per React che consente la gestione del routing nelle applicazioni web. Permette di creare un sistema di navigazione nell'applicazione e di associare componenti React a percorsi URL specifici.

## Punti chiave di React Router DOM

1. **Routing**: Il Routing permette di definire diverse rotte all'interno dell'applicazione e associare a ogni rotta un componente React specifico. Quando l'utente naviga su un determinato URL, il componente che abbiamo associato a quella rotta viene renderizzato.
2. **Link & NavLink**: Questi componenti consentono di creare link di navigazione all'interno dell'applicazione (*NavLink, nel dettaglio, permette di aggiungere uno stile CSS specifico al link quando corrisponde alla rotta attuale*).
3. **Parametri delle route**: È possibile specificare dei "segmenti" dinamici nelle rotte (**ad esempio, /prodotti/:id**) per poi andare a recuperare i valori di questi parametri all'interno dei componenti che abbiamo associato a quella rotta.
4. **Query relative ai parametri**: Possiamo leggere e gestire i parametri dinamici nella URL corrente.
5. **Rotte innestate**: React Router DOM ci permette di definire rotte annidate, utili per creare layout complessi con componenti nidificati.
6. **Navigazione programmatica**: È possibile navigare tra le rotte programmaticamente utilizzando metodi proprietari.
7. **Gestione dello stato di navigazione**: React Router DOM gestisce lo stato di navigazione dell'applicazione, consentendo funzionalità come il pulsante "Indietro" classico dei browser.

## Installazione

Per installare React Router DOM è necessario lanciare il seguente comando:

```
npm install react-router-dom
```

## Il tag `<BrowserRouter>` (`<Router>`)

Il componente `<Router>` (se lo importiamo dichiarandolo così: `BrowserRouter as Router`) in React Router DOM è fondamentale per abilitare il routing. Senza questo tag, non possiamo far funzionare la navigazione tra le diverse rotte.

## Il tag `<Routes>`

Serve principalmente come contenitore per le `<Route>` individuali. La sua funzione principale è assicurare che solo una delle rotte definite come figli venga renderizzata in base all'URL corrente. Ciò significa che se più `<Route>` corrispondono all'URL, solo il primo elemento `<Route>` corrispondente sarà renderizzato. Questo comportamento è diverso da quello che si otterrebbe avvolgendo le `<Route>` direttamente in un elemento `div` o qualsiasi altro elemento HTML, poiché in quel caso tutte le rotte corrispondenti verrebbero renderizzate.

## Il tag `<Route>`

Il componente `<Route>` in React Router DOM associa un URL e il componente React che deve essere renderizzato quando l'URL corrisponde a quel percorso.

## Funzione `useNavigate`

`useNavigate` restituisce una funzione che può essere chiamata per cambiare l'URL corrente dell'applicazione e renderizzare la rotta corrispondente. Questa funzione di navigazione può essere utilizzata in qualsiasi componente React all'interno della nostra app, senza dover passare oggetti di navigazione come prop.

## Funzione `useParams`

La funzione useParams fornisce un modo semplice per recuperare i parametri di rotta dall'URL corrente. Viene utilizzato all'interno di un componente reso da una <Route> con un percorso dinamico come /prodotti/:id`.

## Struttura del progetto

Questo progetto di esempio utilizza React Router DOM per creare una semplice applicazione web con diverse pagine e una gestione dei dettagli dei prodotti. La struttura delle cartelle è la seguente:

```
src/
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contatti.jsx
│   ├── Pagina404.jsx
│   ├── ListaProdotti.jsx
│   └── DettaglioProdotto.jsx
├── App.jsx
└── ...
```

- `pages/`: Questa cartella contiene i componenti React che rappresentano le diverse pagine dell'applicazione.
- `App.jsx`: Questo file configura le rotte dell'applicazione e include la navigazione principale.

## Funzionamento dell'applicazione

Quando l'applicazione viene avviata, il componente `App.jsx` viene renderizzato. Questo componente contiene il `<BrowserRouter>` che abilita il routing, una barra di navigazione con `<Link>`, e le `<Route>` che associano le diverse URL ai componenti delle pagine.

Quando un utente clicca su un link della barra di navigazione, React Router DOM gestisce la navigazione e renderizza il componente corrispondente all'URL selezionato.

Ad esempio, quando un utente visita `/prodotti`, viene renderizzato il componente `ListaProdotti.jsx`. Questo componente utilizza l'hook `useNavigate` per gestire la navigazione programmatica verso la pagina dei dettagli del prodotto quando l'utente clicca su un elemento della lista.

Quando l'utente clicca su un prodotto nella lista, la funzione `vaiAlProdotto` viene chiamata con l'ID del prodotto corrispondente. Questa funzione utilizza `useNavigate` per modificare l'URL corrente aggiungendo l'ID del prodotto al percorso `/prodotti/:id`. Ciò fa in modo che React Router DOM renderizzi il componente `DettaglioProdotto.jsx` associato a quella rotta.

All'interno di `DettaglioProdotto.jsx`, l'hook `useParams` viene utilizzato per recuperare l'ID del prodotto dall'URL corrente. Quindi, il componente cerca il prodotto corrispondente nell'array `prodotti` e ne visualizza i dettagli.

Se l'utente naviga su un URL non valido, viene renderizzato il componente `Pagina404.jsx` per gestire il caso di pagina non trovata.

Questa applicazione di esempio dimostra come React Router DOM semplifica la gestione del routing e della navigazione nelle applicazioni web create con React.
