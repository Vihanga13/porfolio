"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Vihanga's AI assistant. I can help you learn more about:\n\n• Education & Experience\n• Technical Skills\n• Projects\n• Contact Information\n\nWhat would you like to know?",
    },
  ]);
  const [input, setInput] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (message: string): string => {
    const lowerMsg = message.toLowerCase();
    
    // Education related queries
    if (lowerMsg.includes("education") || lowerMsg.includes("study") || lowerMsg.includes("degree")) {
      return "I'm pursuing a BSc (Hons) in Computer Science at NSBM Green University (2022-2025). I also have completed:\n\n• Web Design certification from University of Moratuwa\n• Diploma in English Language from ICBT Campus\n• A/L in Mathematics Stream from Prince Of Wales' College";
    }
    
    // Skills related queries
    if (lowerMsg.includes("skill") || lowerMsg.includes("technologies") || lowerMsg.includes("programming")) {
      return "I'm skilled in:\n\n• Programming: C, C#, Python, JavaScript, PHP, TypeScript, Dart\n• Web Tech: React, MERN Stack, Node.js, Express.js\n• Mobile Dev: React Native, Flutter\n• Databases: MySQL, Firebase, MongoDB\n• Tools: Figma, PowerBI, OpenCV\n\nI also have strong soft skills in teamwork, adaptability, and problem-solving.";
    }
    
    // Project related queries
    if (lowerMsg.includes("project") || lowerMsg.includes("work") || lowerMsg.includes("portfolio")) {
      return "Here are some of my key projects:\n\n1. INTERN PROGRESS TRACKER - Flutter mobile app (In Development)\n2. AI-DRIVEN NUTRITIOUS APP - ML-powered nutrition app\n3. FLIXORA - Cinema ticket booking system\n4. ECHO SPACE - 3D interior design platform\n5. MEDSYNC - Medical information management\n\nWould you like to know more about any specific project?";
    }
    
    // Contact related queries
    if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("phone") || lowerMsg.includes("reach")) {
      return "You can reach me through:\n\n• Email: vihaax23@gmail.com\n• Phone: +94 712 547 892\n• LinkedIn: https://www.linkedin.com/in/vihanga-nilusha\n• GitHub: https://github.com/Vihanga13\n• Instagram: https://www.instagram.com/kaluuu.";
    }
    
    // Location related queries
    if (lowerMsg.includes("location") || lowerMsg.includes("where") || lowerMsg.includes("based")) {
      return "I'm based in Moratuwa, Sri Lanka. I'm fluent in both Sinhala and English.";
    }
    
    // About me queries
    if (lowerMsg.includes("about") || lowerMsg.includes("who") || lowerMsg.includes("background")) {
      return "I'm Vihanga Nilusha, a Computer Science undergraduate and Junior Web Developer at Altitude1 (PVT) LTD. I'm passionate about web and mobile development with hands-on experience in various technologies. I focus on creating innovative digital solutions and am always eager to learn and grow.";
    }

    // Experience related queries
    if (lowerMsg.includes("experience") || lowerMsg.includes("work experience") || lowerMsg.includes("leadership")) {
      return "My experience includes:\n\n• Junior Web Developer at Altitude1 (PVT) LTD (Current)\n• Senior Prefect at Prince Of Wales' College\n• Vice President of Science Society\n• President of Christian Society\n• Cricket Team Member (U13, U15, U17)\n\nI have leadership experience and a track record of successful project delivery.";
    }

    // Work/job related queries
    if (lowerMsg.includes("job") || lowerMsg.includes("current work") || lowerMsg.includes("company")) {
      return "I'm currently working as a Junior Web Developer at Altitude1 (PVT) LTD since June 2025. I'm building meaningful web experiences and contributing to impactful projects while enhancing my skills in modern web development technologies.";
    }
    
    // Default response for unmatched queries
    return "I can help you learn about Vihanga's education, skills, projects, experience, or how to contact him. What specific information are you looking for?";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Get and add bot response
    const botResponse = getBotResponse(input);
    setTimeout(() => {
      const botMessage: Message = {
        role: "assistant",
        content: botResponse,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <Button
        className={cn(
          "fixed bottom-4 right-4 rounded-full p-3 shadow-lg z-50 transition-all duration-300",
          !isOpen && "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-110",
          isOpen && "bg-muted hover:bg-muted"
        )}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-[400px] h-[500px] shadow-xl border-primary/10 z-40">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Chat with AI Assistant</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/10 p-1 h-auto"
                type="button"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <div className="h-[380px] overflow-y-auto p-4">
            <CardContent className="space-y-4 p-0">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex w-fit max-w-[80%] rounded-lg px-4 py-2 whitespace-pre-wrap",
                    message.role === "user"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </CardContent>
          </div>
          <CardFooter className="p-4 pt-2 border-t">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}