import { NextPage } from "next";
import { useRouter } from "next/router";
import { Container } from "../../components";


const Credits: NextPage = () => {
    const router = useRouter();
    const { user} = router.query

    return (
        <Container>
            {user}
        </Container>
    )
}

export default Credits;