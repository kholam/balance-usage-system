import React from "react";
import type { AppProps } from 'next/app'
import { GlobalStyles } from "../components";
import { IntlProvider } from 'react-intl'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <IntlProvider locale="en" defaultLocale="en">
        <React.Fragment>
          <GlobalStyles/>
          <Component {...pageProps} />
            <ToastContainer/>
        </React.Fragment>
      </IntlProvider>
  )
}

export default App;
