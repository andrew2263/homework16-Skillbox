import React from 'react';

const Comments = (props) => {
  const { comments, removeComment } = props;
  return (
    <ul>
      {
        comments.map((comment) => {
          return (
            <li
              key={comment.id}
            >
              <span className="author">{comment.author}</span>
              <span className="date">{comment.date}</span>
              <button
                onClick={ev => removeComment(comment.id)}
              >Удалить комментарий</button>
              <p className="text">{comment.text}</p>
            </li>
          )
        })
      }
    </ul>
  );
}

export default Comments;
