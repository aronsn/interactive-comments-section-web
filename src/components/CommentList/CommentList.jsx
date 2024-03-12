import React, { Fragment } from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

export function CommentList({ comments }) {
  return (
    <div className="thread">
      {comments
        ? comments.map((comment) => (
            <Fragment key={comment.id}>
              <Comment
                currentUser={comment.user.username === 'juliusomo'}
                userImage={comment.user.image.png}
                username={comment.user.username}
                createdAt={comment.createdAt}
                comment={comment.content}
                score={comment.score}
              />

              <div className="sub-thread">
                {comment.replies
                  ? comment.replies.map((reply) => (
                      <Comment
                        key={reply.id}
                        currentUser={reply.user.username === 'juliusomo'}
                        replyingTo={reply.replyingTo}
                        userImage={reply.user.image.png}
                        username={reply.user.username}
                        createdAt={reply.createdAt}
                        comment={reply.content}
                        score={reply.score}
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
