import './Comment.css';

export function Comment({ originalPoster, userImage, username, createdAt, comment, score }) {
  return (
    <section className="card">
      <div className="card__flex-header">
        <img className="card__picture" src={userImage} alt="profile-picture" />
        <p className="card__name">
          {username} <span className="card__published-date">{createdAt}</span>
        </p>
      </div>
      <p className="card__paragraph">
        {originalPoster ? <span>@{originalPoster}</span> : null}
        &nbsp;{comment}
      </p>
      <div className="card__feedback">
        <button className="card__feedback-button ">
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
          </svg>
        </button>
        <div className="card__feedback-number card--color-blue">{score}</div>
        <button className="card__feedback-button">
          <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
          </svg>
        </button>
      </div>
      <button className="card__reply-button card--color-blue">
        <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
          <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
        </svg>
        Reply
      </button>
    </section>
  );
}
