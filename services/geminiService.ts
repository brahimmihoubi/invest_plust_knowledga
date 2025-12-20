
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMarketingCopy = async (productName: string, features: string[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short marketing pitch for a product named "${productName}" with these features: ${features.join(', ')}. Keep it punchy and professional.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate AI insights. Please check your API key.";
  }
};

export const analyzeData = async (data: any) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this dashboard data and provide 3 brief bullet points of actionable insights: ${JSON.stringify(data)}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            insights: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["insights"]
        }
      }
    });
    return JSON.parse(response.text || '{"insights": []}');
  } catch (error) {
    console.error("Analysis Error:", error);
    return { insights: ["Unable to analyze data at this time."] };
  }
};
