import { Router } from 'express'
import { getOneUserById, getUsers } from './users/get'
import { createUser } from './users/post'

const router = Router()

router.get('/users', (req, res) => {
    getUsers(req, res)
})

router.get('/users/:id', (req, res) => {
    getOneUserById(req, res)
})

router.post('/users', (req, res) => {
    console.log(req.body)
    createUser(req, res)
})


// ENDPOINTS:
// Login + logout
// Add a friend connection (not currently able in two tables)


// USERS:
// Get one by id
// Get all
// POST new user
// Delete user 


// MESSAGING:
// Create a new chat 
// Send a message
// Delete a chat
// Delete a message

export default router