import { useState, useEffect } from 'react'

function  Hero() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    const className = `transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`

    return (
        <section className="bg-[#0f0f0f] text-[#f5f5f5] min-h-[60vh] flex items-center pl-6 md:pl-16 relative" style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            <nav className={`absolute top-5 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 flex gap-6 bg-black/40 px-6 py-3 ${className}`}>
                <a href="#about" className="text-white hover:text-[#1D9E75] transition-colors duration-300">About</a>
                <a href="#projects" className="text-white hover:text-[#1D9E75] transition-colors duration-300">Projects</a>
                <a href="#contact" className="text-white hover:text-[#1D9E75] transition-colors duration-300">Contact</a>
            </nav>

            <div className={`relative z-10 flex flex-col gap-4 px-4 sm:px-6 lg:px-8 max-w-2xl ${className}`}>
                <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Daniel Tzul</h1>
                <p className="text-xl md:text-2xl font-medium text-[#1D9E75]">Full Stack Developer</p>
                <p className="text-gray-400 max-w-xl text-sm md:text-lg">Passionate about building applications that are interactive, user-friendly, and built for real people.</p>
                <p className="md:hidden text-gray-500 italic text-sm border-l-2 border-[#1D9E75]/50 pl-3 mt-2">"The only way to do great work is to love what you do."</p>
            </div>

            <div className={`hidden md:block absolute bottom-10 right-16 z-10 max-w-sm ${className}`}>
                <p className="text-gray-300 italic text-lg border-l-2 border-[#1D9E75]/50 pl-3">"The only way to do great work is to love what you do."</p>
            </div>

        </section>
    )
}

export default Hero;
