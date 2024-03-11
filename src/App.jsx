import './App.css';
import { CommentList } from './components/CommentList/CommentList';
import data from './data.json';

function App() {
  return (
    <div className="comment-section">
      <CommentList comments={data.comments} />
    </div>
  );
}

export default App;
