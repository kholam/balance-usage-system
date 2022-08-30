import React from "react";
import type { AppProps } from 'next/app'
import {GlobalStyles} from "../components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <GlobalStyles/>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App;
