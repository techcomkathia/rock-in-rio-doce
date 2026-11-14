// Dados fixos do festival. Nada aqui muda enquanto o site está aberto,
// por isso não precisa de useState: é só importar onde for usar.

// Lotes de ingresso. Só um deles tem "atual: true" (o que está à venda).
export const lotes = [
  { nome: '1º lote', status: 'Esgotado', inteira: 60, meia: 30 },
  { nome: '2º lote', status: 'À venda', inteira: 80, meia: 40, atual: true },
  { nome: '3º lote', status: 'Em breve', inteira: 100, meia: 50 },
]

// Atalho para o lote à venda, usado em várias páginas.
export const loteAtual = lotes.find((lote) => lote.atual)

// Os dois dias do festival e os shows de cada um.
// "destaque: true" marca quem fecha a noite.
export const dias = [
  {
    nome: 'Sábado',
    data: '14/03',
    shows: [
      { horario: '16h00', artista: 'Faringes da Paixão', palco: 'Palco da Praça' },
      { horario: '17h00', artista: 'Musa', palco: 'Palco da Praça' },
      { horario: '18h00', artista: 'MC Troia', palco: 'Palco da Praça' },
      { horario: '19h00', artista: 'Shevchenko e Elloco', palco: 'Palco do Terminal' },
      { horario: '20h00', artista: 'Kelvis Duran', palco: 'Palco do Terminal' },
      { horario: '21h00', artista: 'João do Morro', palco: 'Palco do Terminal' },
      { horario: '22h30', artista: 'Conde Só Brega', palco: 'Palco do Terminal', destaque: true },
    ],
  },
  {
    nome: 'Domingo',
    data: '15/03',
    shows: [
      { horario: '17h00', artista: 'Tayara Andreza', palco: 'Palco da Praça' },
      { horario: '18h00', artista: 'Dadá Boladão', palco: 'Palco da Praça' },
      { horario: '19h15', artista: 'Priscila Senna', palco: 'Palco do Terminal' },
      { horario: '20h30', artista: 'MC Loma e as Gêmeas Lacração', palco: 'Palco do Terminal' },
      { horario: '22h00', artista: 'Raphaela Santos', palco: 'Palco do Terminal', destaque: true },
    ],
  },
]

// Transforma um número em texto de dinheiro: 80 -> "R$ 80,00"
export function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
