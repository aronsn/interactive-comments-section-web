import React, { Fragment } from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

export function CommentList({ comments }) {
  return (
    <div className="main-thread">
      {comments
        ? comments.map((comment) => (
            <Fragment key={comment.id}>
              <Comment
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
                        originalPoster={comment.user.username}
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
