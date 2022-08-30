import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import { COLORS } from "../assets/styles";

/* global styling */
const CustomStyles = createGlobalStyle`

  @font-face {
    font-family: "Candara";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Candara-Regular.ttf) format("truetype");
  }

  @font-face {
    font-family: "Candara-Bold";
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: url(/fonts/Candara-Bold.ttf) format("truetype");
  }
  
  html {
    font-family: 'Candara', sans-serif;
  }
  
  body {
    background-color: ${COLORS.SNOW};
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
  }

  body::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`

const GlobalStyles = () => (
    <>
        <BaseStyles/>
        <CustomStyles/>
    </>
)

export default GlobalStyles