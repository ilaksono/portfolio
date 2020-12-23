import { useEffect, useState } from 'react';
import axios from 'axios';
import ToText from './ToText';
import 'styles/Articles.scss';
import moment from "moment";
import { CircularProgress } from '@material-ui/core';
const Articles = () => {

  const handleClick = (url) => {
    window.open(url, "_blank", "");
  };

  const [arts, setArts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ilaksono`)
      .then((data) => {
        setArts(data.data.items);
      });
  }, []);
  let parsedArts = [];
  if (arts.length) {
    parsedArts = arts.map(art => {
      return (
        <div className='art-container article-right' onClick={() => handleClick(art.link)}>
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
        </div>);
    });
  }

  return (
    <div className='articles-layout page-right'>
      <h2 className='main-title'>&lt;Article&gt;</h2>

      <div className='articles-container'>

        {parsedArts.length > 0 ?
          parsedArts
        :
        <CircularProgress size='100' color='primary'/>
        }

      </div>
    </div>
  );

};

export default Articles;