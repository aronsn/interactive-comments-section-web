import React, { Fragment } from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

export function CommentList({ comments, currentUserImage, openModel }) {
  return (
    <div className="comments__main-section">
      {comments
        ? comments.map((comment) => (
            <Fragment key={comment.id}>
              <Comment
                currentUser={comment.user.username === 'juliusomo'}
                currentUserImage={currentUserImage}
                userImage={comment.user.image.png}
                username={comment.user.username}
                createdAt={comment.createdAt}
                comment={comment.content}
                score={comment.score}
                openModel={openModel}
              />

              <div className="comments__sub-section">
                {comment.replies
                  ? comment.replies.map((reply) => (
                      <Comment
                        key={reply.id}
                        isCurrentUser={reply.user.username === 'juliusomo'}
                        currentUserImage={currentUserImage}
                        replyingTo={reply.replyingTo}
                        userImage={reply.user.image.png}
                        username={reply.user.username}
                        createdAt={reply.createdAt}
                        comment={reply.content}
                        score={reply.score}
                        openModel={openModel}
                      />
                    ))
                  : null}
              </div>
            </Fragment>
          ))
        : null}
    </div>
  );
}
