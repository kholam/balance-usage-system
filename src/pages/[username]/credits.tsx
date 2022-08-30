import { NextPage } from "next";
import { useRouter } from "next/router";
import { Container, Card, ProgressBar, Button } from "../../components";
import { CardBody, CardTitle } from "../../components/card";
import tw from "twin.macro";
import Head from "next/head";
import React, { useMemo } from "react";
import useUser from "../../hooks/useUser";
import {
    PROFILES_TOTAL_CREDITS,
    SEARCHES_TOTAL_CREDITS,
    USERS_TOTAL_CREDITS
} from "../../constants/defaultValues";
import { getCreditsPercentage } from "../../utils/helpers";
import { User } from "../../interface";


const Credits: NextPage = () => {
    const router = useRouter();
    const username  = router.query.username as string;

    const { data, loading } = useUser({ username });


    const user = useMemo(() => {
        if (loading){
            return {} as User;
        }

        return  data;
    }, [loading, data]);


    if (loading) {
        return <h4>Loading...</h4>
    }

    return (
        <React.Fragment>
            <Head>
                <title>Credits</title>
            </Head>
            {!loading && data && <Container>
                <Card>
                    <CardTitle>Current Balance</CardTitle>
                    <CardBody>
                        {/* profiles progress bar */}
                        <React.Fragment>
                            <div tw="mt-5"/>
                            <ProgressBar
                                width={getCreditsPercentage(user?.credits?.profiles, PROFILES_TOTAL_CREDITS)}
                                title="Profiles"
                                credits={user?.credits?.profiles}
                                totalCredits={PROFILES_TOTAL_CREDITS}/>
                        </React.Fragment>

                        {/* searches progress bar */}
                        <React.Fragment>
                            <div tw="mt-8"/>
                            <ProgressBar
                                width={getCreditsPercentage(user?.credits?.searches, SEARCHES_TOTAL_CREDITS)}
                                title="Searches"
                                credits={user?.credits?.searches}
                                totalCredits={SEARCHES_TOTAL_CREDITS}/>
                        </React.Fragment>

                        {/* users progress bar */}
                        <React.Fragment>
                            <div tw="mt-8 mb-2"/>
                            <ProgressBar
                                width={getCreditsPercentage(user?.credits?.users, USERS_TOTAL_CREDITS)}
                                title="Users"
                                credits={user?.credits?.users}
                                totalCredits={USERS_TOTAL_CREDITS}/>
                        </React.Fragment>

                    </CardBody>
                </Card>
                {/* buttons */}
                <div tw="flex flex-col justify-center mt-1">
                    <Button tw="mt-5">Open Profile (-1 credit)</Button>
                    <Button tw="mt-3" variant='light'>Search KOLS (-1 credit)</Button>
                    <Button tw="mt-3" variant='light'>Add User (-1 credit)</Button>
                </div>
            </Container>}
        </React.Fragment>
    )
}

export default Credits;