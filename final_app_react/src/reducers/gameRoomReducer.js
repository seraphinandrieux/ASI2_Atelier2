const gameRoomReducer= (state={user:{}},action) => {
    switch (action.type) {
        

        case 'USER_SELECTED' :
            let tmp_user=JSON.parse(JSON.stringify(action.obj));
        return {user:tmp_user};
        
    default:
      return state;
    }
}

export default gameRoomReducer;