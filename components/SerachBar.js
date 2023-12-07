import { View, Text, TextInput } from "react-native";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { themeColors } from "../themes/index.js";

const SerachBar = () => {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [city, setCity] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      // Request permission to access the user's location
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Get the user's current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Reverse geocode the coordinates to get the address
      let address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      // Extract the city from the address
      if (address.length > 0) {
        setCity(address[0].city);
      }
    })();
  }, []);
  return (
    <View className="mt-4 flex-row items-center space-x-2 px-4 pb-2">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <AntDesign name="search1" size={25} color="gray" />
        <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
        <View className="flex-row items-center space-x-1 bottom-0 border-l-2 border-gray-300">
          <Feather name="map-pin" size={20} color="gray" />
          <Text>City: {city ? city : "Loading..."}</Text>
          {errorMsg && <Text>{errorMsg}</Text>}
        </View>
      </View>
      <View
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="p-3 rounded-full"
      >
        <Feather name="sliders" size={24} color="white" />
      </View>
    </View>
  );
};

export default SerachBar;
