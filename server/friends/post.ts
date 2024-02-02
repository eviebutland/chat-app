import express from 'express'
import { client } from '../db'

export async function createFriendConnection(req: express.Request, res: express.Response) {
    try {

        if (req.params.user_id && req.params.friend_id) {
            const matchUserId = await client.query(`SELECT * FROM friends 
            WHERE requester_id = ${req.params.user_id} AND adressee_id = ${req.params.friend_id}`)

            if (matchUserId.rows.length) {

                const matchFriendId = await client.query(`SELECT * FROM friends 
                WHERE requester_id = ${req.params.friend_id} AND adressee_id = ${req.params.user_id}`)

                if (matchFriendId.rows.length) {
                    res.status(400).send({ message: `Users ${req.params.user_id} and ${req.params.friend_id} are already friends` })

                } else {

                    const newFriend = await client.query(`INSERT INTO friends(requester_id, adressee_id)
                VALUES(${req.params.friend_id}, ${req.params.user_id})`)
                    console.log(newFriend)
                    res.status(201).send({ message: 'New friend connection created' })
                }

            } else {
                const friendConnection1 = await client.query(`INSERT INTO friends(requester_id, adressee_id)
                VALUES(${req.params.user_id}, ${req.params.friend_id})`)


                const friendConnection2 = await client.query(`INSERT INTO friends(requester_id, adressee_id)
                VALUES(${req.params.friend_id}, ${req.params.user_id})`)

                res.status(201).send({ message: `New friend connection created between ${req.params.user_id} and ${req.params.friend_id}` })
            }

        }
    } catch (error) {
        res.send({ message: `Something went wrong`, error })
    }
}