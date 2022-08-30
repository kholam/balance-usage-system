import React from "react";
import tw from "twin.macro";
import {BadgeInfo} from "./common/Badge";

interface ProgressBarProps {
    width: number;
    title?: string;
    totalCredits?: number; // total credits
    credits?: number; // user credits remaining
}


const Wrapper = tw.div`
   w-full bg-gray-200 h-1 mb-2
`

/*
* Progress bar component to indicate the progress of a task
* width -> sets the progress label
* title => Displays a label on top of the progress bar
* [ credits, totalCredits ] -> use to display a tag on top of the progress bar
* */
const ProgressBar: React.FC<ProgressBarProps> = ({ width, title, credits, totalCredits}) => {
    return (
        <React.Fragment>
            { ( title || totalCredits ) &&
                <div tw="flex flex-row justify-between pb-2">
                    {title && <h6 tw="font-semibold text-black">Profiles</h6>}
                    {credits && totalCredits && <BadgeInfo>{ credits } / { totalCredits}</BadgeInfo>}
                </div>
            }
            <Wrapper>
                <div
                    style={{width: `${width}%`}}
                    tw="h-1 bg-indigo-500"
                />
            </Wrapper>
        </React.Fragment>
    )
};


export default ProgressBar;