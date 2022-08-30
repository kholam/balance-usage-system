import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import { COLORS } from "../assets/styles";

const CustomStyles = createGlobalStyle`
  body {
    background-color: ${COLORS.SNOW};
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`

const GlobalStyles = () => (
    <>
        <BaseStyles/>
        <CustomStyles/>
    </>
)

export default GlobalStyles