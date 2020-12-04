import 'styles/NavBar.scss';
import AppContext from 'AppContext';
import {useContext} from 'react';

const NavBar = () => {
  const {visMode, switchMode} = useContext(AppContext);
  return (
    <nav className='nav-container'>
      <div className='nav-logo'
        onClick={() => switchMode('MAIN')}>
        I AM NAVBAR
        </div>
      <div onClick={() => switchMode('PROFILE')}>
        About Me
        </div>
      <div>
        And another 1
          </div>
    </nav>
  );

};

export default NavBar;
