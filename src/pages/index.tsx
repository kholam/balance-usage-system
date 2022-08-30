import React from "react";
import type { NextPage } from 'next';
import { getUsers } from "../lib/airtable";
import { User } from "../interface";

interface HomeProps {
    users: User[];
}

const Home: NextPage<HomeProps> = ({ users}) => {
    console.log('users', users);


  return (
    <React.Fragment>
    </React.Fragment>
  )
}

export async function getStaticProps() {
    const users: User[] = await getUsers() || [];

    return {
        /* page the data to the component as props */
        props: {
            users: users,
        },
    };
}

export default Home
