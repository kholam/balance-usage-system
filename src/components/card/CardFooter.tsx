import React from "react";
import { ReactNodeProps } from "./index";
import tw from "twin.macro";


const CardFooter: React.FC<ReactNodeProps> = ({children}) => {
    return (
        <div tw="mt-2 mb-2">
            {children}
        </div>
    )
}

export default CardFooter;