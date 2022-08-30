import Airtable from "airtable";
import {User} from "../interface";
import { getMinifiedRecords, getMinifiedRecord } from "../utils/helpers";
// authenticate and configure Airtable API
Airtable.configure({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
});

// initialize the base
const base = Airtable.base(`${process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY}`);

// reference table created on Airtable
const table = base(`${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME}`);


/* returns ony first page of records in the database
* Page size is 100 by default
* */
const getUsers = async (): Promise<User[]> => {

    const userRecords = await table
            .select()
            .firstPage();

    return getMinifiedRecords(userRecords) as User[];
}


/*
* filters the user table records by username
* NB: The username field is unique
* */
const filterRecordsByUsername = async (username: string) => {
    const record = await table
        .select({
            filterByFormula: `username="${username}"`,
        })
        .firstPage();

    return getMinifiedRecord(record[0]);
};

export { table, base, getUsers, filterRecordsByUsername }
