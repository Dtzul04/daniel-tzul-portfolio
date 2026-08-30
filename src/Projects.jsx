function Projects() {
    const projects = [
        {
            title: 'Jobify',
            description: 'A job application tracker for logging roles, updating status (pending, interview, declined), and reviewing your search with a simple dashboard. Built as a full-stack app so applications stay saved and easy to manage.',
            link: 'https://github.com/Dtzul04/Jobify.git',
            image: '/projects-assets/Jobify.png',
            technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
            github: 'https://github.com/Dtzul04/Jobify.git'
        },
        {
            title: 'Magnifit',
            description: 'A workout tracker to log, filter, edit, and delete gym sessions. React and TypeScript on the frontend, with an Express REST API and a Supabase PostgreSQL database. Frontend on Vercel, backend on Render.',
            link: 'https://github.com/Dtzul04/Magnifit.git',
            image: '/projects-assets/Magnifit.png',
            technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
            github: 'https://github.com/Dtzul04/Magnifit.git'
        },
        {
            title: 'Finder Dallas',
            description: 'A directory for Dallas residents to find food banks, shelters, job centers, and health services in one place, with a search experience that makes local help easier to reach.',
            link: 'https://github.com/Dtzul04/FinderDallas.git',
            image: '/projects-assets/FinderDallas.png',
            technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
            github: 'https://github.com/Dtzul04/FinderDallas.git'
        }
    ]

    return (
        <section id="projects" className="bg-[#1e1e1e] text-[#f5f5f5] py-20 px-6 md:px-16">

            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">Projects</h2>

            <div className="flex flex-col md:flex-row md:items-stretch gap-8">
                {projects.map((project) => (
                    <div key={project.title} className="bg-[#1a1a1a] border border-[#1D9E75]/60 rounded-xl flex flex-1 flex-col overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full aspect-video object-cover object-top" />
                        <div className="p-6 flex flex-1 flex-col gap-4">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p className="text-md leading-relaxed flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span key={technology} className="bg-[#1D9E75]/10 text-[#1D9E75] px-2 py-1 rounded-md text-sm">{technology}</span>
                                ))}
                            </div>
                            <a href={project.github} className="mt-auto text-[#9ca3af] hover:text-[#1D9E75] transition-colors duration-300">View on GitHub</a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Projects;