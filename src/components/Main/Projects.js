import DraggableList from './DraggableList';
import projectsArr from 'data/projects';


const fullList = [
  {
    img: `url('/smhm.png')`,
    title: 'SeeMeHireMe - Human Resource Innovator',
    callback: () => window.open('https://seemehireme.com', '_blank', '')
  },
  {
    img: `url('/junglo.png')`,
    title: 'Junglo - Stock Insights',
    callback: () => window.open('https://junglo.xyz', '_blank', '')
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
  }, 
];
const currentProject = {
  img: "url('/dss.png')",
  git: 'https://danasafetysupply.com',
  title: 'Dana Safety Supply - Tactical Duty Gear'

}
const Projects = () => {


  return (
    <div className='projects-layout'>

      <h2 className='main-title' style={{ color: 'rgb(14, 8, 37)' }}>
        &lt;Projects&gt;
      </h2>
      <div className='current-proj'>
        <div className='each-project' onClick={() => window.open('http://seemehireme.com', '_blank', '')}>
          <div className='current-text'>Current Project</div>
          <a>
            <div className='current-text'> {currentProject.title} <i className="fas fa-user"></i></div>
          </a>
          <div style={{ backgroundImage: currentProject.img }}
            className='jungle-screen current-project'></div>
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