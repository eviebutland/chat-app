import { client } from '~/server/db.js'

export async function getUsers(req, res) {
    console.log('calling db here', client)
    console.log(req)
    // const result = await client.query('SELECT * FROM users')
    // return result.rows
}