import NavBar from 'components/NavBar';
import React, { useContext, useEffect } from 'react';
import AppContext from 'AppContext';
import { useCookies } from 'react-cookie';
import 'styles/Background.scss';
import Background from 'components/Background.js';


import LazyWrapper from 'components/LoadSpinner/LazyWrapper';

// import Main from 'components/Main';
// import Profile from 'components/Profile';
// import Contact from 'components/Contact';
// import Articles from 'components/Articles';
const Main = React.lazy(() => import('components/Main'));
const Profile = React.lazy(() => import('components/Profile'));
const Contact = React.lazy(() => import('components/Contact'));
const Articles = React.lazy(() => import('components/Articles'));



function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['mode']);
  const {
    visMode,
    switchMode,
    history
  } = useContext(AppContext);
  useEffect(() => {
    setCookie('mode', visMode, { path: '/' });
    // eslint-disable-next-line
  }, [visMode]);

  useEffect(() => {
    if (cookies.mode)
      switchMode(cookies.mode);
    const node = document.querySelector('#load-overlay');
    node.remove();
  }, []);


  return (
    <div className="App">
      <NavBar />
      <div className='nav-spacer'></div>
      {
        visMode === 'PROFILE' &&
        <div>
          <LazyWrapper>

            <Profile
              switchMode={switchMode}
              pageAnim=' page-left' />
          </LazyWrapper>
        </div>
      }
      {
        visMode === 'MAIN' &&
        <div>
          <LazyWrapper>

            <Main
              pageAnim=
              {(history[history.length - 2] === 'CONTACT' || history[history.length - 2] === 'ARTICLE')
                ? ' page-left' : ' page-right'} />
          </LazyWrapper>
        </div>
      }

      {
        visMode === 'CONTACT' &&
        <div>
          <LazyWrapper>

            <Contact
              pageAnim={history[history.length - 2] === 'ARTICLE' ? ' page-left' : ' page-right'}

            />
          </LazyWrapper>
        </div>
      }
      {
        visMode === 'ARTICLE' &&
        <LazyWrapper>
          <Articles />
        </LazyWrapper>
      }
      <Background />
      <footer style={{ position: 'absolute', color: 'rgb(14, 8, 37)' }}>
        2021 | Ian Laksono <i className="far fa-copyright"></i>
      </footer>
    </div>
  );
}

export default App;
