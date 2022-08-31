import {NextPage} from "next";
import {useRouter} from "next/router";
import {Button, Card, Container, ProgressBar} from "../../components";
import {CardBody, CardTitle} from "../../components/card";
import Head from "next/head";
import React, {useCallback, useMemo, useReducer} from "react";
import useUser from "../../hooks/useUser";
import {PROFILES_TOTAL_CREDITS, SEARCHES_TOTAL_CREDITS, USERS_TOTAL_CREDITS} from "../../constants/defaultValues";
import {getCreditsPercentage, getResponseBody, userBalancePayLoadInfo} from "../../utils/helpers";
import {User} from "../../interface";
import {updateUserBalanceReducer} from "./redux/reducer";
import {initialState, UpdateBalanceActionType} from "./redux/state";
import tw from "twin.macro";


const cardStyling = {
    backgroundColor: 'rgb(99 102 241)',
    height: '150px',
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
}

const Credits: NextPage = () => {
    const router = useRouter();
    const username  = router.query.username as string;
    const { data, loading } = useUser({ username });
    const [state, dispatch] = useReducer(updateUserBalanceReducer, initialState);


    /* returns a memoized version of the user profile */
    const user = useMemo(() => {
        if (loading){
            return {} as User;
        }

        const { credits } = data;

        /* dispatch action and update user balance state */
        dispatch({
            type: UpdateBalanceActionType.UPDATE_ALL,
            payload: {
                ...credits
            }
        })

        return  data;

    }, [data, loading])


    /* updates user credits based on the button clicked */
    const handleUpdateBalance = useCallback(async (type: UpdateBalanceActionType) =>{

        if (type === UpdateBalanceActionType.ADD_USER && state.users === 0){
            alert('Add user balance exhausted');
            return;
        } else if (type === UpdateBalanceActionType.OPEN_PROFILE && state.profiles === 0){
            alert('Open profile balance exhausted');
            return;
        } else if (type === UpdateBalanceActionType.SEARCH_KOLS && state.searches === 0){
            alert('Search KOLS balance exhausted');
            return;
        }

        try {
            const responseBody = await getResponseBody(type, user.id, state);

            const response = await fetch("/api/updateUserBalance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...responseBody,
                }),
            });

            response.json().then((result)=>{
                // check if results contains user object
                if (result && result?.id){
                    // update user balance
                    dispatch({
                        type: responseBody.type,
                        payload: {
                            ...userBalancePayLoadInfo(type, result.credits),
                        }
                    })
                   /* setUserBalance({ ...credits });*/
                }
            }).catch(err=>console.error("Error updating user balance", err));
        } catch (err){
            console.error("Error updating user balance", err);
        }

    }, [state, user])

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
                                width={getCreditsPercentage(state.profiles, PROFILES_TOTAL_CREDITS)}
                                title="Profiles"
                                credits={state.profiles}
                                totalCredits={PROFILES_TOTAL_CREDITS}/>
                        </React.Fragment>

                        {/* searches progress bar */}
                        <React.Fragment>
                            <div tw="mt-8"/>
                            <ProgressBar
                                width={getCreditsPercentage(state.searches, SEARCHES_TOTAL_CREDITS)}
                                title="Searches"
                                credits={state.searches}
                                totalCredits={SEARCHES_TOTAL_CREDITS}/>
                        </React.Fragment>

                        {/* users progress bar */}
                        <React.Fragment>
                            <div tw="mt-8 mb-2"/>
                            <ProgressBar
                                width={getCreditsPercentage(state.users, USERS_TOTAL_CREDITS)}
                                title="Users"
                                credits={state.users}
                                totalCredits={USERS_TOTAL_CREDITS}/>
                        </React.Fragment>

                    </CardBody>
                </Card>
                {/* buttons */}
                <div tw="flex flex-col justify-center mt-1 mb-8">
                    <Button
                        tw="mt-5"
                        isDisabled={state.profiles === 0} // props for custom button component
                        disabled={state.profiles === 0} // disable button makes it unusable and unclickable
                        onClick={()=>handleUpdateBalance(UpdateBalanceActionType.OPEN_PROFILE)}>
                        Open Profile (-1 credit)
                    </Button>
                    <Button
                        tw="mt-3"
                        variant='light'
                        isDisabled={state.searches === 0}
                        disabled={state.searches === 0}
                        onClick={()=>handleUpdateBalance(UpdateBalanceActionType.SEARCH_KOLS)}>
                        Search KOLS (-1 credit)
                    </Button>

                    <Button
                        tw="mt-3"
                        variant='light'
                        isDisabled={state.users === 0}
                        disabled={state.users === 0}
                        onClick={()=>handleUpdateBalance(UpdateBalanceActionType.ADD_USER)}>
                        Add User (-1 credit)
                    </Button>
                </div>

                {/* card */}
                <div tw="cursor-pointer"
                     style={{ width: '300px', borderRadius: '15px' }}
                     onClick={()=>handleUpdateBalance(UpdateBalanceActionType.OPEN_PROFILE)}>
                    <Card style={{ ...cardStyling }} isDisabled={state.profiles === 0}>
                        <p>
                            Card(-1 credit)
                        </p>
                    </Card>
                </div>

            </Container>}

        </React.Fragment>
    )
}

export default Credits;