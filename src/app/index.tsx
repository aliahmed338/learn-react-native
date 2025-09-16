import { View } from "react-native";
import React from "react";
import "../../index.css";

// import ButtonA from "../components/Button";
// import ImageComponents from "../components/ImageComponents";
// import Car from "../components/Car";
import Todo from "../components/Todo";

const index = () => {
  return (
    <View>
      {/* <Text>ali ahmed ali</Text>
      <ButtonA />
      <ImageComponents />
      <Text style={{ marginInline: 50 }}>Ali ahmed</Text>
      <Text style={{ marginInline: 50 }}>
        My name is ali ahed and i love coding
      </Text>
      <Button title="press me" /> */}
      {/* <Car /> */}
      <Todo />
    </View>
    // <View className="flex-1 my-80 items-center justify-center bg-white">
    //   <Text className="text-xl font-bold text-blue-500">
    //     Welcome to Nativewind!ssssss
    //   </Text>
    // </View>
  );
};

export default index;
