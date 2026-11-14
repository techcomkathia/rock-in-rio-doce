import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Lineup from './pages/Lineup.jsx'
import Ingressos from './pages/Ingressos.jsx'
import Carrinho from './pages/Carrinho.jsx'

// O Header e o Footer aparecem em todas as páginas.
// Só o conteúdo do <main> muda de acordo com o endereço.
function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
