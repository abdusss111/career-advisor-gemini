'use client'

import { marked } from 'marked';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from 'lucide-react'
import Loader from './Loader'

type Message = {
  content: string
  sender: 'user' | 'ai'
}

type CareerFormData = {
  careerGoal: string
  education: string
  speciality: string
  experience: string
  currentJobTitle: string
  yearsOfExperience: string
  preferredLocation: string
  workPreference: string
  industriesOfInterest: string
  languagesSpoken: string
  shortTermGoals: string
  longTermGoals: string
  activelySeekingJob: string
  workEnvironment: string
  expectedSalary: string
  availability: string
}

type ChatInterfaceProps = {
  formData: CareerFormData
}

export default function ChatInterface({ formData }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! I'm your AI Career Advisor. How can I help you today?", sender: 'ai' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { content: input, sender: 'user' }])
      setInput('')
      setIsLoading(true)

      try {
        const response = await fetch(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=api_key',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      {
                        text: ` you are career advisor, dont ask additional questions, give the advice based on information and info about career goals, etc.
                          \n
                        User Profile:\n
                      - Career Goal: ${formData.careerGoal || "Not provided"}\n
                      - Education: ${formData.education || "Not provided"}\n
                      - Speciality: ${formData.speciality || "Not provided"}\n
                      - Experience: ${formData.experience || "Not provided"}\n
                      - Current Job Title: ${formData.currentJobTitle || "Not provided"}\n
                      - Years of Work Experience: ${formData.yearsOfExperience || "Not provided"}\n
                      - Preferred Location: ${formData.preferredLocation || "Not provided"}\n
                      - Work Preference: ${formData.workPreference || "Not provided"}\n
                      - Industries of Interest: ${formData.industriesOfInterest || "Not provided"}\n
                      - Languages Spoken: ${formData.languagesSpoken || "Not provided"}\n
                      - Short-term Career Goals: ${formData.shortTermGoals || "Not provided"}\n
                      - Long-term Career Goals: ${formData.longTermGoals || "Not provided"}\n
                      - Actively Seeking Job: ${formData.activelySeekingJob || "Not provided"}\n
                      - Work Environment: ${formData.workEnvironment || "Not provided"}\n
                      - Expected Salary: ${formData.expectedSalary || "Not provided"}\n
                      - Availability: ${formData.availability || "Not provided"}\n
                      \nUser Query: ${input}`,
                      },
                    ],
                  },
                ],
              }),
            }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch AI response')
        }

        const data = await response.json()
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that."

        const formattedAiResponse = marked(aiResponse)

        setMessages((prev) => [
          ...prev,
          { content: formattedAiResponse, sender: 'ai' },
        ])
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { content: "An error occurred while processing your request. Please try again.", sender: 'ai' },
        ])
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
      <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-md overflow-hidden">
        <ScrollArea className="flex-grow p-4">
          {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  <div dangerouslySetInnerHTML={{ __html: message.content }} />
                </div>
              </div>
          ))}
          {isLoading && <Loader />}
        </ScrollArea>
        <div className="p-4 border-t">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                className="flex-grow"
                disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
  )
}
