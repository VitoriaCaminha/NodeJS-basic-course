import TeamsRepository from '../repositories/TeamsRepository.js'

class TeamsController {
  async index (req, res) {
    // res.status(200).send(selecoes)

    // const sql = 'SELECT * FROM teams;'
    // connection.query(sql, (err, result) => {
    //   if (err) {
    //     res.status(404).json({ erro: err })
    //   } else {
    //     res.status(200).json(result)
    //   }
    // })

    const row = await TeamsRepository.findAll()
    res.json(row)
  }

  async show (req, res) {
    // id é um parametro da url
    // res.status(200).json(buscarSelecaoPorId(req.params.id))

    // const idteams = req.params.idteams
    // const sql = 'SELECT * FROM teams WHERE idteams=?;'
    // connection.query(sql, idteams, (err, result) => {
    //   const row = result[0]
    //   if (err) {
    //     res.status(404).json({ erro: err })
    //   } else {
    //     res.status(200).json(row)
    //   }
    // })

    const idteams = req.params.idteams
    const row = await TeamsRepository.findById(idteams)
    res.json(row)
  }

  async store (req, res) {
    // selecoes.push(req.body)
    // res.status(201).send('Seleção adicionada com sucesso!')

    // const teams = req.body
    // const sql = 'INSERT INTO teams SET ?;'
    // connection.query(sql, teams, (err, result) => {
    //   if (err) {
    //     res.status(400).json({ erro: err })
    //   } else {
    //     res.status(201).json(result)
    //   }
    // })

    const teams = req.body
    const row = await TeamsRepository.create(teams)
    res.json(row)
  }

  async update (req, res) {
    // altera o conteúdo
    // let index = buscarIndexSelecao(req.params.id)
    // selecoes[index].selecao = req.body.selecao
    // selecoes[index].grupo = req.body.grupo
    // res.json(selecoes)

    // const idteams = req.params.idteams
    // const teams = req.body
    // const sql = 'UPDATE teams SET ? WHERE idteams=?;'
    // connection.query(sql, [teams, idteams], (err, result) => {
    //   if (err) {
    //     res.status(400).json({ erro: err })
    //   } else {
    //     res.status(201).json(result)
    //   }
    // })

    const idteams = req.params.idteams
    const teams = req.body
    const row = await TeamsRepository.update(teams, idteams)
    res.json(row)
  }

  async delete (req, res) {
    // let index = buscarIndexSelecao(req.params.id)
    // selecoes.splice(index, 1)
    // res.send(`Selecao com id ${req.params.id} excluida com sucesso!`)

    // const idteams = req.params.idteams
    // const sql = 'DELETE FROM teams WHERE idteams=?;'
    // connection.query(sql, idteams, (err, result) => {
    //   if (err) {
    //     res.status(404).json({ erro: err })
    //   } else {
    //     res.status(200).json(result)
    //   }
    // })

    const idteams = req.params.idteams
    const row = await TeamsRepository.delete(idteams)
    res.json(row)
  }
}

// Padrão Singleton
export default new TeamsController()
