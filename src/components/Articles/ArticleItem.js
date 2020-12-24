import moment from "moment";
import ToText from './ToText';
import {useState} from 'react';

const ArticleItem = ({art}) => {
  const [anim, setAnim] = useState(false);

  const handleClick = (url) => {
    window.open(url, "_blank", "");
  };

  return (
    <div className={`art-container ${anim ? ' big-spin' : ' article-right'}`}

      onClick={() => {
        setAnim(true);
        handleClick(art.link);
      }}
    >
      <img src={art.thumbnail} alt={art.title} className='art-thumb' />
      <div className='art-title'>
        {art.title}
      </div>
      <div className='art-desc'>
        {ToText(art.description.substring(0, 100))}
      </div>
      <div className='art-date'>
        {moment(art.pubDate).format('MMM DD, YYYY hh:mm')}
      </div>
    </div>
  )
}


export default ArticleItem;