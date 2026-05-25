import { useState, useEffect } from 'react'

function About() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    const fadeClass = `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

    return (
        <section id="about" className="bg-[#0f0f0f] text-[#f5f5f5] py-24 relative">

            <div className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center h-full max-w-5xl w-full mx-auto px-8 ${fadeClass}`}>

                <div className="w-full md:w-1/3">
                    <h2 className="text-4xl md:text-6xl font-bold border-l-4 border-[#1D9E75] pl-4">My Story</h2>
                </div>

                <div className="w-full md:w-2/3">
                    <p className="text-md text-gray-400 leading-relaxed">
                        I'm a Full Stack Developer from Dallas, Texas.
                        I did not take the traditional path into tech. Before I wrote 
                        my first line of code, I spent years working in some of the 
                        most fast-paced, high-pressure environments you can imagine: 
                        restaurants where every second counted, every order had to be 
                        right, and slowing down was not an option. That world shaped 
                        me into someone who shows up, figures it out, and gets it done 
                        no matter what.<br/><br/>
                        When I discovered coding, something clicked. I realized I could 
                        build things and real things that people could actually use. That 
                        realization sent me to Dallas College to pursue my A.A.S. in Web 
                        Development, where I have maintained a 3.8 GPA while building 
                        and deploying real applications outside of class. I do not just 
                        study development, I practice it every day.<br/><br/>
                        Right now I am looking for the right opportunity: a team that 
                        takes their craft seriously, values growth, and wants someone 
                        who will give everything they have from day one.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About;
