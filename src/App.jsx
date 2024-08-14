import { useEffect, useState } from 'react';
import './App.css';
import { CommentInput } from './components/CommentInput/CommentInput';
import { CommentList } from './components/CommentList/CommentList';
import { DeleteCommentModal } from './components/DeleteCommentModal/DeleteCommentModal';
import dataJSON from './data.json';
import { fetchUtil } from './utils/fetchUtil';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const URL = 'http://localhost:5051/api/comments';

    fetchUtil(URL, 'GET')
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        setData(undefined);
        setError(e);
      });
  }, []);

  if (data === undefined) {
    return (
      <div className="comment-section">
        Could not fetch comments. <br />
        {error.message}.
      </div>
    );
  }

  const filterComment = (id) => {
    setData(
      data
        .filter((comment) => comment._id !== id)
        .map((comment) => ({
          ...comment,
          replies: comment.replies.filter((reply) => reply._id !== id),
        }))
    );
  };

  return (
    <div className="comment-section">
      {data !== null ? (
        <>
          <CommentList
            comments={data}
            currentUserImage={dataJSON.currentUser.image.png}
            setModal={() => setDisplay((prevState) => !prevState)}
            modal={display}
            filterComment={filterComment}
          />
          <CommentInput currentUserImage={dataJSON.currentUser.image.png} placeholder={'SEND'} />
        </>
      ) : (
        <span>Loading comments...</span>
      )}
    </div>
  );
}

export default App;
