import { Pressable, View, Text } from "react-native";

function CategoryGridTile(props) {
  return (
    <View>
      <Pressable>
        <Text>{props.title}</Text>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
