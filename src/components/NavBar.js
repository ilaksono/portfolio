import 'styles/NavBar.scss';
import AppContext from 'AppContext';
import { useContext, useState } from 'react';
import 'styles/Animations.scss';
const initAnim = {
  mainSpin: false,
  meSpin: false,
  mailSpin: false,
  newsSpin: false,
};

const NavBar = () => {

  const [anim, setAnim] = useState(initAnim);

  const { visMode, switchMode } = useContext(AppContext);
  return (
    <nav className='nav-container'>

      <div
        className={visMode === 'PROFILE' ? 'selected' : 'not-selected'}
      >

        <div
          className={`about-me-logo${anim.meSpin ? ' nav-spin' : ''}`}
          onClick={() => {
            switchMode('PROFILE');
            setAnim({ ...anim, meSpin: true });
          }}
          onAnimationEnd={() => setAnim({ ...anim, meSpin: false })}
        >
          <a
          data-toggle='tooltip'
          title='Background'
          >

          <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
      <div className={visMode === 'MAIN' ? 'selected' : 'not-selected'}>

        <div className={`nav-logo about-me-logo${anim.mainSpin ? ' nav-spin' : ''}`}
          onClick={() => {
            switchMode('MAIN');
            setAnim({ ...anim, mainSpin: true });
          }}
          onAnimationEnd={() => setAnim({ ...anim, mainSpin: false })}
        >
          <a data-toggle='tooltip'
          title='Work'
          >

          <i className="fas fa-briefcase"></i>
          </a>
        </div>
      </div>
      <div
        className={visMode === 'CONTACT' ? 'selected' : 'not-selected'}
      >
        <div
          className={`about-me-logo${anim.mailSpin ? ' nav-spin' : ''}`}
          onClick={() => {
            switchMode('CONTACT');
            setAnim({ ...anim, mailSpin: true });
          }}
          onAnimationEnd={() => setAnim({ ...anim, mailSpin: false })}
        >
          <a data-toggle='tooltip'
          title='Contact'
          >

          <i className="fas fa-paper-plane"></i>
          </a>
        </div>
      </div>
      <div
        className={visMode === 'ARTICLE' ? 'selected' : 'not-selected'}
      >
        <div
        
          className={`about-me-logo${anim.newsSpin ? ' nav-spin' : ''}`}
          onClick={() => {
            switchMode('ARTICLE');
            setAnim({ ...anim, newsSpin: true });
          }}
          onAnimationEnd={() => setAnim({ ...anim, newsSpin: false })}
        >
          <a data-toggle='tooltip'
          title='Blog'
          >

          <i className="fas fa-newspaper"></i>
          </a>
        </div>
      </div>
    </nav>
  );

};

export default NavBar;
