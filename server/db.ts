import pg from 'pg'
// import dotenv from 'dotenv'

// dotenv.config()


export const client = new pg.Client({
    user: 'eviebutland',
    host: 'localhost',
    database: 'chatapp',
    password: 'C!ndY&d1Zzy',
    port: 5432, // Default PostgreSQL port
})




export const connectDb = async (): Promise<void> => {
    try {
        await client.connect()
        console.log('Connected to DB:', client.database)
    } catch (error) {
        throw new Error(`Error connecting to DB: ${error}`)
    }
}