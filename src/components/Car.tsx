import { View, Text, Image, Button } from "react-native";

const Car = () => {
  const price = 2000000;
  const imageWidth = 300;
  const imageHeight = 300;
  const carName = "Lambo";
  const carRatings = 3.5;
  const carDescription = "Here is some random car description";

  return (
    <View
      style={{
        width: "90%",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 100,
        margin: "auto",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      {/* https://unsplash.com/photos/red-lamborghini-gallardo-uwrTwMaxVR4 */}
      <Image
        source={require("../assets/image.jpg")}
        style={{ width: imageWidth, height: imageHeight, borderRadius: 200 }}
      />
      <Text>{carName}</Text>
      <Text>{carRatings}</Text>
      <Text>{carDescription}</Text>
      <Text>{price}</Text>
      <Button title="Add to cart" />
    </View>
  );
};

export default Car;
