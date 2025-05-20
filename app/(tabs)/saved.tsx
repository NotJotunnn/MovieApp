import { Link } from 'expo-router';
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  gap: 15px;
`

const StyledText = styled.Text`
  font-size: 32px;
  font-weight: semibold;
  text-align: center;
`

export default function Saved() {
  return (
    <StyledView>
      <StyledText>Welcome.</StyledText>
    </StyledView>
  );
}