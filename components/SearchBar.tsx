import { icons } from "@/constants/icons";
import styled from "styled-components/native";

const StyledSearchView = styled.View`
  flex-direction: row;

  align-items: center;

  border-radius: 9999px;

  padding-inline: 20px;
  padding-block: 16px;

  min-width: 100%;

  background-color: #040018;
`;

const StyledImage = styled.Image.attrs({
  source: icons.search,
  resizeMode: "contain",
  tintColor: "#ab8bff",
})`
  width: 20px;
  height: 20px;
`;

const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: "#a8b5db",
})`
  flex: 1;
  margin-left: 8px;
  color: white;
`;

interface Props {
  placeholder: string;
  onPress?: () => void;
}

export default function SearchBar({ placeholder, onPress }: Props) {
  return (
    <StyledSearchView>
      <StyledImage />
      <StyledTextInput 
        onPress={onPress}
        value=""
        onChange={() => {}}
        placeholder={placeholder}
      />
    </StyledSearchView>
  );
}
