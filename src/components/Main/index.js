import 'styles/Main.scss';
import Work from './Work';
// import Projects from './Projects';
import 'styles/PageAnimations.scss';
import Specialty from './Specialty';
import React from 'react';
import LazyWrapper from 'components/LoadSpinner/LazyWrapper';
const Projects = React.lazy(() => import('./Projects'));

const Main = (props) => {

  return (
    <div className={`main-layout${props.pageAnim}`}>
      <Work />
      <LazyWrapper>
        <Projects />
      </LazyWrapper>
      <Specialty />
    </div>
  );
};
export default Main;