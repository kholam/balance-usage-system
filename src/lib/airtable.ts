import Airtable from "airtable";

// authenticate and configure Airtable API
Airtable.configure({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
});

// initialize the base
const base = Airtable.base(`${process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY}`);

// reference table created on Airtable
const table = base(`${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME}`);

export { table }