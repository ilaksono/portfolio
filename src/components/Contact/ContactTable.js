import { useState } from 'react';
const contactDetails = [
  {
    iconCL: "fab fa-linkedin",
    title: '@i-laksono',
    href: 'https://www.linkedin.com/in/ian-laksono/'
  },
  {
    iconCL: "fab fa-linkedin",
    title: '@i-laksono',
    href: 'https://www.linkedin.com/in/ian-laksono/',
    target: '_blank'
  },
  {
    iconCL: "fab fa-linkedin",
    title: '@i-laksono',
    href: 'https://www.linkedin.com/in/ian-laksono/'
  },

];
const initAnim = {
  linBounce: false,
  mailBounce: false,
  gitBounce: false,
  resBounce: false
};

const ContactTable = () => {
  const [anim, setAnim] = useState(initAnim);


  return (
    <div className='get-in-contact'>
      <h1 className='main-title'>setContact(&#123;
      </h1>
      <div className='contact-div'>
        <div
          className={`${anim.linBounce ? 'work-bounce' : ''}`}
          onMouseOver={() => setAnim({ ...anim, linBounce: true })}
          onAnimationEnd={() => setAnim({ ...anim, linBounce: false })}
        >
          <i className="fab fa-linkedin"><b>:</b></i>
        </div>
        <a
          href='https://www.linkedin.com/in/ian-laksono/'
          target='_blank'
          rel='noreferrer'
          className='contact-link'
        >
          @i-laksono,
        </a>
        <div
          className={`${anim.mailBounce ? 'work-bounce' : ''}`}
          onMouseOver={() => setAnim({ ...anim, mailBounce: true })}
          onAnimationEnd={() => setAnim({ ...anim, mailBounce: false })}
        >
          <i className="fas fa-envelope" >: </i>
        </div>
        <a href='mailto: ian@laksono.net'
          className='contact-link'>
          &nbsp;ianlaksono@gmail.com,
        </a>
        <div
          className={`${anim.gitBounce ? 'work-bounce' : ''}`}
          onMouseOver={() => setAnim({ ...anim, gitBounce: true })}
          onAnimationEnd={() => setAnim({ ...anim, gitBounce: false })}
        >
          <i className="fab fa-github-square"><b>:</b></i>
        </div>
        <a
          href='https://github.com/ilaksono'
          target='_blank'
          rel='noreferrer'
          className='contact-link'
        >
          @ilaksono,
        </a>
        <div
          className={`${anim.resBounce ? 'work-bounce' : ''}`}
          onMouseOver={() => setAnim({ ...anim, resBounce: true })}
          onAnimationEnd={() => setAnim({ ...anim, resBounce: false })}
        >
          <i class="fas fa-file"><b>:</b></i>
        </div>
        <a
          href='https://www.canva.com/design/DAEMFk2Wk7o/2Uxu3K5ESEBRd2RSLpXW6A/view?utm_content=DAEMFk2Wk7o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
          target='_blank'
          rel='noreferrer'
          className='contact-link'
        >
          <span style={{ display: 'inline-block' }}>
            <span className='parentheses'>()&nbsp;=&gt;&nbsp;</span>
            <span>getResume</span>
            <span className='parentheses'>()</span>
          </span>
        </a>

      </div>
      <h1 className='closing'>&#125;);</h1>
    </div>
  );
};

export default ContactTable;