'use client'

import Header from '../components/Header'
import CareerForm from '../components/CareerForm'
import ChatInterface from '../components/ChatInterface'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home() {
    const [formData, setFormData] = useState({
        careerGoal: '',
        education: '',
        speciality: '',
        experience: '',
    })

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                    <CareerForm formData={formData} setFormData={setFormData} />
                </div>
                <div className="w-full md:w-2/3">
                    <ChatInterface formData={formData} />
                </div>
            </main>
            <Footer />
        </div>
    )
}
