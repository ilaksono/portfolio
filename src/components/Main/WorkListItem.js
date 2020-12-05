const WorkListItem = (props) => {


  return (
    <div className={`work-item-container${props.anim[props.name] ? ' work-bounce' : ''}`}
      onMouseOver={() => props.setAnim(prev => ({ ...prev, [props.name]: true }))}
      onAnimationEnd={() => props.setAnim(prev => ({...prev, [props.name]: false}))}
    >
      <img
        src={props.url}
        alt={props.title}
        className='work-image'>
      </img>
      <h4 >
        {props.title}
      </h4>

    </div>
  );
};
export default WorkListItem;