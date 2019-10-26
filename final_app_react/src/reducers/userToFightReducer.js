const userToFightReducer= (state={user:{},cardListToPlay:[],actionPoints:0},action) => {
    switch (action.type) {
        case 'INIT_USER_TO_FIGHT' :
                let tmp_user=JSON.parse(JSON.stringify(action.obj));
            return {user:tmp_user,cardListToPlay:state.cardListToPlay,actionPoints:state.actionPoints};

	case 'LOAD_CARD_FIGHT_2':
            return {cardListToPlay:action.obj}
        case 'FIGHT_CARDS_2':
            let newCardListToPlay=[];
            for(let i=0; i<state.cardListToPlay.length;i++){
                if(state.cardListToPlay[i].id!=action.obj.id){
                    newCardListToPlay.push(state.cardListToPlay[i]);
                }
            }
            return {user:state.user,cardListToPlay:newCardListToPlay,actionPoints:state.actionsPoints};

        case 'SET_ACTION_POINTS_2':
           
           
            let actionPts = action.obj +2;
        return {user:state.user,cardListToPlay:state.cardListToPlay,actionPoints:actionPts};
        case 'REMOVE_ACTION_POINTS_2':
           
           
            let actionPtsR = action.obj-1;
        return {user:state.user,cardListToPlay:state.cardListToPlay,actionPoints:actionPtsR};

        case 'SET_PLAYER2_STATE':
            return action.obj;

        
        
    default:
      return state;
    }
}

export default userToFightReducer;
