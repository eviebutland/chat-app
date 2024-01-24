import { Router } from 'express'
import { getUsers } from './users/get'
const router = Router()

router.get('/users', (req, res) => {
    getUsers(req, res)
})

export default router