import express from 'express'
import { client } from '~/server/db.js'

export async function createUser(req: express.Request, res: express.Response) {
    const requestBody = {
        ...req.body,
        'created_on': `${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString('en-GB')}`
    }

    try {
        const result = await client.query(`INSERT INTO users(password, email, first_name, last_name, created_on)
        VALUES('${requestBody.password}', '${requestBody.email}', '${requestBody.first_name}', '${requestBody.first_name}', '${requestBody.created_on}')`)

        res.send({ data: { ...req.body }, inserted: result.rowCount })
    } catch (error) {
        res.send({ message: 'Something went wrong', error })
    }
}