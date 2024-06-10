import { useEffect, useState } from 'react';
import './App.css';
import { CommentInput } from './components/CommentInput/CommentInput';
import { CommentList } from './components/CommentList/CommentList';
import { DeleteCommentModal } from './components/DeleteCommentModal/DeleteCommentModal';
import dataJSON from './data.json';
import { fetchUtil } from './utils/fetchUtil';

function App() {
  const [data, setData] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const URL = 'http://localhost:5050/api/comments';

    fetchUtil(URL, 'GET')
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch(setData(undefined));
  }, []);

  if (data === undefined) {
    return (
      <div className="comment-section">
        <span>Could not fetch comments. Contact admin.</span>
      </div>
    );
  }

  return (
    <div className="comment-section">
      {data !== null ? (
        <>
          <CommentList
            comments={data}
            currentUserImage={dataJSON.currentUser.image.png}
            openModel={() => setDisplay(true)}
          />
          <CommentInput currentUserImage={dataJSON.currentUser.image.png} placeholder={'SEND'} />
          {display ? <DeleteCommentModal closeModal={() => setDisplay(false)} /> : null}
        </>
      ) : (
        <span>Loading comments...</span>
      )}
    </div>
  );
}

export default App;
