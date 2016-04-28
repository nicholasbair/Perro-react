const styles = {
  modalStyle: {
    position: 'fixed',
    zIndex: 1040,
    top: 0, bottom: 0, left: 0, right: 0
  },

  backdropStyle: {
    position: 'fixed',
    zIndex: 1040,
    top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: '#000',
    opacity: 0.5
  },

  dialogStyle: {
    position: 'absolute',
    width: 400,
    border: '1px solid rgba(90, 85, 85, 0.9)',
    borderRadius: '4px',
    color: '#f5f6f6',
    backgroundColor: 'rgba(90, 85, 85, 0.9)',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  },

  baseButtonStyle: {
    backgroundColor: 'rgba(57, 129, 203, 0.7)',
    border: '1px solid rgba(57, 129, 203, 0.7)',
    color: '#f5f6f6'
  },

  cancelButtonStyle: {
    backgroundColor: 'rgba(170, 57, 57, 0.7)',
    border: '1px solid rgba(170, 57, 57, 0.7)',
    color: '#f5f6f6',
    marginTop: '10px'
  },

  noPad: {
    paddingLeft: 0
  }
};

export default styles;
