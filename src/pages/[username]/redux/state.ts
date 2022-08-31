
/* action type for button clicks */
import { Credits } from "../../../interface";

export enum UpdateBalanceActionType  {
    OPEN_PROFILE =  'OPEN_PROFILE',
    SEARCH_KOLS = 'SEARCH_KOLS',
    ADD_USER = 'ADD_USER',
    UPDATE_ALL = 'UPDATE_ALL',
}

/* initial state of user balance */
export const initialState: Credits = {
    users: 0,
    searches: 0,
    profiles: 0
};
