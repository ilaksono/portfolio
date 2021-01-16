import { useEffect, useState } from 'react';
import axios from 'axios';
import 'styles/Articles.scss';
import { CircularProgress } from '@material-ui/core';
import ArticleItem from './ArticleItem';
const Articles = () => {

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
    parsedArts = arts.map((art, i) => {
      return <ArticleItem art={art} key={i}/>
        
    });
  }

  return (
    <div className='articles-layout page-right'>
      <h2 className='main-title'>&lt;Article&gt;</h2>

      <div
        className='articles-container'>
        {parsedArts.length > 0 ?
          parsedArts
          :
          <CircularProgress size='100' color='primary' />
        }

      </div>
    </div>
  );

};

export default Articles;