import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

const StyledImage = styled.Image`
  width: 20px;
  height: 20px;
`;

const StyledImageBackground = styled.ImageBackground`
  display: flex;
  flex-direction: row;

  flex: 1;

  width: 100%;
  min-width: 112px;

  height: 100%;
  min-height: 52px;

  margin-top: 16px;

  justify-content: center;
  align-items: center;

  border-radius: 9999px;

  overflow: hidden;
`;

const StyledText = styled.Text`
  font-weight: 600;
  font-size: 16px;

  margin-left: 8px;
`;

const StyledView = styled.View`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  margin-top: 16px;

  border-radius: 9999px;
`;

interface TabIconInterface {
  focused: boolean;
  icon: ImageSourcePropType | undefined;
  title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconInterface) => {
  if (focused)
    return (
      <StyledImageBackground source={images.highlight}>
        <StyledImage source={icon} tintColor="#151312" />
        <StyledText>{title}</StyledText>
      </StyledImageBackground>
    );

  return (
    <StyledView>
      <StyledImage source={icon} tintColor={"#A8B5DB"} />
    </StyledView>
  );
};

export default function _Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: '#0f0d23'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
