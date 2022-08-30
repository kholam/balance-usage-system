import { NextPage } from "next";
import { useRouter } from "next/router";


const Credits: NextPage = () => {
    const router = useRouter();
    const { user} = router.query

    return (
        <>slug: {user}</>
    )
}

export default Credits;