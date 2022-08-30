import React from "react";
import tw from "twin.macro";

interface AvatarProps {
    avatarUrl: string;
}


const Avatar: React.FC<AvatarProps> = ({ avatarUrl }) => {
    return (
            <img
                src={avatarUrl}
                alt="user image"
                css={tw`ring h-8 w-8 rounded-full`}
            />
    )
};

export default Avatar;