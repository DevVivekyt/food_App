import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../themes";
import CartScreen from "../screens/CartScreen";

export default function BasketIcon() {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={openModal}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">{3}</Text>
        </View>

        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">${500}</Text>
      </TouchableOpacity>
      <CartScreen isVisible={isModalVisible} closeModal={closeModal} />
    </View>
  );
}
