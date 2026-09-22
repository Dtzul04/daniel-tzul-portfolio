import { useInView } from '../hooks/useInView'

function Projects() {
    const { ref, fadeClass } = useInView()
    const projects = [
        {
            title: 'Jobify',
            description: 'AI-powered job finder using Gemini AI to summarize job listings',
            image: '/projects-assets/Jobify.png',
            technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
            live: 'https://jobify-jade.vercel.app',
            github: 'https://github.com/Dtzul04/Jobify',
        },
        {
            title: 'Magnifit',
            description: 'A workout tracker to log, filter, edit, and delete gym sessions. React and TypeScript on the frontend, with an Express REST API and a Supabase PostgreSQL database. Frontend on Vercel, backend on Render.',
            image: '/projects-assets/Magnifit.png',
            technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
            live: 'https://magnifit.vercel.app',
            github: 'https://github.com/Dtzul04/Magnifit',
        },
        {
            title: 'Finder Dallas',
            description: 'A directory for Dallas residents to find food banks, shelters, job centers, and health services in one place, with a search experience that makes local help easier to reach.',
            image: '/projects-assets/FinderDallas.png',
            technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
            live: 'https://finder-dallas.vercel.app',
            github: 'https://github.com/Dtzul04/FinderDallas',
        },
        {
            title: 'GuideBooks',
            description: 'A developer reference tool to sharpen your coding knowledge — browse concepts, quiz yourself, and follow learning roadmaps across modern web development.',
            image: '/projects-assets/GuideBooks.png',
            technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
            live: 'https://guide-books.vercel.app',
            github: 'https://github.com/Dtzul04/GuideBooks',
        },
    ]

    const linkClass = 'text-[#9ca3af] hover:text-[#1D9E75] transition-colors duration-300'

    return (
        <section id="projects" className="bg-[#1e1e1e] text-[#f5f5f5] py-20 md:py-24 px-6 md:px-16">

            <div ref={ref} className={fadeClass}>
            <div className="px-2 max-w-6xl mx-auto mb-8 md:mb-10">
                <h2 className="text-4xl md:text-6xl font-bold border-l-4 border-[#1D9E75] pl-4">Projects</h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-10 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="bg-[#1a1a1a] border border-[#1D9E75]/60 rounded-xl flex flex-1 flex-col overflow-hidden hover:scale-[1.02] hover:border-[#1D9E75] transition-all duration-300"
                    >
                        <img src={project.image} alt={project.title} className="w-full aspect-video object-cover object-top" />
                        <div className="p-6 flex flex-1 flex-col gap-4">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p className="text-md leading-relaxed flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span key={technology} className="bg-[#1D9E75]/10 text-[#1D9E75] px-2 py-1 rounded-md text-sm">{technology}</span>
                                ))}
                            </div>
                            <div className="mt-auto flex flex-wrap gap-4">
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                        Live Demo
                                    </a>
                                )}
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>

        </section>
    )
}

export default Projects
