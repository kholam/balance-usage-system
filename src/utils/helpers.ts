import { Record, Records } from "airtable";
import { Credits, User } from "../interface";

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

export {
    getMinifiedRecord,
    getMinifiedRecords,
    getCreditsPercentage,
}

/* polyfill helper function for fetching data */
export const fetcher = (url: string) => fetch(url).then((res) => res.json());