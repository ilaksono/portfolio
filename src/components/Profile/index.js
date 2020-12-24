import { useState } from 'react';
import PhotoModal from './PhotoModal';
import 'styles/Profile.scss';
import 'styles/Smoky.scss';
import 'styles/Slide.scss';

const initBig = {
  mode: false,
  url: ''
};
const initAnim = {
  nameWobble: false
};
const initVis = {
  a: false,
  b: false,
  c: false,
  d: false
}
const Profile = (props) => {
  const [visible, setVisible] = useState(initVis);
  const [bigPhoto, setBigPhoto] = useState(initBig);
  const [anim, setAnim] = useState(initAnim);
  const [rdy, setRdy] = useState(false);
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
          <h4 className='h4-1'
          style={{
            opacity: visible.a ? '1' : '0'
          }}
          onAnimationStart={() => setVisible(prev => ({...prev, a: true}))}
          >
            Web Developer with natural talent
        </h4>
          <h5 className='h4-1'
            style={{
              opacity: visible.b ? '1' : '0'
            }}
            onAnimationStart={() => setVisible(prev => ({ ...prev, b: true }))}
          >
            Background in Chemical Engineering
        </h5>
          <h6 className='h6-1'
            style={{
              opacity: visible.c ? '1' : '0'
            }}
            onAnimationStart={() => setVisible(prev => ({ ...prev, c: true }))}
          >
            Plays piano and loves snowboarding
        </h6>
          <h6 className='punch-line'
            onClick={() => props.switchMode('CONTACT')}
            style={{
              opacity: visible.d ? '1' : '0'
            }}
            onAnimationStart={() => setVisible(prev => ({ ...prev, d: true }))}
            >

            {
              rdy ?
                <div className="containerA">
                  <div className="box">

                    <div className="title">
                      <span className="block"></span>
                      <h6>I'm super available<span></span></h6>
                    </div>

                    <div className="role">
                      <div className="block"></div>
                      <p>Full Stack Developer</p>
                    </div>

                  </div>
                </div>
                :
                <div className='smoky-con h4-1'>
                  <span>H</span>
                  <span>i</span>
                  <span>r</span>
                  <span>e &nbsp;</span>

                  <span>m</span>
                  <span>e</span>
                  <span>, &nbsp;</span>
                  <span>m</span>
                  <span>a</span>
                  <span>y</span>
                  <span>b</span>
                  <span
                    onAnimationEnd={() => setRdy(true)}
                  >e</span>
                </div>
            }
          </h6>
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