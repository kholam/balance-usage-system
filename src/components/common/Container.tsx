import styled from "styled-components";
import React from "react";
import tw from "twin.macro";


const Layout = styled.div(()=>[
    tw` container mx-auto my-10 w-80
        md:container md:mx-auto
        p-4 h-auto
    `,
]);

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) =>{
    return (
        <Layout>
            {children}
        </Layout>
    )
};

export default Container;