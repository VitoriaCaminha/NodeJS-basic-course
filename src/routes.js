import { Router } from 'express'
import TeamsController from './app/controllers/TeamsController.js'

const router = Router()

// Rota padrão ou raiz
router.get('/', (req, res) => {
  res.send('Olá!')
})

// Outras rotas
router.post('/selecoes', TeamsController.store)
router.get('/selecoes/:idteams', TeamsController.show)
router.get('/selecoes', TeamsController.index)
router.put('/selecoes/:idteams', TeamsController.update)
router.delete('/selecoes/:idteams', TeamsController.delete)

export default router
