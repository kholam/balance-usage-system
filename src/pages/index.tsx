import React from "react";
import type { NextPage } from 'next';
import { getUsers } from "../lib/airtable";
import { User } from "../interface";
import Head from "next/head";
import { Card, Container } from "../components";
import { CardBody, CardTitle } from "../components/card";
import tw from "twin.macro";
import { TableHeader } from "../components";
import UserListItem from "../components/common/UserListItem";

interface HomeProps {
    users: User[];
}



const Home: NextPage<HomeProps> = ({ users}) => {

  return (
    <React.Fragment>
        <Head>
            <title>Dashboard</title>
        </Head>
        <Container>
            <Card>
                <CardTitle>Users</CardTitle>
                <CardBody>
                    <table tw="w-full text-left table-auto">
                        <thead>
                        <tr>
                            <TableHeader>Avatar</TableHeader>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Username</TableHeader>
                            <TableHeader>Credits</TableHeader>
                            <TableHeader>Date Joined</TableHeader>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user: User, index)=>{
                                return (
                                    <UserListItem user={user} key={index}/>
                                )

                            })
                        }

                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </Container>
    </React.Fragment>
  )
}

export async function getStaticProps() {
    const users: User[] = await getUsers() || [];

    return {
        /* pass the data as props to Home component */
        props: {
            users: users,
        },
    };
}

export default Home
