import { useEffect, useState } from 'react';
import './App.css';
import { CommentInput } from './components/CommentInput/CommentInput';
import { CommentList } from './components/CommentList/CommentList';
import dataJSON from './data.json';
import { fetchUtil } from './utils/fetchUtil';
import { CommentsProvider } from './utils/CommentsProvider';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    fetchUtil('GET')
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        setData(undefined);
        setError(e);
      });
  };

  const addComment = async (body) => {
    try {
      await fetchUtil('POST', body);
    } catch (error) {
      throw Error('Could not create comment');
    }
  };

  if (data === undefined) {
    return (
      <div className="comment-section">
        Could not fetch comments. <br />
        {error.message}.
      </div>
    );
  }

  return (
    <div className="comment-section">
      {data !== null ? (
        <CommentsProvider fetchComments={fetchComments} addComment={addComment}>
          <CommentList comments={data} currentUserImage={dataJSON.currentUser.image.png} />
          <CommentInput currentUserImage={'/avatars/image-juliusomo.png'} placeholder={'SEND'} />
        </CommentsProvider>
      ) : (
        <span>Loading comments...</span>
      )}
    </div>
  );
}

export default App;
