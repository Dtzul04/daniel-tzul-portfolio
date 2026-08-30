import { useInView } from './hooks/useInView'

function Footer() {
    const { ref, fadeClass } = useInView()

    return (
        <footer className="bg-[#1a1a1a] text-gray-400 p-6 flex justify-center items-center">
            <p ref={ref} className={`text-center text-md ${fadeClass}`}>© 2026 Daniel Tzul. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
