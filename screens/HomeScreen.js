import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SerachBar from "../components/SerachBar";
import Categories from "../components/Categories";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <SerachBar />
      {/* categories */}
      <Categories />

      {/* featured */}
      <View className="mt-5">
        {[featured, featured, featured].map((item, index) => {
          return (
            <FeaturedRow
              key={index}
              title={item.title}
              restaurant={item.restaurants}
              description={item.description}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
