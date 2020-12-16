import NavBar from 'components/NavBar';
import { useContext, useEffect } from 'react';
import AppContext from 'AppContext';
import Main from 'components/Main';
import Profile from 'components/Profile';
import Contact from 'components/Contact';
import { useCookies } from 'react-cookie';
import Articles from 'components/Articles';
import 'styles/Background.scss';
import Background from 'components/Background.js';
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
  }, []);


  return (
    <div className="App">
      <NavBar />
      <div className='nav-spacer'></div>
      {
        visMode === 'PROFILE' &&
        <div>
          <Profile
            switchMode={switchMode}
            pageAnim=' page-left' />
        </div>
      }
      {
        visMode === 'MAIN' &&
        <div>
          <Main 
            pageAnim=
            {(history[history.length - 2] === 'CONTACT' || history[history.length - 2] === 'ARTICLE')
              ? ' page-left' : ' page-right'}/>
        </div>
      }

      {
        visMode === 'CONTACT' &&
        <div>
          <Contact pageAnim={history[history.length - 2] === 'ARTICLE' ? ' page-left' : ' page-right'} />
        </div>
      }
      {
        visMode === 'ARTICLE' &&
        <Articles />
      }
      <Background />
      <footer style={{ position: 'fixed', bottom: '0', left: 0 }}>
        2020 | Ian Laksono <i class="far fa-copyright"></i>
      </footer>
    </div>
  );
}

export default App;
