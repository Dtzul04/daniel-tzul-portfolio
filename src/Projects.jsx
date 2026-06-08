import { useState, useEffect } from 'react'

function Projects() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    const className = `hover:scale-105 transition-transform duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

    return (
        <section id="projects" className="bg-[#1e1e1e] text-[#f5f5f5] py-20 px-6 md:px-16">

            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">Projects</h2>

            <div className="flex flex-col md:flex-row gap-8">

                <div className={`bg-[#1a1a1a] border border-[#1D9E75]/60 rounded-xl p-6 flex flex-col gap-4 ${className}`}>
                    <h3 className="text-xl font-bold ">Finder Dallas</h3>
                    <p className="text-md leading-relaxed">A full-stack web application designed to help Dallas residents instantly locate essential community resources like food banks, shelters, job centers, and health services. The platform features a fast, responsive user interface built with React, TypeScript, and Tailwind CSS, while utilizing Vercel Serverless Functions on the backend to deliver sub-second search results. By streamlining the search experience, the application ensures that critical local assistance is highly accessible and easy to navigate.</p>
                    <a href="https://github.com/Dtzul04/FinderDallas.git" className="text-[#9ca3af] hover:text-[#1D9E75] transition-colors duration-300">View on GitHub</a>
                </div>

                <div className={`bg-[#1a1a1a] border border-[#1D9E75]/60 rounded-xl p-6 flex flex-col gap-4 ${className}`}>
                    <h3 className="text-xl font-bold">Flolytics</h3>
                    <p className="text-md leading-relaxed">A conversational AI financial advisor that simplifies personal money management. Through an easy-to-use chat interface, it helps you build budgets, plan strategically, and reach your financial goals with clear, actionable advice</p>
                    <a href="https://github.com/Dtzul04/flolytics.git" className="text-[#9ca3af] hover:text-[#1D9E75] transition-colors duration-300">View on GitHub</a>
                </div>

                <div className={`bg-[#1a1a1a] border border-[#1D9E75]/60 rounded-xl p-6 flex flex-col gap-4 ${className}`}>
                    <h3 className="text-xl font-bold">AI-Squad</h3>
                    <p className="text-md leading-relaxed">This app functions as an instant, virtual reviewer for your professional resume. Rather than relying on guesswork, the application thoroughly evaluates your document to help you refine your wording, build stronger impact statements, and identify missing information before you submit your application to employers</p>
                    <a href="https://github.com/Dtzul04/AI-Squad.git" className="text-[#9ca3af] hover:text-[#1D9E75] transition-colors duration-300">View on GitHub</a>
                </div>

            </div>

        </section>
    )
}

export default Projects;