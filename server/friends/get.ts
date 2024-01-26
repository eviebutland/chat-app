import express from 'express'
import { client } from '../db'

export async function getAllFriends(req: express.Request, res: express.Response) {
    try {
        const result = await client.query('SELECT * FROM friends')
        res.send({ data: result.rows })

    } catch (error) {
        res.send({ message: 'Something went wrong', error })

    }
}

export async function getOneFriendForUser(req: express.Request, res: express.Response) {
    if (req.params.friend_id !== ":friend_id" && req.params.user_id !== ':user_id') {
        try {
            const result = await client.query(`SELECT * FROM friends WHERE adressee_id = ${req.params.friend_id} 
            AND requester_id = ${req.params.user_id}`)

            const friendId = result.rows[0].adressee_id
            const friend = await client.query(`SELECT * FROM users WHERE user_id = ${friendId}`)

            res.send({ data: friend.rows })
        } catch (error) {
            res.send({ message: 'Something went wrong', error })
        }
    } else {

        res.send({ message: 'Please provide a user id' })
    }
}

export async function getAllFriendsByUser(req: express.Request, res: express.Response) {
    if (req.params.user_id !== ':user_id') {

        try {
            const result = await client.query(`SELECT * FROM friends WHERE requester_id = ${req.params.user_id}`)
            const friendIds = result.rows.map(row => row.adressee_id).join(',')
            const friends = await client.query(`SELECT * FROM users WHERE user_id in (${friendIds})`)

            res.send({ data: friends.rows })
        } catch (error) {
            res.send({ message: 'Something went wrong', error })
        }
    } else {
        res.send({ message: 'Please provide a user id' })

    }
}