import { useState, useEffect } from 'react'

function Contact() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    const fadeClass = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

    return (
        <section className="bg-[#0f0f0f] text-[#f5f5f5] py-10 px-6 md:px-16">

        <div className={`flex flex-col md:flex-row gap-8 ${fadeClass}`} id="contact">

            <div className="w-full md:w-1/3 font-semibold flex items-center flex-col justify-center gap-4 py-4">
                <a href="mailto:dtzul8@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-[#1D9E75] hover:text-white transition-colors duration-300">Email: dtzul8@gmail.com</a>
                <a href="https://www.linkedin.com/in/dtzul04/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-[#1D9E75] hover:text-white transition-colors duration-300">LinkedIn: Daniel Tzul</a>
                <a href="https://github.com/Dtzul04" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-[#1D9E75] hover:text-white transition-colors duration-300">GitHub: Dtzul04</a>
                <a href="/Daniel_Tzul_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-[#1D9E75] hover:text-white transition-colors duration-300">View Resume</a>
            </div>

            <div className="w-full md:w-2/3 bg-[#1a1a1a] text-[#f5f5f5] border border-[#1D9E75]/60 rounded-xl p-8 flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">I'm always looking for new opportunities and collaborations. Feel free to reach out to me via email or LinkedIn.</p>
            </div>

        </div>

        </section>
    )
}

export default Contact;
