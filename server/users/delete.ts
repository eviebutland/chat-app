import express from 'express'
import { client } from '../db'

export const deleteUser = async (req: express.Request, res: express.Response) => {
    if (req.params.id !== ':id') {
        try {
            const user = await client.query(`SELECT * FROM users
            WHERE user_id = ${req.params.id}`)

            if (user.rowCount) {

                const result = await client.query(`DELETE FROM users WHERE user_id = ${req.params.id}`)
                res.send({ data: result.rowCount, message: `User ${req.params.id} successfully deleted` })
            } else {
                res.send({ message: `User ${req.params.id} does not exist`, })

            }
        } catch (error) {
            res.send({ message: 'Something went wrong', error })
        }
    } else {
        res.send({ message: 'Please provide a user id' })
    }
}