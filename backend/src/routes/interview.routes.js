import express from 'express'
/**Since access is private in some of the routes, we need to use a middleware to ensure access is not made available to everyone */
import { authUser } from '../middleware/auth.middleware.js'
import * as interviewController from '../controllers/interview.controller.js'
import upload from '../middleware/file.middleware.js'

const interviewRoutes=express.Router()


/**
 * @route POST /api/interview/
 * @description generate new report
 * @access private
 */

interviewRoutes.post('/',authUser,upload.single("resume"),interviewController.makeReport)

export default interviewRoutes