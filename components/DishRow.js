import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../themes";
import { AntDesign } from "@expo/vector-icons";

const DishRow = ({ item }) => {
  return (
    <View
      style={{ elevation: 5 }}
      className="flex-row items-center bg-white p-3 rounded-3xl  mb-3 mx-2"
    >
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <AntDesign name="minus" size={24} color="white" />
            </TouchableOpacity>
            <Text className="px-2">{2}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
