import { getMinifiedRecord } from "../../utils/helpers";
import { table } from '../../lib';
import { NextApiRequest, NextApiResponse } from 'next';
import { UpdateBalanceActionType } from "../../redux/state";

// fields required for updating a record
type fields = {
    profileCredits?: string;
    searchCredits?: string;
    usersCredits?: string;
}

const updateUserBalance = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {

        /* destructure the request body json values */
        const { id, balance, type } = req.body;

        /* fields to be updated */
        const fields = {} as fields;

        /* checks field type to use for updating the balance  */
        if (type === UpdateBalanceActionType.OPEN_PROFILE) {
            fields.profileCredits = balance;
        } else if (type === UpdateBalanceActionType.SEARCH_KOLS) {
            fields.searchCredits = balance;
        } else if (type === UpdateBalanceActionType.ADD_USER) {
            fields.usersCredits = balance;
        }


        try {
            if (id) {
                //update user record
                const updatedRecords = await table.update([{
                    id: `${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID}`,
                    fields: {
                        id,
                        ...fields,
                    }}]);

                res.json(getMinifiedRecord(updatedRecords[0]));
            }
        } catch (err) {
            console.error("Error updating user record", err);
            res.status(500);
            res.json({ message: "Error updating user record", err });
        }
    }
};

export default updateUserBalance;