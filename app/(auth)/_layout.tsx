import {
  View,
  Text,
  KeyboardAvoidingView,
  Animated,
  Dimensions,
  ImageBackground,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Slot } from "expo-router";
import ScrollView = Animated.ScrollView;
import { images } from "@/constants";
import useAuthStore from "@/store/auth.store";


export default function AuthLayout() {
  const { isAuthenticated } = useAuthStore();
  if(isAuthenticated) return <Redirect href="/" />;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
        <View className="w-full relative" style={{ height: Dimensions.get('screen').height / 2.25}}>
          <ImageBackground source={images.loginGraphic} className="size-full rounded-b-lg" resizeMode="stretch" />
          <Image source={images.logo} className="self-center size-48 absolute -bottom-16 z-10"/>
        </View>
      <Slot />
      </ScrollView>

    </KeyboardAvoidingView>
  );
}
