import React from "react";
import tw from "twin.macro";



const Body = tw.div`
    text-gray-700 text-base mb-4
 `;

interface CardBodyProps {
    children: React.ReactNode
}

const CardBody: React.FC<CardBodyProps> = ({children}) =>{
    return (
        <Body>
            {children}
        </Body>
    )
};

export default CardBody;