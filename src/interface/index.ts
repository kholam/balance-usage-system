

/* credits type */
export type Credits = {
    profiles: number;
    searches: number;
    users: number;
}


/* User type */
export type User = {
    id: string; // unique uuid
    name: string;
    username: string; // unique
    credits: Credits;
    avatarUrl: string;
    dateJoined: Date;
    updatedAt?: Date;
}
