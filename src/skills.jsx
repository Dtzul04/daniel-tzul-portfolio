import { useState, useEffect } from 'react'

function Skills() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    const fadeClass = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
    const skillGroups = [
        {
            title: 'Frontend',
            skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express', 'PostgreSQL', 'Python']
        },
        {
            title: 'Tools',
            skills: ['Git', 'Vite']
        }
    ]

    return (
        <section id="skills" className={`bg-[#0f0f0f] text-[#f5f5f5] py-28 md:py-32 relative ${fadeClass}`}>

            <div className="px-8 max-w-6xl mx-auto mb-12 md:mb-16">
                <h2 className="text-4xl md:text-6xl font-bold border-l-4 border-[#1D9E75] pl-4">Tech Stack</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-8 max-w-6xl mx-auto">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="flex flex-col bg-[#1a1a1a] border border-[#1D9E75]/40 border-t-4 border-t-[#1D9E75] rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
                    >
                        <h3 className="text-xl font-bold text-[#1D9E75] mb-4">{group.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-[#1D9E75]/10 text-[#1D9E75] px-2 py-1 rounded-md text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skills
