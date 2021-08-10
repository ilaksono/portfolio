import DraggableList from './DraggableList';
import projectsArr from 'data/projects';


const Projects = () => {
  const fullList = [
    {
      img: `url('/smhm.png')`,
      title: 'SeeMeHireMe Hiring Solutions',
      callback: () => window.open('https://seemehireme.com', '_blank', '')
    },
    ...projectsArr,
    {
      img: `url('/chart-page.png')`,
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
      {
        fullList.length > 0 &&
        <DraggableList items={fullList} />
      }
    </div>
  );
};
export default Projects;