import express from 'express'
import * as authController from '../controllers/auth.controller.js'
import * as authMiddleware from "../middleware/auth.middleware.js"
const authRoutes=express.Router()


/**
 * @name register api
 * @description register a new user
 * @access public
 */
authRoutes.post('/register',authController.register)

/**
 * @name login api
 * @description logs in a user
 * @access public
 */
authRoutes.post('/login',authController.login)

/**
 * @name logout api
 * @description logs out a user
 * @access public
 */

authRoutes.get('/logout',authController.logout)

authRoutes.get('/get-me',authMiddleware.authUser,authController.getme)

export default authRoutes