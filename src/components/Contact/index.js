import 'styles/Contact.scss';
import ContactTable from './ContactTable';
const Contact = () => {


  return (
    <div className='contact-layout page-right'>

      <div className='res-embed-container'>
        <iframe title='resume'
          src='/IanLaksonoRe.pdf'
          className='res-embed'
        >
        </iframe>
      </div>
      <div className='contact-container'>

        <ContactTable/>
      </div>

    </div>

  );
};

export default Contact;