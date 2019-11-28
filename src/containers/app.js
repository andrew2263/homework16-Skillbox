import React from 'react';
import { connect } from 'react-redux';

import Comments from '../components/comments.js';
import AddComment from '../components/add-comment.js';

import { addComment, removeComment } from '../actions';

let App = (props) => {
  const {
    comments, addComment, removeComment
  } = props;

  return (
    <div>
      <Comments comments={comments} removeComment={removeComment} />
      <AddComment addComment={addComment} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (text, author) => dispatch(addComment(text, author)),
    removeComment: (id) => dispatch(removeComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
