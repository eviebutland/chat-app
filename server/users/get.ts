import { client } from '~/server/db.js'
import express from 'express'

export async function getUsers(req: express.Request, res: express.Response) {
    try {
        const result = await client.query('SELECT * FROM users')

        res.send({ data: result.rows })
    } catch (error) {
        res.send({ message: 'Error', error })
    }
}

export async function getOneUserById(req: express.Request, res: express.Response) {
    if (req.params.id !== ':id') {
        try {
            const result = await client.query(`SELECT * FROM users
            WHERE user_id = ${req.params.id}`)

            res.send({ data: result.rows })
        } catch (error) {
            res.send({ message: 'Error', error })
        }
    } else {
        res.send({ message: 'Please provide a user id' })
    }
}