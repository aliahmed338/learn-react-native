import { Button } from "react-native";
import React from "react";

const ButtonA = () => {
  return <Button title="Alert" onPress={() => alert("you press the button")} />;
};

export default ButtonA;
