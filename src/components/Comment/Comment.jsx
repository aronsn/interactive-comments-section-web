import plusIcon from '../../assets/icon-plus.svg';
import minusIcon from '../../assets/icon-minus.svg';
import replyIcon from '../../assets/icon-reply.svg';
import './Comment.css';

export default function Comment({ profileSrc, username, date, comment, feedbackCount }) {
  return (
    <section className="card">
      <div className="card__flex-header">
        <img className="card__picture" src={profileSrc} alt="profile-picture" />
        <p className="card__name">
          {username} <span>{date} ago</span>
        </p>
      </div>
      <p className="card__body">{comment}</p>
      <div className="card__feedback-container">
        <button className="card__feedback-button">
          <img src={plusIcon} alt="icon-plus" />
        </button>
        <div className="card__feedback-number">{feedbackCount}</div>
        <button className="card__feedback-button">
          <img src={minusIcon} alt="icon-minus" />
        </button>
      </div>
      <button className="card__reply-button">
        <img src={replyIcon} alt="icon-reply" />
        Reply
      </button>
    </section>
  );
}
