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
    url: '/rails.png',
    title: 'Rails'
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

];

const Specialty = () => {
  const parsedSkills = skillsArr.map((skill, index) => {
    return (
      <div className='skill-item'>
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
        Abilities:
      </h2>
      {parsedSkills}

    </div>
  );
};
export default Specialty;