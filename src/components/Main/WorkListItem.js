const WorkListItem = (props) => {


  return (
    <div className={`work-item-container`}
    >
      <a
        data-toggle='tooltip'
        title={props.title}
      >
        <img
          onMouseOver={() => props.setAnim(prev => ({ ...prev, [props.name]: true }))}
          onAnimationEnd={() => props.setAnim(prev => ({ ...prev, [props.name]: false }))}
          src={props.url}
          alt={props.title}
          className={`work-image${props.anim[props.name] ? ' work-bounce' : ''}`}>
        </img>
      </a>
    </div>
  );
};
export default WorkListItem;