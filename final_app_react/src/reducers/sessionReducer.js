const sessionReducer= (state={},action) => {

    switch (action.type) {
        case 'OPEN_SESSION':
            return action.obj;
        case 'CLOSE_SESSION':
            return action.obj;
    default:
      return state;
    }
}

export default sessionReducer;