import { useState } from 'react';
import PhotoModal from './PhotoModal';
import 'styles/Profile.scss';
const initBig = {
  mode: false,
  url: ''
};
const initAnim = {
  nameWobble: false
};
const Profile = (props) => {
  const [bigPhoto, setBigPhoto] = useState(initBig);
  const [anim, setAnim] = useState(initAnim);
  const getPhotoModal = (event) => {
    const url = event.target.getAttribute('src');
    setBigPhoto({ mode: true, url });
  };
  return (
    <div className={`profile-layout${props.pageAnim}`}>
      <div className='prof-anec-container'>
        <div className='pic-container'>
          <div className='prof-pic-container'>
            <img src='/prof.jpeg' alt='profile'
              onClick={(event) => getPhotoModal(event)}
              className='prof-pic'
            >
            </img>
          </div>
          <h1 className={`name-header${anim.nameWobble ? ' add-wobble' : ''}`}
            onMouseOver={() => setAnim({ ...anim, nameWobble: true })}
            onAnimationEnd={() => setAnim({ ...anim, nameWobble: false })}
          >
            IAN LAKSONO
          </h1>
        </div>

        <div className='anecdote'>
          <h4>
            A full stack web developer with natural talent
        </h4>
          <h5>
            Background in Chemical Engineering
        </h5>
          <h6>
            Plays piano and loves snowboarding
        </h6>
          <h6 className='punch-line' 
          onClick={() => props.switchMode('CONTACT')}>Hire me, maybe</h6>
        </div>
      </div>
      <div className='bg-container'>
        <img src='/background.jpg' alt='background'
          onClick={(event) => getPhotoModal(event)}
          className='background-pic'
        >
        </img>
      </div>
      <div className='bg-spacer'>

      </div>
      {
        bigPhoto.mode &&
        <PhotoModal
          url={bigPhoto.url}
          show={bigPhoto.mode}
          onHide={() => setBigPhoto(initBig)}
        />
      }
    </div>
  );
};

export default Profile;