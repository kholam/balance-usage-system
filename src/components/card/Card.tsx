import React from "react";
import tw, { styled, css } from "twin.macro";
import { ReactNodeProps } from "./index";

interface containerProps {
    style?: Record<string, string>;
    isDisabled?: boolean;
}


const Container = styled.div(({ style, isDisabled } : containerProps )=>[
    tw`flex justify-center
        block p-6 rounded-lg shadow-lg bg-white
        w-auto`,

    isDisabled && tw`cursor-not-allowed opacity-60`,

    css`
        ${style};
    `
])

interface CardProps extends ReactNodeProps {
    style?: Record<string, string>;
    isDisabled?: boolean;
}

const Card: React.FC<CardProps>= ({children, isDisabled, style}) => {

    return (
        <Container style={style} isDisabled={isDisabled}>
            {children}
        </Container>
    )

};

export default Card;