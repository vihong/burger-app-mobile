import React from "react"
import styled from "styled-components/native"
import Card from "../designSystem/molecules/Card"
import { theme } from "../../style/theme"

export default function FeedScreen() {
  return (
    <FeedScreenStyled>
      <CardContainer>
        <Card
          title="Red jacket for sale!"
          subtitle="$100"
          imageSource={require("../../assets/jacket.jpg")}
        />
        <Card
          title="Couch in great condition!"
          subtitle="$900"
          imageSource={require("../../assets/couch.jpg")}
        />
      </CardContainer>
    </FeedScreenStyled>
  )
}

const FeedScreenStyled = styled.View`
  border: 2px solid red;
  flex: 1;
  background-color: ${theme.colors.grey};
  padding: 0 20px 0;
`

const CardContainer = styled.View`
  /* background: purple; */
  flex: 1;
  margin-top: 100px;
`
