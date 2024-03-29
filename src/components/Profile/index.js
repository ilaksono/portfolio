import { useState, useRef, useEffect } from 'react';
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
};

const setNodeDimensions = (node, w, h) => {
  node.style.maxHeight = h;
  node.style.maxWidth = w;
  return true;
}

const Profile = (props) => {
  const [visible, setVisible] = useState(initVis);
  const [bigPhoto, setBigPhoto] = useState(initBig);
  const [anim, setAnim] = useState(initAnim);
  const [rdy, setRdy] = useState(false);
  const [bounce, setBounce] = useState(false);
  const getPhotoModal = (event) => {
    const url = event.target.getAttribute('src');
    setBigPhoto({ mode: true, url });
  };

  const divRef = useRef();
  if (divRef.current) {
    if (window.innerWidth < 1270) {
      setNodeDimensions(divRef.current, window.innerWidth / 2, window.innerWidth / 2);
    }
  }

  return (
    <div className={`profile-layout${props.pageAnim}`}>
      <div className='prof-anec-container'>
        <div className='pic-container'>
          <div className='prof-pic-container'>
            <img src='/prof.png' alt='profile'
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
            onAnimationStart={() => setVisible(prev => ({ ...prev, a: true }))}
          >
            Full Stack Developer with natural talent
          </h4>
          <h5 className='h4-1'
            style={{
              opacity: visible.b ? '1' : '0'
            }}
            onAnimationStart={() => setVisible(prev => ({ ...prev, b: true }))}
          >
            Specializes in Creative Solutions
          </h5>
          <h6 className='h6-1'
            style={{
              opacity: visible.c ? '1' : '0'
            }}
            onAnimationStart={() => setVisible(prev => ({ ...prev, c: true }))}
          >
            Plays piano and loves snowboarding
          </h6>
          <a className='punch-line'
            href="#email"
            onClick={() => props.switchMode('MAIN')}
            style={{
              opacity: visible.d ? '1' : '0'
            }}
            onAnimationStart={() => setVisible(prev => ({ ...prev, d: true }))}

          >

            {
              rdy ?
                <div className="containerA" onMouseOver={() => setBounce(true)}
                  onMouseOut={() => setBounce(false)}
                >
                  <div className={`box${bounce ? ' bounce-inf' : ''}`}
                  >

                    <div className="title">
                      <span className="block"></span>
                      <h6>I'm super available<span ></span></h6>
                    </div>

                    <div className="role">
                      <div className="block"></div>
                      <p>&nbsp;</p>
                    </div>

                  </div>
                </div>
                :
                <div className='smoky-con h4-1'>
                  <span>L</span>
                  <span>e</span>
                  <span>t'</span>
                  <span>s &nbsp;</span>

                  <span>C</span>
                  <span>h</span>
                  <span>a </span>
                  <span
                    onAnimationEnd={() => setRdy(true)}
                  >t</span>
                </div>
            }
          </a>
        </div>
      </div>
      <div className='assembly-wrapper'>

      <div className="assembly" style={{"--dx": 0}}>
        <div className="panel first" style={{"--i": 0, "--k": 0.33, "--p": 0, "--dx": 0, "--dz": -0.2}}></div>
        <div className="panel second" style={{"--i": 1, "--k": 0.5, "--p": 0.25, "--dx": -0.1, "--dz": 0}}></div>
        <div className="panel third" style={{"--i": 2, "--k": 0.25, "--p": 0.75, "--dx": 0, "--dz": 0}}></div>
      </div>
      </div>
      {/* <div
        ref={divRef}
        className='bg-container'>
        <img src='/background.jpg' alt='background'
          onClick={(event) => getPhotoModal(event)}
          className='background-pic'
        >
        </img>
      </div> */}
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