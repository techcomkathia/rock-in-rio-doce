/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

// 1. Criamos o contexto. Pense nele como uma "caixa" que qualquer
//    componente dentro do Provider consegue abrir.
const FestivalContext = createContext()

// 2. O Provider guarda o estado do carrinho e entrega para todo o app.
export function FestivalProvider({ children }) {
  // O carrinho é uma lista de passes.
  // Exemplo: [{ id: 1712, dia: 'Sábado', tipo: 'Meia', preco: 40 }]
  const [carrinho, setCarrinho] = useState([])

  // Adiciona um passe no fim da lista.
  // Nunca alteramos a lista antiga: criamos uma nova com [...antiga, novo].
  function adicionarPasse(dia, tipo, preco) {
    const novoPasse = { id: Date.now(), dia, tipo, preco }
    setCarrinho([...carrinho, novoPasse])
  }

  // Remove o passe que tem esse id.
  // filter devolve uma nova lista só com os passes de id diferente.
  function removerPasse(id) {
    setCarrinho(carrinho.filter((passe) => passe.id !== id))
  }

  // Esvazia o carrinho (usado depois de reservar).
  function limparCarrinho() {
    setCarrinho([])
  }

  // Soma o preço de todos os passes.
  let total = 0
  for (const passe of carrinho) {
    total = total + passe.preco
  }

  // Tudo que estiver em "value" fica disponível para os componentes.
  const value = { carrinho, total, adicionarPasse, removerPasse, limparCarrinho }

  return <FestivalContext.Provider value={value}>{children}</FestivalContext.Provider>
}

// 3. Um atalho para usar o contexto.
//    Em qualquer componente: const { carrinho } = useFestival()
export function useFestival() {
  return useContext(FestivalContext)
}
