import { useState } from 'react';
import './App.css';
import { CommentInput } from './components/CommentInput/CommentInput';
import { CommentList } from './components/CommentList/CommentList';
import { DeleteCommentModal } from './components/DeleteCommentModal/DeleteCommentModal';
import data from './data.json';

function App() {
  // Great work! I havent got much to add beyond whats already been said. but I just wantes to say congrats! Youve done an excellent job on this!
  const [display, setDisplay] = useState(false);

  return (
    <div className="comment-section">
      <CommentList
        comments={data.comments}
        currentUserImage={data.currentUser.image.png}
        openModel={() => setDisplay(true)}
      />
      <CommentInput currentUserImage={data.currentUser.image.png} placeholder={'SEND'} />
      {display ? <DeleteCommentModal closeModal={() => setDisplay(false)} /> : null}
    </div>
  );
}

export default App;
