import { useState, useEffect } from 'react'

function Footer() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    const fadeClass = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

    return (
        <footer className="bg-[#1a1a1a] text-gray-400 p-6 flex justify-center items-center">
            <p className={`text-center text-md ${fadeClass}`}>© 2026 Daniel Tzul. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
