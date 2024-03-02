import './App.css';
import Comment from './components/Comment/Comment';
import data from './data.json';

function App() {
  console.log(data);

  return (
    <div className="thread">
      <Comment
        profileSrc={data.currentUser.image.png}
        username={data.currentUser.username}
        date={'1 week'}
        comment={
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
        }
        feedbackCount={0}
      />
    </div>
  );
}

export default App;
