import React from 'react';
import './DeleteCommentModal.css';
import { Button } from '../Button/Button';

export const DeleteCommentModal = ({ closeModal }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__title">Delete comment</div>
        <p className="modal__text">
          Are you sure you want to delete this comment? This will remove the comment and can't be undone.
        </p>
        <div className="modal__flex-buttons">
          <Button onClick={closeModal} className={'modal__button modal__button-gray'} type={'box-button'}>
            NO, CANCEL
          </Button>
          <Button className={'modal__button modal__button-red'} type={'box-button'}>
            YES, DELETE
          </Button>
        </div>
      </div>
    </div>
  );
};
