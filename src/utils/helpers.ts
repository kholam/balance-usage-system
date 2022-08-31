import { Record, Records } from "airtable";
import { Credits, User } from "../interface";
import { updateBalanceType } from "../pages/[username]/credits";

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

const getResponseBody = async (type: updateBalanceType, userId: string, userBalance: Credits) => {
    const responseBody = {} as { id: string, balance: number, type: updateBalanceType };
    responseBody.id = userId;


    if (type === updateBalanceType.OPEN_PROFILE){
        // not checking if balance is 0 before deducting
        // because the button will be disabled when the balance is 0
        responseBody.balance = userBalance.profiles - 1;
        responseBody.type = type;

    } else if (type === updateBalanceType.SEARCH_KOLS){
        responseBody.balance = userBalance.searches - 1;
        responseBody.type = type;

    } else  if (type === updateBalanceType.ADD_USER){
        responseBody.balance = userBalance.users - 1;
        responseBody.type = type;
    }

    return responseBody;
}

export {
    getMinifiedRecord,
    getMinifiedRecords,
    getCreditsPercentage,
    getResponseBody,
}

/* polyfill helper function for fetching data */
export const fetcher = (url: string) => fetch(url).then((res) => res.json());