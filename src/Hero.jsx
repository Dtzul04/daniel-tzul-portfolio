import { useState, useEffect } from 'react'

function Hero() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    const fadeClass = `transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`
    const navLinkClass = 'px-4 py-2 rounded-full text-sm font-medium text-gray-200 hover:text-[#1D9E75] hover:bg-gray-500 transition-all duration-300'

    return (
        <section className="bg-[#0f0f0f] text-[#f5f5f5] min-h-[60vh] flex items-center pl-6 md:pl-16 relative" style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30"></div>

            <nav className={`absolute top-5 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-20 flex flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-3 py-2 ${fadeClass}`}>
                <a href="#about" className={navLinkClass}>About</a>
                <a href="#projects" className={navLinkClass}>Projects</a>
                <a href="#contact" className={`${navLinkClass} border border-[#1D9E75]/40 text-[#1D9E75] hover:bg-[#1D9E75]/10`}>Contact</a>
            </nav>

            <div className={`relative z-10 flex flex-col gap-4 px-4 sm:px-6 lg:px-8 max-w-2xl ${fadeClass}`}>
                <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Daniel Tzul</h1>
                <p className="text-xl md:text-2xl font-medium text-[#1D9E75]">Full Stack Developer</p>
                <p className="text-sm md:text-base text-gray-400">A.A.S Web Development • Dallas College • Dec 2026 • 3.8 GPA</p>
                <p className="text-gray-400 max-w-xl text-sm md:text-lg">Passionate about building applications that are interactive, user-friendly, and built for real people.</p>
                <p className="md:hidden text-gray-500 italic text-sm border-l-2 border-[#1D9E75]/50 pl-3 mt-2">"The only way to do great work is to love what you do."</p>
            </div>

            <div className={`hidden md:block absolute bottom-10 right-16 z-10 max-w-sm ${fadeClass}`}>
                <p className="text-gray-300 italic text-lg border-l-2 border-[#1D9E75]/50 pl-3">"The only way to do great work is to love what you do."</p>
            </div>

        </section>
    )
}

export default Hero;
