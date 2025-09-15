import { View, Text, Button } from "react-native";
import React from "react";
import ButtonA from "../components/Button";
import ImageComponents from "../components/ImageComponents";
import Car from "../components/Car";
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
  );
};

export default index;
