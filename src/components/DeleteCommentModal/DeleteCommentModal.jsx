import React from 'react';
import './DeleteCommentModal.css';
import { Button } from '../Button/Button';
import { fetchUtil } from '../../utils/fetchUtil';
import { useFetchCommentsContext } from '../../utils/CommentsProvider';

export const DeleteCommentModal = ({ closeModal, username, id }) => {
  const { fetchComments } = useFetchCommentsContext();
  const deleteComment = () => {
    const body = {
      id: id,
      username: username,
    };

    fetchUtil('DELETE', body).then(() => {
      fetchComments();
    });

    closeModal();
  };

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
          <Button className={'modal__button modal__button-red'} type={'box-button'} onClick={deleteComment}>
            YES, DELETE
          </Button>
        </div>
      </div>
    </div>
  );
};
