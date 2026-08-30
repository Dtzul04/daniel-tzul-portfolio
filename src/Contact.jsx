import { useState, useEffect } from 'react'

function Contact() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    const fadeClass = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
    const linkClass = 'text-lg md:text-xl text-[#1D9E75] hover:text-white transition-colors duration-300'

    return (
        <section id="contact" className={`bg-[#0f0f0f] text-[#f5f5f5] py-28 md:py-32 px-6 md:px-16 ${fadeClass}`}>
            <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
                <h2 className="text-4xl md:text-5xl font-bold border-l-4 border-[#1D9E75] pl-4 text-left w-full">Get in touch</h2>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    I&apos;m open to full-time roles and collaborations. Reach out by email or LinkedIn — I&apos;d love to hear from you.
                </p>
                <a
                    href="mailto:dtzul8@gmail.com"
                    className="bg-[#1D9E75] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                    Email me
                </a>
                <div className="flex flex-wrap justify-center gap-6 pt-2">
                    <a href="https://www.linkedin.com/in/dtzul04/" target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
                    <a href="https://github.com/Dtzul04" target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a>
                    <a href="/Daniel_Tzul_Resume.pdf" target="_blank" rel="noopener noreferrer" className={linkClass}>Resume</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
