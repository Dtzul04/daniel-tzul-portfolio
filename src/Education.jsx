import { useState, useEffect } from 'react'

function Education() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    const fadeClass = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
    const education = [
        {
            school: 'Dallas College',
            degree: 'A.A.S. in Web Development',
            date: 'Expected Dec 2026',
            details: 'Pursuing an Associate of Applied Science in Web Development with a 3.8 GPA. Coursework covers full-stack development, database management, UI/UX design, and modern web technologies. Recognized with Provost\'s Honor and Chancellor\'s Honor distinctions.'
        },
        {
            school: 'Booker T. Washington High School',
            degree: 'High School Diploma',
            date: 'May 2024',
            details: 'Graduated from a nationally recognized performing arts magnet school in Dallas, TX, with a focus in Dance and Classical Orchestra. Developed creativity, discipline, attention to detail, and the ability to collaborate and perform under pressure — skills that directly translate into professional and creative environments.',
        }
    ]

    return (
        <section id="education" className={`bg-[#0f0f0f] text-[#f5f5f5] py-28 md:py-32 relative ${fadeClass}`}>
            <div className="px-8 max-w-6xl mx-auto mb-12 md:mb-16">
                <h2 className="text-4xl md:text-6xl mb-12 md:mb-16 font-bold border-l-4 border-[#1D9E75] pl-4">Education</h2>
                <div className="flex flex-col gap-6 px-8 max-w-6xl mx-auto">
                    {education.map((item) => (
                        <div key={item.school} className="bg-[#1a1a1a] border border-[#1D9E75]/40 border-l-4 border-l-[#1D9E75] rounded-xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold">{item.school}</h3>
                            <span className="text-sm md:text-base text-[#1D9E75] font-medium">{item.date}</span>
                            <p className="text-lg text-gray-300 mb-2">{item.degree}</p>
                            <p className="text-gray-400 leading-relaxed">{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education