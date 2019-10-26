const messageReducer= (state={messageList:[]},action) => {

    switch (action.type) {
        case 'NEW_MESSAGE':
        state.messageList.push(action.obj)
        let newMessageList= JSON.parse(JSON.stringify(state.messageList))
            return {messageList:newMessageList};        
    default:
      return state;
    }
}

export default messageReducer;