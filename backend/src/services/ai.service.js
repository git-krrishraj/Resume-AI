import { GoogleGenAI } from "@google/genai";
import config from "../config/config.js";
import * as z from "zod";

const ai = new GoogleGenAI({ apiKey: config.GEMINI_API_KEY });

const reportJsonSchema = {
    type: "object",
    properties: {
        matchScore: {
            type: "integer",
            description: "Resume match score from 0 to 100."
        },
        techQuestions: {
            type: "array",
            description: "Technical interview questions, suggested answers, and what each question assesses.",
            items: {
                type: "object",
                properties: {
                    question: { type: "string", description: "A short, relevant technical interview question." },
                    answer: { type: "string", description: "A concise suggested answer." },
                    intention: { type: "string", description: "What the interviewer wants to assess." }
                },
                required: ["question", "answer", "intention"]
            }
        },
        behaveQuestions: {
            type: "array",
            description: "Behavioral interview questions, suggested answers, and what each question assesses.",
            items: {
                type: "object",
                properties: {
                    question: { type: "string", description: "A short, relevant behavioral interview question." },
                    answer: { type: "string", description: "A concise suggested answer tailored to the candidate." },
                    intention: { type: "string", description: "What the interviewer wants to assess." }
                },
                required: ["question", "answer", "intention"]
            }
        },
        skillGaps: {
            type: "array",
            description: "Important skills required by the job that are missing or weak in the resume.",
            items: {
                type: "object",
                properties: {
                    skill: { type: "string", description: "The missing or underdeveloped skill." },
                    severity: {
                        type: "string",
                        enum: ["low", "medium", "high"],
                        description: "How important this skill gap is for the job."
                    }
                },
                required: ["skill", "severity"]
            }
        },
        prepPlan: {
            type: "array",
            description: "A day-by-day preparation plan for the interview.",
            items: {
                type: "object",
                properties: {
                    day: { type: "integer", description: "The preparation day number, starting at 1." },
                    focus: { type: "string", description: "The main focus for this preparation day." },
                    tasks: {
                        type: "array",
                        description: "Specific preparation tasks for the day.",
                        items: { type: "string" }
                    }
                },
                required: ["day", "focus", "tasks"]
            }
        }
    },
    required: ["matchScore", "techQuestions", "behaveQuestions", "skillGaps", "prepPlan"]
}

const reportSchema = z.fromJSONSchema(reportJsonSchema)


export const generateReport = async ({ resumeText, selfDescription, jobDescription }) => {

    const prompt = `Generate an interview report for a candidate with following details : resumeText:${resumeText}
    selfDescription:${selfDescription}
    jobDescription:${jobDescription}
    `
    const interaction = await ai.interactions.create({
        model: "gemini-3.8-flash",
        input: prompt,
        response_format: {
            type: 'text',
            mime_type: 'application/json',
            schema: reportJsonSchema
        },
    });

    const reportResult =  reportSchema.parse(JSON.parse(interaction.output_text));
    return reportResult
}
