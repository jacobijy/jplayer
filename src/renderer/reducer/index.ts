import * as actions from '../actions';
import { combineReducers } from 'redux';

const changeVolume = (
    state = {
        volume: 50
    }, action) => {
    switch (action.type) {
        case actions.Video_Player_Volume_Down:
            return {
                ...state,
                volume: state.volume - 10
            }

        case actions.Video_Player_Volume_Up:
            return {
                ...state,
                volume: state.volume + 10
            }

        default:
            return state;
    }
}

const changePlayProgress = (
    state = {
        time: 0
    }, action) => {
    switch (action.type) {
        case actions.Video_Player_Progress_Forward:
            return {
                ...state,
                time: state.time + action.time
            }

        case actions.Video_Player_Progress_Back:
            return {
                ...state,
                time: state.time - action.time
            }

        case actions.Video_Player_Progress_Drag:
            return {
                ...state,
                time: action.time
            }
    
        default:
            return state;
    }
}

export default combineReducers({
    changeVolume,
    changePlayProgress
})