import { PDFParse } from "pdf-parse";
import { generateReport } from "../services/ai.service.js";
import { reportModel } from "../models/report.model.js";
export const makeReport=(req,res)=>{
    const resumeFile = req.file //multer stores the pdf in ram which can be accessed by req.file
    const resumeText = PDFParse(req.file.buffer)
    //req.file contains metadata about pdf, req.file.buffer actually contains the metadata about pdf, whereas req.file.buffer contains the actual file data sitting in memory
    const {selfDescription,jobDescription}=req.body

    const reportByAI = generateReport({resumeText,selfDescription,jobDescription})

    const newReport= reportModel.create({
        resumeText,
        selfDescription,
        jobDescription,
        user:req.user.id,
        ...report
    })

    res.status(201).json({
        message:"interview report generated successfully",
        newReport
    })
}