import { Record, Records } from "airtable";
import { Credits, User } from "../interface";
import { UpdateBalanceActionType } from "../pages/[username]/redux/state";

/*
* returns only fields for the table  and transform it into a user type
* */
const getMinifiedRecord = (record: Record<any>): User => {

    return {
        id: record.id,
        credits: {
            users: record.get('usersCredits') | 0,
            profiles: record.get('profileCredits') | 0,
            searches: record.get('searchCredits') | 0,
        } as Credits,
        ...record.fields,
    };
};

/* maps a list of air table records */
const getMinifiedRecords = (records: Records<any>) => {
    return records.map((record: Record<any>) => getMinifiedRecord(record));
};


/*
* computes the percentage value for each credit used rounded to the closest whole nunber
* credits -> number of user credits remaining
* totalCredits -> default credits used in the system
* */
const getCreditsPercentage = (credits: number, totalCredits: number) => {

    const creditsPercenet = (credits / totalCredits) * 100;

    return Math.round(creditsPercenet) || 0;
}

/* returns the response body for updating a user balance
* @params -> type: type of action performed
* @params -> userId: ID of user
* @params -> userBalance: current balance of the user
* */

const getResponseBody = async (type: UpdateBalanceActionType, userId: string, state: Credits) => {
    const responseBody = {} as { id: string, balance: number, type: UpdateBalanceActionType };
    responseBody.id = userId;


    if (type === UpdateBalanceActionType.OPEN_PROFILE){
        responseBody.balance = state.profiles - 1;
        responseBody.type = type;

    } else if (type === UpdateBalanceActionType.SEARCH_KOLS){
        responseBody.balance = state.searches - 1;
        responseBody.type = type;

    } else  if (type === UpdateBalanceActionType.ADD_USER){
        responseBody.balance = state.users - 1;
        responseBody.type = type;
    }

    return responseBody;
}

/* returns payload info for a specific type
* @params -> type: update balance action type
* @params -> credits: current balance of user
* */
export const userBalancePayLoadInfo = (type: UpdateBalanceActionType, state: Credits) => {
    let payloadInfo = { ...state };

    if (type === UpdateBalanceActionType.OPEN_PROFILE){
        payloadInfo = {
            ...payloadInfo,
            profiles: state.profiles
        }

    } else if (type === UpdateBalanceActionType.SEARCH_KOLS){
        payloadInfo = {
            ...payloadInfo,
            searches: state.searches
        }

    } else  if (type === UpdateBalanceActionType.ADD_USER){
        payloadInfo = {
            ...payloadInfo,
            users: state.users,
        }
    }

    return payloadInfo;
}

export {
    getMinifiedRecord,
    getMinifiedRecords,
    getCreditsPercentage,
    getResponseBody,
}

/* polyfill helper function for fetching data */
export const fetcher = (url: string) => fetch(url).then((res) => res.json());