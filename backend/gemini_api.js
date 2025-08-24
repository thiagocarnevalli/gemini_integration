import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const MODEL = "gemini-1.5-flash"

export async function callGenApi(message) {
    const model = genAI.getGenerativeModel({ model: MODEL });
    const result = await model.generateContent(promptContext + message);
    return await result.response.text();
}

const promptContext = `
Assume that you are a android specialist and give a response to every question with a deep knowledge and clarity.
Translate your responses to pt-br language.
Add at least one reference to your answer.
Limit your response to a max of 50 words.
The question is:  
`