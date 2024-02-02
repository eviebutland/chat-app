import express from 'express'
import { client } from '../db'

// this would be like a user's view on messenger (before clicking on an individual converation)
export async function getAllConversationsForUser(req: express.Request, res: express.Response) {
    try {
        const result = await client.query(`SELECT * FROM conversations WHERE user_id = ${req.params.id}`)
        console.log(result)
    } catch (error) {
        res.send({ message: 'Something went wrong' })
    }
}

// click on an individual conversation