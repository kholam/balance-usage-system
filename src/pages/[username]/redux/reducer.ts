import { Credits } from "../../../interface";
import { UpdateBalanceAction } from "./action";
import { UpdateBalanceActionType } from "./state";


/*
* @params -> state: user balance states
* @params -> action: action type for button clicks
* @params -> returns updated state of user balance
* */
export const updateUserBalanceReducer = (state: Credits, action: UpdateBalanceAction): Credits => {

  switch (action.type) {
      case UpdateBalanceActionType.OPEN_PROFILE:
          return {
              ...state,
              profiles: action.payload.profiles,
          }

      case UpdateBalanceActionType.SEARCH_KOLS:
          return {
              ...state,
              searches: action.payload.searches,
          }

      case UpdateBalanceActionType.ADD_USER:
          return {
              ...state,
              users: action.payload.users,
          }
          /* update all balances */
      case UpdateBalanceActionType.UPDATE_ALL:
          return {
              ...action.payload,
          }
      default:
          return state;
  }

}