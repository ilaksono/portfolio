import 'styles/Contact.scss';
import ContactTable from './ContactTable';

const Contact = (props) => {

  return (
    <div className={`contact-layout${props.pageAnim}`}>
      <div className='res-embed-container'>
        <>
          <iframe title='resume'
            src='/IanLaksonoRe.pdf'
            className='res-embed'
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
          >
          </iframe>
        </>
      </div>
      <div className='contact-container'>
        <ContactTable />
      </div>

    </div>

  );
};

export default Contact;

// 'https://medium.com/react-rendering-in-modern-browsers/react-in-chrome-5b19006870f2?source=friends_link&sk=6303d96cb4fedc1ba41a32b4a659c797'