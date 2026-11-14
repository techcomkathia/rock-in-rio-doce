import { Link } from 'react-router-dom'
import { dias, loteAtual, formatarPreco } from '../data/festival.js'

function Inicio() {
  // Conta quantos shows existem somando os dois dias.
  const totalDeShows = dias[0].shows.length + dias[1].shows.length

  return (
    <section className="pagina">
      <img
        className="banner"
        src="/banner.png"
        alt="Rock in Rio Doce: um caranguejo com teclado de piano na boca, luzes de palco e a plateia"
      />

      <div className="info">
        <p>Rio Doce, Olinda – PE. Sim, esse Rio Doce.</p>
        <p><strong>14 e 15 de março</strong> · Portões às 15h30</p>
      </div>

      <div className="atalhos">
        <Link to="/lineup" className="atalho">
          <strong>Ver line-up</strong>
          <span>{totalDeShows} shows em 2 dias, do brega ao bregafunk.</span>
        </Link>
        <Link to="/ingressos" className="atalho">
          <strong>Ver preços</strong>
          <span>{loteAtual.nome} à venda: passe do dia por {formatarPreco(loteAtual.inteira)}.</span>
        </Link>
      </div>
    </section>
  )
}

export default Inicio
