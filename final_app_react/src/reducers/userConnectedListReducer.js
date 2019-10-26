const userConnectedListReducer= (state={users:[]},action) => {
    switch (action.type) {
        case 'UPDATE_NEW_USERLISTCONNECTED' :
                //let tmp_user=JSON.parse(JSON.stringify(action.obj));
            return {users:action.obj};

        
        
    default:
      return state;
    }
}

export default userConnectedListReducer;