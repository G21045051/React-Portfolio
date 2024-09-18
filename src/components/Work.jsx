 import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack FinTrack App',
    tags: ['API', 'Chart.js', 'Development'],
    projectLink: 'https://frontend-expense-tracker-app.onrender.com'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Fullstack Journey-Logbook',
    tags: ['API', 'Multer','Development'],
    projectLink: 'https://journey-logbook-frontend.onrender.com'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'E-commerce website',
    tags: ['Development', 'API','Node'],
    projectLink: 'https://github.com/dashboard'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'React Portfolio',
    tags: ['Frontend','React', 'Development'],
    projectLink: 'https://react-portfolio-app-n99i.onrender.com'
  },
   
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work