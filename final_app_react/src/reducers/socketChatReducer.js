const socketChatReducer= (state={},action) => {
    switch (action.type) {
        case 'INIT_SOCKET' :
                
            return action.obj;
        

    default:
      return state;
    }
}

export default socketChatReducer;