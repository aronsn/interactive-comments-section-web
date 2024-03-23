import React, { useState } from 'react';
import '../CommentInput/CommentInput.css';

export function CommentInput({currentUserImage, placeholder, replyingTo}) {
    const [input, setInput] = useState(replyingTo ? `@${replyingTo}, ` : '');

  return (
    <form className="form">
        <img className="form__picture" src={currentUserImage} alt="profile-picture" />
        <textarea className="form__input" name="create-comment" placeholder={'Add a comment...'} rows={3}  value={input} onChange={(e) => setInput(e.target.value)}></textarea>
        <button className="form__button">{placeholder}</button>
    </form>
  )
}
