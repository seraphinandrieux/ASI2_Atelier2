const cardFightingReducer = (state={cardFightList:[]},action)=>{
    switch(action.type){
        case 'SELECT_CARD_FIGHT':
            state.cardFightList.push(action.obj);
            //copy list because state is immutable
            let copyList = JSON.parse(JSON.stringify(state.cardFightList));
        return {cardFightList:copyList};
        case 'CLEAN_CARD_FIGHT':
            return {cardFightList:action.obj};
    default:
        return state;
    }
}
export default cardFightingReducer;