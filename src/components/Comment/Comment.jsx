import { useState } from 'react';
import { CommentInput } from '../CommentInput/CommentInput';
import { Button } from '../Button/Button';
import { replySvg, editSvg, deleteSvg } from '../../utils/exportAssets';
import './Comment.css';
import { DeleteCommentModal } from '../DeleteCommentModal/DeleteCommentModal';
import { formatDate } from '../../utils/format';
import Feedback from '../Feedback/Feedback';
import { useFetchCommentsContext } from '../../utils/CommentsProvider';
import { fetchUtil } from '../../utils/fetchUtil';

export function Comment({
  id,
  isCurrentUser,
  currentUserImage,
  replyingTo,
  userImage,
  username,
  createdAt,
  comment,
  score,
}) {
  const { fetchComments } = useFetchCommentsContext();

  const [display, setDisplay] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(`${comment}`);
  const [modal, setModal] = useState(false);

  const handleUpdateComment = () => {
    const body = {
      id: id,
      newContent: input,
      username: username,
    };
    fetchUtil('PATCH', body).then(() => fetchComments());
    setEdit((prevState) => !prevState);
  };

  return (
    <div className="comment">
      <section className="card">
        <div className="card__flex-header">
          {userImage !== null ? (
            <img className="card__picture" src={userImage} alt="profile-picture" />
          ) : (
            <div className="card__picture--no-picture"></div>
          )}
          <p className="card__name">
            {username}
            {isCurrentUser ? <span className="card__tag">you</span> : null}
            <span className="card__createdAt">{formatDate(createdAt)}</span>
          </p>
        </div>
        {edit ? (
          <textarea className={'card__textarea'} value={input} onChange={(e) => setInput(e.target.value)} />
        ) : (
          <p className="card__paragraph">
            {replyingTo ? <span>@{replyingTo}&nbsp;</span> : null}
            {comment}
          </p>
        )}
        <Feedback id={id} score={score} />
        <div className="card__button-group">
          {isCurrentUser ? (
            <>
              <Button
                onClick={() => setModal((prevState) => !prevState)}
                className="card__delete"
                type={'icon-button'}
                iconSvg={deleteSvg}
              >
                Delete
              </Button>
              <Button
                className="card__edit"
                onClick={() => setEdit((prevState) => !prevState)}
                type={'icon-button'}
                iconSvg={editSvg}
              >
                Edit
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setDisplay((prevState) => !prevState)}
              type={'icon-button'}
              className="card__reply"
              placeholder={'Reply'}
              iconSvg={replySvg}
            >
              Reply
            </Button>
          )}
        </div>
        {edit ? (
          <Button className={'card__update'} type={'box-button'} onClick={handleUpdateComment}>
            UPDATE
          </Button>
        ) : null}
      </section>
      {display ? (
        <CommentInput
          setDisplay={() => setDisplay((prevState) => !prevState)}
          currentUserImage={currentUserImage}
          replyingTo={username}
          id={id}
          placeholder={'REPLY'}
        />
      ) : null}
      {modal ? (
        <DeleteCommentModal closeModal={() => setModal((prevState) => !prevState)} username={username} id={id} />
      ) : null}
    </div>
  );
}
