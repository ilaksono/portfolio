import WorkListItem from './WorkListItem';
import {useState} from 'react';

const workArr = [
  {
    url: '/dss-icon.webp',
    title: 'Dana Safety Supply',
    name: 'DSS'
  },
  {
    url: '/smhm.svg',
    title: 'SeeMeHireMe',
    name: 'smhm'
  },
  {
    url: 'junglo-icon.webp',
    title:'Junglo',
    name:'junglo'
  },
  {
    url: '/lighthouse-icon.webp',
    title: 'Lighthouse Labs',
    name:'lhl'
  },
  {
    url: '/arima.webp',
    title: 'Arima Inc.',
    name:'arima'
  },
  {
    url: '/john-icon.webp',
    title: 'John Howard Society',
    name: 'jhs'
  },
  {
    url: '/amec-icon.webp',
    title: 'Amec Foster Wheeler',
    name: 'afw'
  }

];

const initAnim = {
  lhl: false,
  arima: false,
  jhs: false,
  afw: false,
  smhm: false
}

const Work = () => {
  const [anim, setAnim] = useState(initAnim);

  const parsedWorks = workArr.map((work, index) => {
    return (
      <WorkListItem {...work} setAnim={setAnim} key={index} anim={anim}/>
    );
  });

  return (
    <div className='work-layout'>
      <h2 className='main-title'>
        &lt;Companies&gt;
      </h2>
      <div className='work-list'>

      {parsedWorks}
      </div>
    </div>
  );
};
export default Work;