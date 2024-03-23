import './App.css';
import { CommentInput } from './CommentInput/CommentInput';
import { CommentList } from './components/CommentList/CommentList';
import data from './data.json';

function App() {
  // Great work! I havent got much to add beyond whats already been said. but I just wantes to say congrats! Youve done an excellent job on this!
  return (
    <div className="comment-section">
      <CommentList comments={data.comments} currentUserImage={data.currentUser.image.png} />
      <CommentInput currentUserImage={data.currentUser.image.png} placeholder={'SEND'} />
    </div>
  );
}

export default App;
