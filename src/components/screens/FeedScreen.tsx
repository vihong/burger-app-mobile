import React from "react"
import styled from "styled-components/native"
import Card from "../designSystem/molecules/Card"
import { View } from "react-native"
import { theme } from "../../style/theme"

export default function FeedScreen() {
  return (
    <FeedScreenStyled>
      <CardContainer>
        <Card />
      </CardContainer>
      <ViewStyled />
    </FeedScreenStyled>
  )
}

const FeedScreenStyled = styled.View`
  border: 1px solid red;
  flex: 1;
  background-color: ${theme.colors.grey};
`

const CardContainer = styled.View`
  /* background: purple; */
  flex: 0.7;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

const ViewStyled = styled.View`
  /* border: 1px solid blue; */
  background: ${theme.colors.white};
  flex: 1;
`
