import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'dbworldcup'
})

connection.connect()

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id / [teams, idteams]} values valores a serem passados para o sql
 * @param {string} rejectMessage mensagem a ser exibida
 * @returns objeto da promise
 */
export const query = (sql, values = '', rejectMessage) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, result) => {
      if (err) return reject(rejectMessage)

      const row = JSON.parse(JSON.stringify(result))
      return resolve(row)
    })
  })
}

export default connection
