import 'styles/ScrollBar.scss';
const skillsArr = [
  {
    url: '/react.gif',
    title: 'React'
  },
  {
    url: '/express.png',
    title: 'Express'
  },
  {
    url: '/node.png',
    title: 'Node'
  },
  {
    url: '/rails.png',
    title: 'Rails'
  },
  {
    url:'/pg.png',
    title:'PostgreSQL'
  },
  {
    url: '/js.png',
    title: 'JavaScript'
  },
  {
    url: '/sass.png',
    title: 'Sass'
  },
  {
    url: '/html.svg',
    title: 'HTML'
  },
  {
    url:'/c.png',
    title: 'C'
  },
  {
    url: 'https://www.w3.org/WAI/wcag21/wcag2.1A-blue-v.png',
    title: 'w3c'
  },
  {
    url: '/wp.png',
    title: 'Webpack'
  },
  {
    url: 'https://i.pinimg.com/originals/40/58/3b/40583b9485486616cc310cf5c5282b85.png',
    title: 'Google Cloud'
  }

];

const Specialty = () => {
  const parsedSkills = skillsArr.map((skill, index) => {
    return (
      <div className='skill-item' key={index}>
        <img
          src={skill.url}
          alt={skill.title}
          key={index}
          className='skill-logo'
        />
      </div>
    );
  });
  return (
    <div className='specialty-layout'>
      <h2 className='main-title'>
        &lt;Stack&gt;
      </h2>
      {parsedSkills}

    </div>
  );
};
export default Specialty;