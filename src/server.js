import app from './app.js'

const PORT = process.env.PORT || 3000

// Escutar a porta
// app.listen(3000) // Método
app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})

// // Fazer a conexao
// connection.connect(error => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('Conexão realizada com sucesso!')

//     // Escutar a porta
//     // app.listen(3000) // Método
//     app.listen(PORT, () => {
//       console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
//     })
//   }
// })
