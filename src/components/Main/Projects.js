const projectsArr = [
  {
    url: 'https://safespace-a.netlify.app/',
    title: 'SafeSpace - React & Google/Yelp APIs'
  },
  {
    url: 'http://tiny-app-291120.uk.r.appspot.com/register',
    title: 'Battleship - JQuery & Express'
  },
  {
    url: 'https://scheduler-laksono.netlify.app/',
    title: 'Scheduler - React & Express'
  }

];

const Projects = () => {

  const parsedProjs = projectsArr.map((proj, index) => {
    return (
      <div className='each-project'>
        <iframe title={proj.title} key={index} className='projects-iframe' src={proj.url}>

        </iframe>
        <a href={proj.url} className='projects-label'>
          {proj.title}
        </a>
      </div>
    );
  });

  return (
    <div className='projects-layout'>

      <h2 className='main-title'>
        My Projects:
        </h2>
      {parsedProjs}
      <div className='each-project'>

      <img src='/jungle.png' alt='jungle' className='jungle-screen'></img>
      <a className='projects-label' href='https://github.com/ilaksono/jungle-rails'>Jungle - Ruby on Rails</a>
      </div>
    </div>
  );
};
export default Projects;