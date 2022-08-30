import { Record, Records } from "airtable";
import { Credits, User } from "../interface";

/*
* returns only fields for the table and and transform it into a user type
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


export {
    getMinifiedRecord,
    getMinifiedRecords,
}

/* polyfill helper function for fetching data */
export const fetcher = (url: string) => fetch(url).then((res) => res.json());