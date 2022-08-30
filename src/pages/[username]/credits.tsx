import { NextPage } from "next";
import { useRouter } from "next/router";
import { Container, Card, ProgressBar } from "../../components";
import { CardBody, CardTitle} from "../../components/card";
import tw from "twin.macro";
import Head from "next/head";
import React from "react";
import useUser from "../../hooks/useUser";
import {
    PROFILES_TOTAL_CREDITS,
    SEARCHES_TOTAL_CREDITS,
    USERS_TOTAL_CREDITS
} from "../../constants/defaultValues";
import { getCreditsPercentage } from "../../utils/helpers";


const Credits: NextPage = () => {
    const router = useRouter();
    const username  = router.query.username as string;

    const { data, loading } = useUser({ username });

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
                                width={getCreditsPercentage(data?.credits?.profiles, PROFILES_TOTAL_CREDITS)}
                                title="Profiles"
                                credits={data?.credits?.profiles}
                                totalCredits={PROFILES_TOTAL_CREDITS}/>
                        </React.Fragment>

                        {/* searches progress bar */}
                        <React.Fragment>
                            <div tw="mt-8"/>
                            <ProgressBar
                                width={getCreditsPercentage(data?.credits?.searches, SEARCHES_TOTAL_CREDITS)}
                                title="Searches"
                                credits={data?.credits?.searches}
                                totalCredits={SEARCHES_TOTAL_CREDITS}/>
                        </React.Fragment>

                        {/* users progress bar */}
                        <React.Fragment>
                            <div tw="mt-8 mb-2"/>
                            <ProgressBar
                                width={getCreditsPercentage(data?.credits?.users, USERS_TOTAL_CREDITS)}
                                title="Users"
                                credits={data?.credits?.users}
                                totalCredits={USERS_TOTAL_CREDITS}/>
                        </React.Fragment>

                    </CardBody>
                </Card>
            </Container>}
        </React.Fragment>
    )
}

export default Credits;