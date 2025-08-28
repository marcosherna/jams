import { Tabs } from "expo-router";
import { View } from "react-native";

import XButton from "../../components/XButton";
import Icon from "../../components/Icon";

export default function TabLayout() {
  const handleSettingClick = () => {
    alert("Settings clicked");
  };

  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Icon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="library/index"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <Icon name="library-music" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Icon name="person" color={color} />,

          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                paddingRight: 20,
                gap: 3,
              }}
            >
              <XButton
                title=""
                type="text"
                shape="circle"
                icon={<Icon name="notifications" color="#4c4848ff" />}
                onClick={handleSettingClick}
              />
              <XButton
                title=""
                type="text"
                shape="circle"
                icon={<Icon name="settings" color="#635858ff" />}
                onClick={handleSettingClick}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
