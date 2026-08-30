import { useEffect, useState, useRef } from "react";

export function useInView(threshold = 0.15) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)
    const fadeClass = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

    useEffect(() => {
        const element = ref.current
        if (!element) return 

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(element)
                }
            },
            { threshold }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, fadeClass}
}