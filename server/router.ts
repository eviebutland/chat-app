import { Router } from 'express'
import { getOneUserById, getUsers } from './users/get'
import { createUser } from './users/post'
import { deleteUser } from './users/delete'
import { getAllFriendsByUser, getOneFriendForUser, getAllFriends } from './friends/get'

const router = Router()

router.get('/users', (req, res) => {
    getUsers(req, res)
})
router.get('/users/:id', (req, res) => {
    getOneUserById(req, res)
})
router.post('/users', (req, res) => {
    createUser(req, res)
})
router.delete('/users/:id', (req, res) => {
    deleteUser(req, res)
})

router.get('/users/:user_id/friends/:friend_id', (req, res) => {
    getOneFriendForUser(req, res)
})

router.get('/users/:user_id/friends', (req, res) => {
    getAllFriendsByUser(req, res)
})
router.get('/friends', (req, res) => {
    getAllFriends(req, res)
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