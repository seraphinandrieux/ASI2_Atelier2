const chatReducer= (state={},action) => {

    switch (action.type) {
        case 'GET_USERSLIST':
            return action.obj;        
    default:
      return state;
    }
}

export default chatReducer;