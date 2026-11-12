import dotenv, { configDotenv } from 'dotenv'
dotenv.config()

if(!process.env.MONGO_URI)
{
    throw new Error("MONGO_URI is not defined in the env file")
}

if(!process.env.JWT_SECRET)
{
    throw new Error("JWT_SECRET is not defined in the env file")
}

if(!process.env.GEMINI_API_KEY)
{
    throw new Error("GEMINI_API_KEY is not defined in the env file")
}

const config={
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    GEMINI_API_KEY:process.env.GEMINI_API_KEY
}

export default config