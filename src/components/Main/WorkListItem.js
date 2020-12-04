const WorkListItem = (props) => {


  return (
    <div className='work-item-container'>
      <img src={props.url} alt={props.title} className='work-image'>        
      </img>
      <h4>
        {props.title}
      </h4>

    </div>
  )
}
export default WorkListItem;