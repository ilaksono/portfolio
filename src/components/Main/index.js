import 'styles/Main.scss';
import Work from './Work';
import Projects from './Projects';
import 'styles/PageAnimations.scss';

import Specialty from './Specialty';

const Main = (props) => {

  return (
    <div className={`main-layout${props.pageAnim}`}>
      <Work />
      <Projects />
      <Specialty />
    </div>
  );
};
export default Main;