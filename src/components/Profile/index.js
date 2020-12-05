import { useState } from 'react';
import PhotoModal from './PhotoModal';
import 'styles/Profile.scss';
const initBig = {
  mode: false,
  url: ''
};
const Profile = () => {
  const [bigPhoto, setBigPhoto] = useState(initBig);

  const getPhotoModal = (event) => {
    const url = event.target.getAttribute('src');
    setBigPhoto({ mode: true, url });
  };
  return (
    <div className='profile-layout'>
      <div className='pic-container'>

        <div className='prof-pic-container'>
          <img src='/prof.jpeg' alt='profile'
            onClick={(event) => getPhotoModal(event)}
            className='prof-pic'
          >
          </img>
        </div>
        <div>
          <img src='/background.jpg' alt='background'
            onClick={(event) => getPhotoModal(event)}
            className='background-pic'
          >
          </img>
        </div>
      </div>
      {
        bigPhoto.mode &&
        <PhotoModal
          url={bigPhoto.url}
          show={bigPhoto.mode}
          onHide={() => setBigPhoto(initBig)}
        />
      }
      <div className='anecdote'>
        <h4>
         A full stack web developer, who plays piano and loves snowboarding.
        </h4>
      </div>

    </div>
  );
};

export default Profile;