import axios from 'axios' 

//to make code cleaner we will create an instance of axios and use it in our api calls
const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true //generally requests sent through axios dont allow server to read and modify cookies and since we have to store refreshtoken in cookie we turn this on
})
export const register= async ({username,email,password})=>{
    try{
        const response = await api.post('/register',{username,email,password})
        return response.data
    }
    catch(err)
    {
        console.log(err)
        throw err
    }
}

export const login = async ({email,password})=>{
    try{
        const response = await api.post('/login',{email,password})
        return response.data
    }
    catch(err)
    {
        console.log(err)
    }
}

export const logout= async ()=>{
    try{
        const response = await api.get('/logout')
        return response.data
    }
    catch(err){
        console.log(err)
    }
}

export const getMe= async ()=>{
    try{
        const response = await api.get('/get-me')
        return response.data
    }
    catch(err){
        console.log(err)
    }
}