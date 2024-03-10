import './App.css';
import Comment from './components/Comment/Comment';
import data from './data.json';

function App() {
  console.log(data);

  return (
    <div className="thread">
      {data.comments.map((comment) => (
        <Comment
          key={comment.id}
          userImage={comment.user.image.png}
          username={comment.user.username}
          createdAt={comment.createdAt}
          comment={comment.content}
          score={comment.score}
        />
      ))}
    </div>
  );
}

export default App;
