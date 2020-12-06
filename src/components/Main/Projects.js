const projectsArr = [
  {
    url: 'https://safespace-a.netlify.app/',
    title: 'SafeSpace - React & Google/Yelp APIs'
  },
  {
    url: 'https://scheduler-laksono.netlify.app/',
    title: 'Scheduler - React & Express'
  },
  {
    // url: 'http://tiny-app-291120.uk.r.appspot.com/register',
    url: '/bs.png',
    title: 'Battleship - JQuery & Express'
  },
];

const Projects = () => {

  const parsedProjs = projectsArr.map((proj, index) => {
    return (
      <div className='each-project'>
        <a href={proj.url} className='projects-label'>
          {proj.title}
        </a>
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
      {parsedProjs}
      <div className='each-project'>

        <a className='projects-label' href='https://github.com/ilaksono/jungle-rails'>Jungle - Ruby on Rails</a>
        <img src='/jungle.png' alt='jungle' className='jungle-screen'></img>
      </div>
    </div>
  );
};
export default Projects;