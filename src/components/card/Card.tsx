import React from "react";
import tw from "twin.macro";
import { ReactNodeProps } from "./index";


const Container = tw.div`
        flex justify-center
        block p-6 rounded-lg shadow-lg bg-white
        w-auto
`


const Card: React.FC<ReactNodeProps>= ({children}) => {

    return (
        <Container>
            {children}
        </Container>
    )

};

export default Card;