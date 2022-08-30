import { Record } from "airtable";

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
const getMinifiedRecords = (records: Array<Record<any>>) => {
    return records.map((record) => getMinifiedRecord(record));
};


export {
    getMinifiedRecord,
    getMinifiedRecords,
}

