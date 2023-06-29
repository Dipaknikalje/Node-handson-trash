import express from 'express'
import dotenv from 'dotenv'

import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express()
app.use(express.json())



const port = process.env.PORT

app.use('/user',userRoutes)





app.listen(port,()=>{
    console.log("server is up and running on port 8080")
})