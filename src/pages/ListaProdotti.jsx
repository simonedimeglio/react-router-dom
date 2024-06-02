import { useNavigate } from "react-router-dom";

export default function ListaProdotti() {
  const navigazione = useNavigate();

  function vaiAlProdotto(prodottoId) {
    // Naviga alla rotta "/prodotti/:prodottoId"
    navigazione(`/prodotti/${prodottoId}`);
  }

  return (
    <ul>
      <li onClick={() => vaiAlProdotto(1)}>Prodotto 1</li>
      <li onClick={() => vaiAlProdotto(2)}>Prodotto 2</li>
      <li onClick={() => vaiAlProdotto(3)}>Prodotto 3</li>
    </ul>
  );
}
