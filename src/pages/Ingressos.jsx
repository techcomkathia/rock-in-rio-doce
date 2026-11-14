import { Link } from 'react-router-dom'
import { lotes, loteAtual, formatarPreco } from '../data/festival.js'

// Um card de lote. Recebe o lote por props.
function CardLote({ lote }) {
  return (
    <>
      <span className="etiqueta">{lote.status}</span>
      <h3>{lote.nome}</h3>
      <p className="linha-preco">Inteira <strong>{formatarPreco(lote.inteira)}</strong></p>
      <p className="linha-preco">Meia <strong>{formatarPreco(lote.meia)}</strong></p>
    </>
  )
}

function Ingressos() {
  return (
    <section className="pagina">
      <h2>Ingressos</h2>
      <p className="descricao">Passe de um dia, válido para todos os palcos. Estamos no {loteAtual.nome}.</p>

      <div className="lotes">
        {lotes.map((lote) => {
          // O lote à venda vira um link para o line-up, onde se compra.
          if (lote.atual) {
            return (
              <Link key={lote.nome} to="/lineup" className="lote lote-atual">
                <CardLote lote={lote} />
                <span className="chamada">Comprar no line-up →</span>
              </Link>
            )
          }

          // Os outros lotes são só informativos.
          const classe = lote.status === 'Esgotado' ? 'lote lote-esgotado' : 'lote'
          return (
            <div key={lote.nome} className={classe}>
              <CardLote lote={lote} />
            </div>
          )
        })}
      </div>

      <p className="observacao">
        Meia-entrada para estudantes, pessoas com 60 anos ou mais e pessoas com deficiência,
        com documento na entrada. Clique no lote à venda para escolher o dia e comprar.
      </p>
    </section>
  )
}

export default Ingressos
