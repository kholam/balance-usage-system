
/* User type */
export type User = {
    id: string; // unique uuid
    name: string;
    username: string; // unique
    credits: number;
    avatarUrl: string;
    dateJoined: Date;
    updatedAt: Date;
}
