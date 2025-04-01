import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import data from "@/data";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Create a context string from your data
const createContextFromData = () => {
  const projects = data.projects.projects
    .map((p) => `- ${p.title}: ${p.description}`)
    .join("\n");

  const skills = data.technologies.skills.map((s) => s.name).join(", ");

  return `
    About Varie:
    - Full Stack Developer with expertise in Laravel, Django, React, AI Integration and Big Data Analysis
    - Strong background in building scalable applications with LLM, NoSQL, and MySQL
    - Currently based in Bangkok, open to global remote roles
    - Email: ${data.contact.email}
    
    Core Expertise:
    - Backend Development: Building high-performance, scalable applications
    - AI Integration: Custom chatbots, recommendation systems, and NLP applications
    - Big Data Analysis: IBM SPSS, Power BI, large-scale data processing for market basket analysis using Pyspark
    - POS Applications: Scalable and efficient transaction systems
    - Full Stack Development: ${skills}

    Tech Stack & Tools:
    - **Languages**: JavaScript, TypeScript, Python, PHP, Java, HTML, CSS, C++
    - **Frameworks**: Next.js, React, Django, Laravel, Spring Boot
    - **Databases**: MySQL, NoSQL (MongoDB, Milvus)
    - **Cloud & DevOps**: Docker, Nginx, Chef, GitHub, GitLab
    - **CMS & Web Development**: WordPress, Webflow
    - **Analytics & Data Tools**: IBM SPSS, Power BI
    
    Professional Experience:
    - Developed **Food Buddy AI**, an LLM-powered chatbot recommending restaurants based on user preferences
    - Created **Smart Activity Planner**, a recommendation system for elderly users using RAG and Milvus
    - Engineered a **Telecom B2B System** for broadband sales and customer support (Laravel, MySQL)
    - Built **I-mage**, an AI-powered image processing tool with OpenCV
    - Designed an **Enterprise CMS & Billing System** for large-scale call center operations
    
    AI Integration Capabilities:
    1. **Conversational AI & Chatbots**
       - AI-powered chatbots
       - Customer service automation
       - Interactive FAQ systems
    
    2. **Big Data & Analytics**
       - Data visualization & reporting
       - AI-driven insights
       - Market trend analysis
    
    3. **POS & Transaction Systems**
       - High-performance sales systems
       - AI-enhanced inventory management
       - Customer behavior tracking
    
    Notable AI Projects:
    ${projects}
    
    Services Offered:
    - Custom AI & LLM Integration
    - Web & Mobile App Development
    - Scalable Backend Systems
    - AI Chatbot Development
    - API Development & Optimization

    Soft Skills:
    - Problem-solving & Critical Thinking
    - Effective Communication
    - Team Collaboration
    - Adaptability & Continuous Learning
    
    AI Integration Process:
    1. Requirements Analysis: Understanding specific AI needs
    2. Solution Design: Choosing the right AI models and integration methods
    3. Implementation: Seamless integration with existing systems
    4. Testing & Optimization: Ensuring accuracy and performance
    5. Monitoring & Maintenance: Continuous improvement of AI features
    
    Additional Information:
    - Experienced with multiple AI platforms: OpenAI, Google AI, Hugging Face
    - Focus on practical, business-driven AI solutions
    - Strong emphasis on ethical AI implementation
    - Regular updates with latest AI technologies
  `;
};

const MESSAGE_HISTORY_LIMIT = 5;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: `You are an AI assistant for Varie. Use the following information to help answer questions:
            ${createContextFromData()}
            
            Guidelines:
            - The answer should be short and clear with at most 200 words
            - Be enthusiastic and professional
            - Provide specific, detailed examples from the context
            - Highlight relevant projects and technical capabilities
            - Be confident about AI integration abilities
            - Emphasize practical, real-world applications
            - Keep responses well-structured with clear sections
            - Use bullet points or numbered lists for better readability
            - Always mention relevant experience and past projects
            - For specific project inquiries, guide users to the contact form
            - Focus on Varie's expertise in full stack capabilities and advanced AI integration`,
        },
        {
          role: "model",
          parts:
            "I understand. I'll act as Vaire's assistant, providing detailed, confident responses about her extensive experience in AI integration,and full-stack capabilities. I'll emphasize her practical approach and successful project implementations while maintaining professionalism and enthusiasm.",
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: any) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: msg.content,
        })),
      ],
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content
    );
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}
