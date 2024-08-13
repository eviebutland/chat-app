import express from 'express'
import { client } from '../db'

//https://aws.amazon.com/blogs/security/how-to-use-oauth-2-0-in-amazon-cognito-learn-about-the-different-oauth-2-0-grants/
export const login = (req: express.Request, res: express.Response) => {
    try{

        console.log(req)
    } catch (error){
        console.log('Error logging in', error)
    }
}