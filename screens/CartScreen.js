import { View, Text, Button } from "react-native";
import React from "react";
import { Modal } from "react-native-modal";

const CartScreen = ({ isVisible, closeModal }) => {
  return (
    <View>
      {/* <Modal isVisible={true}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            <Text>Modal Content</Text>
            <Button title="Close Modal" onPress={closeModal} />
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default CartScreen;
