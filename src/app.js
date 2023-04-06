// Bibliotecas
import express from 'express'
import routes from './routes.js'

const app = express()

// Indicar para o express ler a body com json
app.use(express.json())

// usar o router
app.use(routes)

// mock
// const selecoes = [
//   { id: 1, selecao: 'Brasil', grupo: 'G' },
//   { id: 2, selecao: 'Suíça', grupo: 'G' },
//   { id: 3, selecao: 'Camarões', grupo: 'G' },
//   { id: 4, selecao: 'Sérvia', grupo: 'G' }
// ]

// Função auxiliar
function buscarSelecaoPorId (id) {
  // O returno é um objeto a partir do id
  return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao (id) {
  // Busca a posição (index) do elemento no array por id
  return selecoes.findIndex(selecao => selecao.id == id)
}

// Curso anterior
// app.get('/usuario', (req, res) => {
//   return res.send('Esses são os seus usários')
// })

// app.get('/cliente', (req, res) => {
//   console.log(req.query.cliente)
//   return res.send(req.query.cliente)
// })

export default app
// module.exports = app
