import 'styles/ScrollBar.scss';
import skillsArr from 'data/skills.js';
const Specialty = () => {
  const parsedSkills = skillsArr.map((skill, index) => {
    return (
      <div className='skill-item' key={skill.title}
        style={{
          borderColor: (index === 3
            || index === 7 || index === 10 || index === 13 || index === 16) ? '#eaeaea' : '',
          borderBottomWidth: (index === 3 || index === 7 || index === 10 || index === 13 || index === 16) ? "2px" : "0px",
          borderBottomStyle: "solid"
        }}
      >
        <a
          data-toggle='tooltip'
          title={skill.title}
        >
          <img
            src={skill.url}
            alt={skill.title}
            key={index}
            className='skill-logo'
          />
        </a>
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