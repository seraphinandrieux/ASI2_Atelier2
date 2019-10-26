const currentUserReducer=(state={cardListToPlay:[],actionPoints:0},action)=>{
    switch (action.type){
        case 'LOAD_CARD_FIGHT_1':
            return {cardListToPlay:action.obj,actionPoints:state.actionPoints}

        case 'FIGHT_CARDS_1':
            let newCardListToPlay=[];
            for(let i=0; i<state.cardListToPlay.length;i++){
                if(state.cardListToPlay[i].id!=action.obj.id){
                    newCardListToPlay.push(state.cardListToPlay[i]);
                }
            }
            return {cardListToPlay:newCardListToPlay,actionPoints:state.actionPoints};

        case 'SET_ACTION_POINTS_1':
            
            let actionPts = action.obj +2;
        return {cardListToPlay:state.cardListToPlay,actionPoints:actionPts};

        case 'REMOVE_ACTION_POINTS_1':
            
            let actionPtsR = action.obj-1;
        return {cardListToPlay:state.cardListToPlay,actionPoints:actionPtsR};

        case 'SET_PLAYER1_STATE':
            return action.obj;

        default:
            return state;

    }
}

export default currentUserReducer;
