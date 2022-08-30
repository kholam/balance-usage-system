import React from "react";
import tw from "twin.macro";


const Layout = tw.div`
  container mx-auto my-10 w-80
  md:container md:mx-auto
  p-2 h-auto
 `;

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