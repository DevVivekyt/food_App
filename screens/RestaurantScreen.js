import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { themeColors } from "../themes";
import { Feather } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BacketIcon";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const { params } = useRoute();
  let item = params;

  return (
    <SafeAreaView>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-green-700">{item.stars} </Text>
                <Text className="text-gray-700">
                  ({item.reviews} review) .{" "}
                  <Text className="font-semibold">{item.category}</Text>
                </Text>
              </Text>
              <View className="flex-row items-center space-x-1 my-1">
                <Feather name="map-pin" size={15} color="gray" />
                <Text className="text-gray-700 text-xs">
                  Nearby: {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-700 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow key={index} item={dish} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
