import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"
import { blacklistModel } from "../models/blacklist.model.js"
import config from "../config/config.js"

/**
 *
 * @name register function
 */
export const register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({
            message: "all required fields are not provided",
        });
    }

    const userExists = await userModel.findOne({
        $or: [{ username }, { email }],
    });

    if (userExists) {
        return res.status(409).json({
            message: "username or email already exists",
        });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
        username,
        password: hashPassword,
        email,
    });

    const token = jwt.sign(
        { username: newUser.username, email: newUser.email },
        config.JWT_SECRET
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });

    return res.status(201).json({
        message: "user registered successfully",
        token,
        user: {
            id:newUser._id,
            username: newUser.username,
            email: newUser.email,
        },
    });
};


/**
 * 
 * @name login function
 */
export const login = async (req,res)=>{
    const { email, password } = req.body;

    const user = await userModel.findOne({email})

    if(!user)
    {
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const isPassValid = await bcrypt.compare(password,user.password)

    if(!isPassValid)
    {
        return res.status(400).json({
            message:"Invalid password or email"
        })
    }

    const token = jwt.sign({id:user._id,username:user.username},
        config.JWT_SECRET,{
            expiresIn:"1d"
        }
    )

    res.cookie("token",token)
    res.status(200).json({
        message:"logged in successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
}


export const logout = async (req,res)=>{
    const token = req.cookies.token
    
    if(token)
    {
        await blacklistModel.create({token})
    }

    res.clearCookie("token")

    res.status(200).json({
        message:"user logged out successfully"
    })
}

export const getme = async(req,res)=>{
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message:"user fetched successfully",
        user:{
            id:user._id,
            email:user.email,
            username:user.username
        }
    })
}