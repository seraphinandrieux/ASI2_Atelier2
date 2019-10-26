const setPlayersInfoReducer=(state={playersInfo:{}},action)=>{
    switch(action.type){
        case 'SET_PLAYERS':
        let newJson=action.obj;
        return{playersInfo:newJson};
    default:
        return state;
    }
}
export default setPlayersInfoReducer;