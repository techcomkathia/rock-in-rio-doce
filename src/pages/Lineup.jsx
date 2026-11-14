import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFestival } from '../context/FestivalContext.jsx'
import { dias, loteAtual, formatarPreco } from '../data/festival.js'

function Lineup() {
  // Estado LOCAL: só esta página precisa saber qual aba está aberta.
  // 0 = Sábado, 1 = Domingo
  const [diaEscolhido, setDiaEscolhido] = useState(0)
  const [aviso, setAviso] = useState('')

  // Estado GLOBAL: vem do contexto, porque o carrinho é usado em várias páginas.
  const { adicionarPasse } = useFestival()

  const dia = dias[diaEscolhido]

  function trocarDia(indice) {
    setDiaEscolhido(indice)
    setAviso('')
  }

  function comprar(tipo, preco) {
    adicionarPasse(dia.nome, tipo, preco)
    setAviso(`Passe de ${dia.nome} (${tipo}) adicionado.`)
  }

  return (
    <section className="pagina">
      <h2>Line-up</h2>
      <p className="descricao">Escolha o dia e adicione o passe ao carrinho.</p>

      {/* Abas dos dias */}
      <div className="abas">
        {dias.map((d, indice) => (
          <button
            key={d.nome}
            className={indice === diaEscolhido ? 'aba aba-ativa' : 'aba'}
            onClick={() => trocarDia(indice)}
          >
            {d.nome} <small>{d.data}</small>
          </button>
        ))}
      </div>

      {/* Lista de shows do dia escolhido */}
      <ol className="lista-shows">
        {dia.shows.map((show) => (
          <li key={show.artista} className={show.destaque ? 'show show-destaque' : 'show'}>
            <span className="horario">{show.horario}</span>
            <span className="artista">{show.artista}</span>
            <span className="palco">{show.palco}</span>
          </li>
        ))}
      </ol>

      {/* Dois cards: inteira e meia */}
      <div className="cards-passe">
        <div className="card-passe">
          <h3>Passe de {dia.nome} · Inteira</h3>
          <p className="preco">{formatarPreco(loteAtual.inteira)}</p>
          <button className="botao" onClick={() => comprar('Inteira', loteAtual.inteira)}>
            Adicionar ao carrinho
          </button>
        </div>

        <div className="card-passe">
          <h3>Passe de {dia.nome} · Meia</h3>
          <p className="preco">{formatarPreco(loteAtual.meia)}</p>
          <button className="botao" onClick={() => comprar('Meia', loteAtual.meia)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>

      {/* Só aparece depois de adicionar um passe */}
      {aviso && (
        <p className="aviso">
          {aviso} <Link to="/carrinho">Ir para o carrinho</Link>
        </p>
      )}
    </section>
  )
}

export default Lineup
