import { client } from '~/server/db.js'

export async function getUsers() {
    console.log('calling db here')
    const result = await client.query('SELECT * FROM users')
    return result.rows
}