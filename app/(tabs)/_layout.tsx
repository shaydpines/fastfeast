import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import useAuthStore from "@/store/auth.store";
import { TabBarIconProps } from "@/type";
import { images } from "@/constants";
import cn from "clsx";

const { width } = Dimensions.get("window");
const iconSize = width * 0.08;

const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
  <View className="tab-icons">
    <Image
      source={icon}
      style={{
          width: iconSize,
          height: iconSize,
      }}
      resizeMode="contain"
      tintColor={focused ? "#FE8C00" : "#5D5F6D"}
    />
    <Text
      className={cn(
        "text-sm font-bold",
        focused ? "text-primary" : "text-gray-200",
      )}
    >
      {title}
    </Text>
  </View>
);

export default function TabLayout() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: 50,
          marginHorizontal: 20,
          height: 80,
          position: "absolute",
          bottom: 40,
          backgroundColor: "#FFFFFF",
          paddingBottom: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={images.home} title="Home" />
          ),
        }}
      /> <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={images.search} title="Search" />
          ),
        }}
      /> <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={images.bag} title="Cart" />
          ),
        }}
      /> <Tabs.Screen
        name="profile"
        options={{
          title: "Profilee",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={images.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
