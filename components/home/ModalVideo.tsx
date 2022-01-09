import React from 'react'
import Modal from '@mui/material/Modal';

type modalVideoProp= {
 open:boolean,
 handleClose:()=>void,   
}
const ModalVideo = ({open, handleClose}:modalVideoProp) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <div className="absolute top-1/2 left-1/2 w-96">
                
          </div>
        </Modal>
    )
}

export default ModalVideo
