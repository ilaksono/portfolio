import DraggableList from './DraggableList';

const projectsArr = [
  {
    url: 'https://smhmstaging.herokuapp.com',
    title: 'SeeMeHireMe Hiring Solutions',
    // git: ''
  },
  {
    url: 'https://shoppies-il.netlify.app/',
    title: 'Shoppies - React-MUI, Express, PGSQL',
    git: 'https://github.com/ilaksono/shoppies-react-express'
  },
  {
    url: 'https://laksmail.herokuapp.com/',
    title: 'Email Me - React Server Side Render',
    git: 'https://github.com/ilaksono/email-api-node'
  },
  {
    url: 'https://ichatter.netlify.app/',
    title: 'Chatter - React & Express',
    git: 'https://github.com/ilaksono/chatter-react-express'
  },
  {
    url: 'https://mui-il.netlify.app/',
    title: 'PM Dashboard - React & Material UI',
    git: 'https://github.com/ilaksono/mui-projects'
  },
  {
    url: 'https://newsale.netlify.app/',
    title: 'Retailer - React, Express & PostgresQL',
    git: 'https://github.com/ilaksono/retailer-react-express'
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
  const fullList = [
    ...projectsArr,
    {
      img: `url('/Chart-Page (1).png')`,
      git: 'https://github.com/ilaksono/trader-react-express',
      title: 'Trader - Stock Data, Trading, and Tracking'
    },
    {
      img: `url('/jungle.png')`,
      title: 'Jungle - Ruby On Rails',
      git: 'https://github.com/ilaksono/scheduler'
    }, {
      img: `url('/bs.png')`,
      title: 'Battleship - JQuery & Express',
      git: 'https://github.com/ilaksono/scheduler'
    },

  ];
  // const parsedProjs = projectsArr.map((proj, index) => {
  //   return (
  //     <div className='each-project' onClick={() => window.open(proj.url, '_blank', '')}>
  //       <div className='project-label-container' >
  //         <a href={proj.url} target='_blank' rel='noreferrer' className='projects-label'>
  //           {proj.title}
  //         </a>
  //         <i
  //           style={{ fontSize: '24px' }}
  //           className="fab fa-github-alt project-git"
  //           onClick={() => window.open(proj.git, '_blank', '')}
  //         ></i>
  //       </div>
  //       <iframe title={proj.title} key={index} className='projects-iframe' src={proj.url}>

  //       </iframe>
  //     </div>
  //   );
  // });

  return (
    <div className='projects-layout'>

      <h2 className='main-title' style={{ color: 'rgb(14, 8, 37)' }}>
        &lt;Projects&gt;
        </h2>
      <div className='current-proj'>
        <div className='each-project' onClick={() => window.open('http://junglo.xyz', '_blank', '')}>
          <div className='current-text'>CURRENTLY BUILDING</div>
          <a>
            <div className='current-text'> JUNGLO <i className="fas fa-signal"></i></div>
          </a>
          <div style={{ backgroundImage: `url('/junglo.png')` }} src='/Chart-Page (1).png' 
          alt='battleship' className='jungle-screen'></div>
        </div>
        <div className='projects-closing'>
          <a href='https://github.com/ilaksono' style={{ color: '#254a02' }}>
            Visit my GitHub <i className="fab fa-github"></i>
          </a>
        </div>
      </div>




      {/* {
      
      parsedProjs
    } */}
      {
        fullList.length > 0 &&
        <DraggableList items={fullList} />

      }
      {/* <div className='each-project' onClick={() => window.open('https://github.com/ilaksono/jungle-rails', '_blank', '')}>

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
      </div> */}

    </div>
  );
};
export default Projects;