import styled from "styled-components/native"
import Text from "../designSystem/atoms/Text"

export default function DraftScreen() {
  return (
    <DraftScreenStyled>
      <Text>Hey</Text>
    </DraftScreenStyled>
  )
}

const DraftScreenStyled = styled.SafeAreaView`
  border: 1px solid red;
  flex: 1;
  justify-content: center;
  align-items: center;
`
