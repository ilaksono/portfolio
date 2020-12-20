const projectsArr = [
  {
    url: 'https://mui-il.netlify.app/',
    title: 'PM Dashboard - React & Material UI',
    git: 'https://github.com/ilaksono/mui-projects'
  },
  {
    url: 'https://safespace-a.netlify.app/',
    title: 'SafeSpace - React & Google/Yelp APIs',
    git: 'https://github.com/ilaksono/safe-space'
  },
  {
    url: 'https://scheduler-laksono.netlify.app/',
    title: 'Scheduler - React & Express',
    git: 'https://github.com/ilaksono/scheduler'
  },
];

const Projects = () => {

  const parsedProjs = projectsArr.map((proj, index) => {
    return (
      <div className='each-project' onClick={() => window.open(proj.url, '_blank', '')}>
        <div className='project-label-container'>
          <a href={proj.url} target='_blank' rel='noreferrer' className='projects-label'>
            {proj.title}
          </a>
          <i
            style={{ fontSize: '24px' }}
            className="fab fa-github-alt project-git"
            onClick={() => window.open(proj.git, '_blank', '')}
          ></i>
        </div>
        <iframe title={proj.title} key={index} className='projects-iframe' src={proj.url}>

        </iframe>
      </div>
    );
  });

  return (
    <div className='projects-layout'>

      <h2 className='main-title'>
        &lt;Projects&gt;
        </h2>
      <div className='each-project' onClick={() => window.open('https://github.com/ilaksono/trader-react-express', '_blank', '')}>
        Currently building up
          <a href='https://github.com/ilaksono/trader-react-express' target='_blank' rel='noreferrer'>
          Trader <i class="fas fa-signal"></i>
        </a>
        <div style={{ backgroundImage: `url('/Chart-Page (1).png')` }} src='/Chart-Page (1).png' alt='battleship' className='jungle-screen'></div>
      </div>

      {parsedProjs}
      <div className='each-project' onClick={() => window.open('https://github.com/ilaksono/jungle-rails', '_blank', '')}>

        <div className='project-label-container'>
          <a className='projects-label' href='https://github.com/ilaksono/jungle-rails'>Jungle - Ruby on Rails</a>
          <i
            style={{ fontSize: '24px' }}
            className="fab fa-github-alt project-git"

          ></i>
        </div>
        <div style={{ backgroundImage: `url('/jungle.png')` }} src='/jungle.png' alt='jungle' className='jungle-screen'></div>
      </div>
      <div className='each-project' onClick={() => window.open('http://tiny-app-291120.uk.r.appspot.com/register', '_blank', '')}>
        <div className='project-label-container'>
          <a className='projects-label' href='http://tiny-app-291120.uk.r.appspot.com/register'>Battleship - JQuery &amp; Express</a>
          <i
            style={{ fontSize: '24px' }}
            className="fab fa-github-alt project-git"
            onClick={() => window.open('https://github.com/ilaksono/battleship', '_blank', '')}
          ></i>
        </div>
        <div style={{ backgroundImage: `url('/bs.png')` }} src='/bs.png' alt='battleship' className='jungle-screen'></div>
      </div>
      <div className='projects-closing'>
        <a href='https://github.com/ilaksono'>
          Visit my GitHub <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};
export default Projects;