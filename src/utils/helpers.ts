import { Record, Records } from "airtable";

/*
* returns only the fields for a table
* */
const getMinifiedRecord = (record: Record<any>) => {
    return {
        id: record.id,
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