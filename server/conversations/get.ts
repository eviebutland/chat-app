import express from 'express'
import { client } from '../db'

export async function getAllConversationsForUser(req: express.Request, res: express.Response) {
    try {
        const result = await client.query('SELECT * FROM conversations WHERE user_id = ${req.params.id}')
    } catch (error) {
        res.send({ message: 'Something went wrong' })
    }
}