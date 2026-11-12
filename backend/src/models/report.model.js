/**
 * This is the model of report that the ai will generate for a user so that it can be accesssed in the future too by the user by saving it in the database
 */

import mongoose from 'mongoose'


/**
 * --Contents of the report are:-
 * 
 * --Information given by user
 *      -JD
 *      -resume text
 *      -self description
 * 
 * --match score (number)
 * 
 * --Information given by AI
 *      -Technical questions : [
 *      {
 *          question:String,
 *          answer:String,
 *          intention:String
 *      }    
 *      ]
 * 
 *      -Behaviour questions : [
 *      {
 *          question:String,
 *          answer:String,
 *          intention:String
 *      }    
 *      ]
 * 
 *      -Skill gaps : : [
 *      {
 *         skill:String,
 *         severity:{
 *          type:String,
 *          enum:["low","medium","high"]    
 *          }
 *      }    
 *      ]
 * 
 *      -prep plan : : [
 *      {
 *          day:number,
 *          focus:String,
 *          tasks:: [String]
 *      }    
 *      ]
 * 
 */



/**Sub Schema for report Schmea Starts */

const questionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:[true,"question is required"]
    },
    answer:{
        type:String,
        required:[true,"answer is required"]
    },
    intention:{
        type:String,
        required:[true,"intention is required"]
    }
},{
    _id:false//to save space
})

const skillGapSchema = new mongoose.Schema({
    skill : {
        type:String,
        required:[true,"skill is required"]
    },
    severity:{
        type:String,
        required:[true,"severity is required"], 
        enum:["low","medium","high"]
    }
},{
    _id:false//to save space as we dont need to update or identify questions or skillgaps individually
})

const prepPlanDaySchema=new mongoose.Schema({
    day:{
        type:Number,
        required:[true,"day is required"]
    },
    focus:{
        type:String,
        required:[true,"focus is required"]
    },
    tasks:[
        {
            type:String,
            required:[true,"task is required"]
        }
    ]
})

/**Sub Schemas for report schemas end */


const reportSchema = new mongoose.Schema({
    jobDescription:{
        type:String,
        required:[true,"JD is required"]
    },
    resumeText:{
        type:String
    },
    selfDescription:{
        type:String
    },
    matchScore:{
        type:Number,
        min:0,
        max:100
    },
    techQuestions:[
        questionSchema
    ],
    behaveQuestions:[
        questionSchema
    ],
    skillGaps:[
        skillGapSchema
    ],
    prepPlan:[
        prepPlanDaySchema
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},{
    timestamps:true
})


 /**We can also store metadata like the ai model used to generate a particular report so that we can compare which model is giving best results */

export const reportModel = mongoose.model("report",reportSchema)