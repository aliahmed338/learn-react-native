import { Image, View } from "react-native";
import React from "react";

const ImageComponents = () => {
  return (
    <View>
      <Image
        source={require("../assets/zustand.jpg")}
        style={{ width: 400, height: 200, marginBlock: 40 }}
      />
    </View>
  );
};

export default ImageComponents;
