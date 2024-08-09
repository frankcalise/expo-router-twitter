import { Redirect, Tabs } from "expo-router";
import { Icon, IconName } from "@/components/icon";

function makeIcon(icon: IconName, activeIcon: IconName) {
  return function (props: { size: number; color: string; focused: boolean }) {
    return (
      <Icon
        width={props.size}
        height={props.size}
        name={props.focused ? activeIcon : icon}
        fill={props.color}
      />
    );
  };
}

export default function RootLayout() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Redirect href="/log-in" />;
  }

  console.log({ isAuthenticated });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "rgb(29, 155, 240)",
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: "Home",
          tabBarIcon: makeIcon("home", "home-active"),
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          title: "Search",
          tabBarIcon: makeIcon("explore", "explore-active"),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          tabBarIcon: makeIcon("profile", "profile-active"),
        }}
      />
    </Tabs>
  );
}
