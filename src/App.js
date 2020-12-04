import NavBar from 'components/NavBar';
import { useContext } from 'react';
import AppContext from 'AppContext';
import Main from 'components/Main';
import Profile from 'components/Profile';

function App() {
  const {
    visMode
  } = useContext(AppContext);
  return (
    <div className="App">
      <NavBar />
      {
        visMode === 'MAIN' &&
        <div>
          <Main />
        </div>
      }

      {
        visMode === 'PROFILE' &&
        <div>
          <Profile />
        </div>
      }

    </div>
  );
}

export default App;
