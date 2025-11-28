import { GoogleGenAI } from "@google/genai";
import { Book } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBookInsights = async (book: Book): Promise<string> => {
  try {
    const prompt = `
      You are an expert technical book reviewer.
      Analyze the following coding book details:
      Title: ${book.title}
      Author: ${book.author}
      Language: ${book.language}
      Level: ${book.level}
      Description: ${book.description}

      Provide a concise, professional 3-bullet point summary explaining:
      1. The core skill the reader will master.
      2. Who this book is specifically best for (e.g., "Best for developers transitioning from X to Y").
      3. A key industry use-case for the knowledge in this book.

      Format the output as plain text with bullet points (•). Keep it inspiring and high-trust.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "Insight not available at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI Insights are currently unavailable. Please check the description for details.";
  }
};
