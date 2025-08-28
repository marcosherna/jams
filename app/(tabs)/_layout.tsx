import { Tabs } from "expo-router";
import MIcon from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MIcon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <MIcon name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library/index"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <MIcon name="library-music" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MIcon name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
