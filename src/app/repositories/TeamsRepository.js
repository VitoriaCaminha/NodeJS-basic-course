import { query } from '../database/connection.js'

class TeamsRepository {
  create (teams) {
    const sql = 'INSERT INTO teams SET ?;'
    return query(sql, teams, 'Não foi possível cadastrar')
  }

  findAll () {
    const sql = 'SELECT * FROM teams;'
    return query(sql, 'Não foi possível queryar')
  }

  findById (idteams) {
    const sql = 'SELECT * FROM teams WHERE idteams=?;'
    return query(sql, idteams, 'Não foi possível encontrar')
  }

  update (teams, idteams) {
    const sql = 'UPDATE teams SET ? WHERE idteams=?;'
    return query(sql, [teams, idteams], 'Não foi possível atualizar')
  }

  delete (idteams) {
    const sql = 'DELETE FROM teams WHERE idteams=?;'
    return query(sql, idteams, 'Não foi possível deletar')
  }
}

export default new TeamsRepository()
