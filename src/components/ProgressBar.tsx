import React from "react";
import tw, { styled, css } from "twin.macro";

interface ProgressBarProps {
    width: number;
}

const Wrapper = tw.div`
   w-full bg-gray-200 h-1 mb-2
`

const ProgressBar: React.FC<ProgressBarProps> = ({ width}) => {
    return (
        <Wrapper>
            <div
                style={{width: `${width}%`}}
                tw="h-1 bg-indigo-500"
            />
        </Wrapper>
    )
};

export default ProgressBar;