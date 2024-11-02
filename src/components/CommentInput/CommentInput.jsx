import React, { useState } from 'react';
import './CommentInput.css';
import { Button } from '../Button/Button';
import { useCreateCommentsContext, useFetchCommentsContext } from '../../utils/CommentsProvider';

export function CommentInput({ currentUserImage, placeholder, replyingTo, id, setDisplay }) {
  const [input, setInput] = useState(replyingTo ? `@${replyingTo}, ` : '');
  const { addComment } = useCreateCommentsContext();
  const { fetchComments } = useFetchCommentsContext();

  const handleClick = (event) => {
    event.preventDefault();
    let body = null;

    body = {
      content: input,
      username: 'juliusomo',
    };

    if (id) {
      body = {
        id: id,
        content: input,
        username: 'juliusomo',
      };
    }
    addComment(body).then(() => {
      fetchComments();
      if (setDisplay) {
        setDisplay();
      }
    });
    setInput('');
  };

  return (
    <form className="form">
      <img className="form__picture" src={currentUserImage} alt="profile-picture" />
      <textarea
        className="form__input"
        name="create-comment"
        placeholder={'Add a comment...'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <Button className="form__button" type={'box-button'} iconSvg={undefined} onClick={handleClick}>
        {placeholder}
      </Button>
    </form>
  );
}
