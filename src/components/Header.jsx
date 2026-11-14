import { Link, NavLink } from 'react-router-dom'
import { useFestival } from '../context/FestivalContext.jsx'

// NavLink é igual ao Link, mas coloca a classe "active"
// no link da página em que você está. O CSS usa isso para destacar.
function Header() {
  const { carrinho } = useFestival()

  return (
    <header className="header">
      <div className="container header-conteudo">
        <Link to="/" className="logo">RRD</Link>

        <nav className="menu">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/lineup">Line-up</NavLink>
          <NavLink to="/ingressos">Ingressos</NavLink>
        </nav>

        <NavLink to="/carrinho" className="botao-carrinho">
          Carrinho <span className="contador">{carrinho.length}</span>
        </NavLink>
      </div>
    </header>
  )
}

export default Header
