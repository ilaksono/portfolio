import WorkListItem from './WorkListItem';

const workArr = [
  {
    url: 'https://pbs.twimg.com/profile_images/1197911268939550720/33RhGxsO_400x400.jpg',
    title: 'Lighthouse Labs'
  },
  {
    url: '/arima.png',
    title: 'Arima Inc.'
  },
  {
    url: 'https://johnhoward.ca/wp-content/uploads/2016/12/Certification-Mark-color.jpg',
    title: 'John Howard Society'
  },
  {
    url: 'https://media.glassdoor.com/sqll/10840/amec-foster-wheeler-squarelogo-1432286081401.png',
    title: 'Amec Foster Wheeler'
  }

]

const Work = () => {
  const parsedWorks = workArr.map((work) => {
    return (
      <WorkListItem {...work}/>
    )
  })

  return (
    <div className='work-layout'>
      <h2 className='work-header'>

      Companies worked:
      </h2>
        {parsedWorks}
    </div>
  );
};
export default Work;