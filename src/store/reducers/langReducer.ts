import {LangAction, LangState, SET_LANGUAGE} from "../types";

const localStoragelang = localStorage.getItem('language');

const initialState: LangState = {
    language: localStoragelang? localStoragelang : 'en'
}

const langReducer = (state = initialState, action: LangAction) => {
    switch (action.type){
        case SET_LANGUAGE:
            return{
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}

export default langReducer;