// actions for the reducer
import {Credits} from "../interface";
import { UpdateBalanceActionType } from "./state";

// actions for the reducer
export type UpdateBalanceAction = {
    type: UpdateBalanceActionType;
    payload: Credits;
}
