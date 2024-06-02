import { useParams } from "react-router-dom";

// Supponiamo di avere un array di prodotti
const prodotti = [
  { id: 1, nome: "iPhone", descrizione: "Smartphone" },
  { id: 2, nome: "MacBook", descrizione: "Laptop" },
  { id: 3, nome: "iPad", descrizione: "Tablet" },
];

export default function DettaglioProdotto() {
  const { id } = useParams();

  // Trova il prodotto corrispondente all'ID della rotta
  const prodottoCliccato = prodotti.find(
    (prodotto) => prodotto.id === parseInt(id),
    // parseInt(id) perchè l'id dell'oggetto è un numero,
    // mentre quello che prendo dall'URL è una stringa!
  );

  if (!prodottoCliccato) {
    return <div>Prodotto non trovato</div>;
  }

  return (
    <div>
      <h2>Pagina dettagli prodotto</h2>
      <h3>{prodottoCliccato.nome}</h3>
      <p>{prodottoCliccato.descrizione}</p>
    </div>
  );
}
