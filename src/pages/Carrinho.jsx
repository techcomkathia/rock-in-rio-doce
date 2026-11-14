import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFestival } from '../context/FestivalContext.jsx'
import { formatarPreco } from '../data/festival.js'

function Carrinho() {
  // Tudo sobre o carrinho vem do contexto.
  const { carrinho, total, removerPasse, limparCarrinho } = useFestival()
  const [reservado, setReservado] = useState(false)

  function reservar() {
    limparCarrinho()
    setReservado(true)
  }

  // Mensagem depois de reservar
  if (reservado) {
    return (
      <section className="pagina">
        <h2>Carrinho</h2>
        <p className="aviso">Reserva feita. Te vejo em Rio Doce!</p>
      </section>
    )
  }

  // Carrinho vazio
  if (carrinho.length === 0) {
    return (
      <section className="pagina">
        <h2>Carrinho</h2>
        <p className="descricao">
          Seu carrinho está vazio. Escolha um dia no <Link to="/lineup">line-up</Link> e adicione o passe.
        </p>
      </section>
    )
  }

  // Carrinho com passes
  return (
    <section className="pagina">
      <h2>Carrinho</h2>
      <p className="descricao">Confira seus passes antes de reservar.</p>

      <ul className="itens-carrinho">
        {carrinho.map((passe) => (
          <li key={passe.id} className="item-carrinho">
            <span>Passe de {passe.dia} · {passe.tipo}</span>
            <strong>{formatarPreco(passe.preco)}</strong>
            <button className="botao-remover" onClick={() => removerPasse(passe.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <div className="total">
        <span>Total <strong>{formatarPreco(total)}</strong></span>
        <button className="botao" onClick={reservar}>
          Reservar {carrinho.length} {carrinho.length === 1 ? 'passe' : 'passes'}
        </button>
      </div>
    </section>
  )
}

export default Carrinho
