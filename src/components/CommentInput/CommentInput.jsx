import React, { useState } from 'react';
import './CommentInput.css';
import { Button } from '../Button/Button';

export function CommentInput({ currentUserImage, placeholder, replyingTo }) {
  const [input, setInput] = useState(replyingTo ? `@${replyingTo}, ` : '');

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
      <Button className="form__button" type={'box-button'} iconSvg={undefined} onClick={undefined}>
        {placeholder}
      </Button>
    </form>
  );
}
