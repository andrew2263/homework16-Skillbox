import React from 'react';

const AddComment = (props) => {
  const { addComment } = props;
  return (
    <div>
      <p>Добавить комментарий:</p>
      <input
        type="text"
        id="comment-author-input"
        placeholder="Автор"
        required="required"
      />
      <textarea
        id="comment-text"
        placeholder="Текст комментария"
      />
      <input
        type="submit"
        value="Добавить комментарий"
        onClick={ev => {
          addComment(document.querySelector('#comment-text').value,
            document.querySelector('#comment-author-input').value);
          document.querySelector('#comment-text').value = '';
          document.querySelector('#comment-author-input').value = '';
        }}
      />
    </div>
  );
}

export default AddComment;
