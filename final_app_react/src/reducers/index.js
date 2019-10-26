import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import sessionReducer from './sessionReducer';
import gameRoomReducer from './gameRoomReducer';
import userToFightReducer from './userToFightReducer';
import userConnectedListReducer from './userConnectedListReducer';
import cardFightingReducer from './cardFightingReducer';
import socketReducer from './socketReducer';

import setPlayersInfoReducer from './setPlayersInfoReducer';
import currentUserReducer from './currentUserReducer';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';
import socketChatReducer from './socketChatReducer';

import userReducer from './userReducer';

const globalReducer = combineReducers({
    userReducer     : userReducer,
    cardReducer     : cardReducer,
    sessionReducer  : sessionReducer,
    gameRoomReducer  : gameRoomReducer,
    currentUserReducer:currentUserReducer,
    userToFightReducer : userToFightReducer,
    userConnectedListReducer : userConnectedListReducer,
    cardFightingReducer:cardFightingReducer,
    socketReducer       : socketReducer,
    socketChatReducer   : socketChatReducer,
    setPlayersInfoReducer:setPlayersInfoReducer,
	chatReducer:chatReducer,
    messageReducer:messageReducer
});

export default globalReducer;
