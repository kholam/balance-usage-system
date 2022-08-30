import React from "react";
import Avatar from "./Avatar";
import { User } from '../../interface';
import {BadgeInfo, TableData} from "../index";
import { FormattedDate } from "react-intl";
import tw from "twin.macro";
import {TOTAL_CREDITS} from "../../constants/defaultValues";

interface UserListItemProps {
 user: User;
}

const TableRow = tw.tr`
   hover:cursor-pointer
   hover:bg-gray-200
`

/* list item for a user */
const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
    const handleUserClick = () => {
        console.log('user ===>', user);
    }

    return (
        <TableRow onClick={handleUserClick}>
            {user.avatarUrl && <TableData><Avatar avatarUrl={user.avatarUrl}/></TableData>}
            <TableData>{user.name}</TableData>
            <TableData>{user.username}</TableData>
            {/* user credits */}
            {user.credits &&
            <TableData><BadgeInfo>{user.credits} / {TOTAL_CREDITS} </BadgeInfo>
            </TableData>
            }
            {/* date joined*/}
            {  user.dateJoined &&
                <TableData><FormattedDate value={user.dateJoined} year="numeric" month="long" day="2-digit"/></TableData>
            }
        </TableRow>
    )
};

export default UserListItem;