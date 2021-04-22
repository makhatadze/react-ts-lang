import {SET_LANGUAGE, LangState, LangAction} from "../types";

const localStoragelang = localStorage.getItem('language');

const initialState: LangState = {
    language: localStoragelang? localStoragelang : 'en'
}
