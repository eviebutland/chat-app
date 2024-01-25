import express from 'express'
import { client } from '~/server/db.js'

export async function createUser(req: express.Request, res: express.Response) {
    const requestBody = {
        ...req.body,
        'created_on': new Date().toISOString()
    }
    // each value needs to be a string
    console.log(Object.values(requestBody).join(','))
    try {
        const result = await client.query(`
        INSERT INTO users(password, email, first_name, last_name, created_on)
        VALUES(${Object.values(requestBody).join(',')})`)

        console.log(result)
        res.send({ data: result.rowCount })
    } catch (error) {
        res.send({ message: 'Something went wrong', error })
    }
}