import express from 'express'
import authRoutes from './routes/auth.routes.js'
import interviewRoutes from './routes/interview.routes.js'
import cookieParser from 'cookie-parser'
import { generateReport } from './services/ai.service.js'
import cors from 'cors'
const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
// generateReport({resumeText,selfDescription,jobDescription})

app.use('/api/auth',authRoutes)
app.use('/api/interview',interviewRoutes)

export default app