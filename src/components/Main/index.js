import 'styles/Main.scss';
import Work from './Work';
import Projects from './Projects';

import Specialty from './Specialty';

const Main = () => {

  return (
    <div className='main-layout'>
    <Work/>
    <Projects/>
    <Specialty/>
    </div>
  )
}
export default Main;