import React from "react";
import type { NextPage } from 'next';
import Button from "../components/Button";

const Home: NextPage = () => {

    const handleButtonClick = () =>{
        console.log('handle click button')
    }

  return (
    <React.Fragment>
        <Button variant='primary' onClick={handleButtonClick}>
            Secondary
        </Button>
    </React.Fragment>
  )
}

export default Home
