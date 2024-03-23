import './App.css';
import { CommentInput } from './CommentInput/CommentInput';
import { CommentList } from './components/CommentList/CommentList';
import data from './data.json';

function App() {
  return (
    <div className="comment-section">
      <CommentList comments={data.comments} currentUserImage={data.currentUser.image.png} />
      <CommentInput currentUserImage={data.currentUser.image.png} placeholder={'SEND'} />
    </div>
  );
}

export default App;
