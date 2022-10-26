import { View, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen(props) {
  function renderCategoryItems(itemData) {
    function onPressHandler() {
      props.navigation.navigate("MealOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
