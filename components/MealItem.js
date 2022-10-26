import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (
          styles.button, pressed ? styles.buttonPressed : null
        )}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.detailItemContainer}>
            <Text style={styles.detailItem}>{props.duration}(MIN)</Text>
            <Text style={styles.detailItem}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: { overflow: "hidden", borderRadius: 8 },
  image: { width: "100%", height: 200 },
  title: { textAlign: "center", fontWeight: "bold", fontSize: 18 },
  detailItemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: { marginHorizontal: 4, fontSize: 12 },
  buttonPressed: {
    opacity: 0.25,
  },
});
