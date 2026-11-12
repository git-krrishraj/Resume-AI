/**This file is used to set up multer and read the pdf data */
import multer from "multer"
import { mime } from "zod"


const upload = multer({
    storage:multer.memoryStorage,
    limits:{
        fileSize:3*1024*1024//3MB
    }
})

export default upload 