import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home/index" options={{ title: "Home" }} />
      <Tabs.Screen name="search/index" options={{ title: "Search" }} />
      <Tabs.Screen name="library/index" options={{ title: "Library" }} />
      <Tabs.Screen name="profile/index" options={{ title: "Profile" }} />
    </Tabs>
  );
}
