import NavBar from 'components/NavBar';
import { useContext, useEffect } from 'react';
import AppContext from 'AppContext';
import Main from 'components/Main';
import Profile from 'components/Profile';
import Contact from 'components/Contact';
import {useCookies} from 'react-cookie'
function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['mode']);
  const {
    visMode,
    switchMode,
    history
  } = useContext(AppContext);
  useEffect(() => {
    setCookie('mode', visMode, {path:'/'})
    // eslint-disable-next-line
  }, [visMode])

  useEffect(() => {
    switchMode(cookies.mode)
  }, [])


  return (
    <div className="App">
      <NavBar/>
      {
        visMode === 'MAIN' &&
        <div>
          <Main />
        </div>
      }

      {
        visMode === 'PROFILE' &&
        <div>
          <Profile switchMode={switchMode} pageAnim={history[history.length - 2]==='CONTACT' ? ' page-left': ' page-right'}/>
        </div>
      }
      {
        visMode === 'CONTACT' &&
        <div>
          <Contact />
        </div>
      }

    </div>
  );
}

export default App;
