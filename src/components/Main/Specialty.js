import 'styles/ScrollBar.scss';
import skillsArr from 'data/skills.js';

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