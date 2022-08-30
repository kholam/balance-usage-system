import React from 'react';
import tw from "twin.macro";
import { ReactNodeProps } from "./index";


const Title = tw.div`
    text-gray-900 
    text-xl leading-tight
    font-medium 
    font-semibold mb-2
 `;

const CardTitle: React.FC<ReactNodeProps> = ({children}) => {
    return (
        <Title>
            {children}
        </Title>
    )
};

export default CardTitle;