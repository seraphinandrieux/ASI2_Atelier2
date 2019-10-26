const socketReducer= (state={},action) => {
    switch (action.type) {
        case 'INIT_SOCKET' :
                
            return action.obj;
        

    default:
      return state;
    }
}

export default socketReducer;