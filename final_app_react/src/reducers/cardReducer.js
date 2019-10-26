
const cardReducer= (state={cardlist:[],selected_card:{}},action) => {
    //console.log(action);
    switch (action.type) {
        case 'UPDATE_SELECTED_CARD':
            return {selected_card: action.obj,cardlist:state.cardlist};
            case 'GET_CARDS_LIST':
            return {cardlist: action.obj,selected_card:state.selected_card};;

    default:
      return state;
    }
}

export default cardReducer;