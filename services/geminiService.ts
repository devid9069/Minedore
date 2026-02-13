
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateDemoResponse(prompt: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are the Minedore AI Assistant. Your goal is to show business owners how AI can help them automate tasks, generate content, and scale their digital presence. Keep your answers professional, direct, and focused on value. Use bullet points if necessary.",
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having a little trouble connecting to my brain right now! Please try again in a moment.";
    }
  }
}

export const geminiService = new GeminiService();
