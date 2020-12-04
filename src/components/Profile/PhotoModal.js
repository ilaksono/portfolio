import {Modal} from '@material-ui/core'
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PhotoModal = (props) => {
  const classes = useStyles();
  return (
    <div className='photo-modal-container'>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        onClose={props.onHide}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        open={props.show}
      >
        <Fade in={props.show}>
          <img src={props.url} alt='no img found' style={{ outline: 'none', maxHeight: '500px' }} />
        </Fade>
      </Modal>
    </div>
  );

};


export default PhotoModal;

