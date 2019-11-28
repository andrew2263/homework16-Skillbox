const comments = (state = [], action) => {

  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        { id: action.id, text: action.text, author: action.author, date: action.date }
      ]

    case 'REMOVE_COMMENT':
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          state.splice(i, 1);
        }
      }
      return state.map(comment => {
        return comment;
      });

    default:
      return state;
  }
}

export default comments;
