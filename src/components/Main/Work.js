import WorkListItem from './WorkListItem';
import {useState} from 'react';

const workArr = [
  {
    url: '/logo-smhm-large.png',
    title: 'SeeMeHireMe',
    name: 'smhm'
  },
  {
    url: 'https://cdn.imweb.me/thumbnail/20210320/1e3942eeb16ce.png',
    title:'Junglo',
    name:'junglo'
  },
  {
    url: 'https://pbs.twimg.com/profile_images/1197911268939550720/33RhGxsO_400x400.jpg',
    title: 'Lighthouse Labs',
    name:'lhl'
  },
  {
    url: '/arima.png',
    title: 'Arima Inc.',
    name:'arima'
  },
  {
    url: 'https://johnhoward.ca/wp-content/uploads/2016/12/Certification-Mark-color.jpg',
    title: 'John Howard Society',
    name: 'jhs'
  },
  {
    url: 'https://media.glassdoor.com/sqll/10840/amec-foster-wheeler-squarelogo-1432286081401.png',
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
      {parsedWorks}
    </div>
  );
};
export default Work;