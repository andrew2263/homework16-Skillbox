let nextCommentId = 7;

export const addComment = (text, author) => {
  let date = new Date();
  let month = date.getMonth() + 1;
  let dateString = date.getDate() + '-' + month + '-' + date.getFullYear();
  return {
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    text: text.replace(/<(.*?)>/g, ""),
    author: author.replace(/<(.*?)>/g, ""),
    date: dateString
  }
}

export const removeComment = (id) => {
  return {
    type: 'REMOVE_COMMENT',
    id: id
  }
}
