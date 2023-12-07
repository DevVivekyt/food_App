import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import { categories } from "../constants";

const Categories = () => {
  const [activeCategory, setactiveCategory] = React.useState(null);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";

          return (
            <View key={index} className="flex flex-col items-center mr-6">
              <TouchableHighlight
                className={`p-1 rounded-full shadow ${btnClass}`}
                onPress={() => setactiveCategory(category.id)}
              >
                <View>
                  <Image className="w-[45] h-[45]" source={category.image} />
                </View>
              </TouchableHighlight>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
