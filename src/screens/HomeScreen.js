import React from "react";
import { Text, TextInput, Searchbar } from "react-native-paper";
import SafeAreaView from "react-native-safe-area-view";
import { FlatList, StyleSheet, View, ImageBackground } from "react-native";
import { Entradas, Sopas, Postres, Platos_Fondo } from "../shared/data";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import NavigationService from "../shared/NavigationService";

const FoodItem = ({ item }) => {
  const handlePress = () => {
    NavigationService.navigate("Recipe", { item });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{ flexDirection: "column" }}>
        <View style={styles.imgContainer}>
          <ImageBackground
            source={{ uri: item.image }}
            style={{
              width: "100%",
              height: "100%"
            }}
            resizeMode={"contain"}></ImageBackground>
        </View>
        <Text style={{ textAlign: "center", marginRight: 10 }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const HomeScreen = props => {
  const handleFocus = () => {
    NavigationService.navigate("Filter");
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Searchbar
          placeholder='Buscar'
          onFocus={handleFocus}
          style={styles.input}
        />
        <Text>Entradas</Text>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            style={{ width: "95%" }}
            horizontal={true}
            data={Entradas}
            renderItem={FoodItem}
            keyExtractor={item => String(item.id)}
          />
          <Feather
            name={"chevrons-right"}
            size={24}
            style={{ alignSelf: "center" }}></Feather>
        </View>
        <Text>Sopas</Text>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            style={{ width: "95%" }}
            horizontal={true}
            data={Sopas}
            renderItem={FoodItem}
            keyExtractor={item => String(item.id)}
          />
          <Feather
            name={"chevrons-right"}
            size={24}
            style={{ alignSelf: "center" }}></Feather>
        </View>
        <Text>Platos de Fondo</Text>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            style={{ width: "95%" }}
            horizontal={true}
            data={Platos_Fondo}
            renderItem={FoodItem}
            keyExtractor={item => String(item.id)}
          />
          <Feather
            name={"chevrons-right"}
            size={24}
            style={{ alignSelf: "center" }}></Feather>
        </View>
        <Text>Postres</Text>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            style={{ width: "95%" }}
            horizontal={true}
            data={Postres}
            renderItem={FoodItem}
            keyExtractor={item => String(item.id)}
          />
          <Feather
            name={"chevrons-right"}
            size={24}
            style={{ alignSelf: "center" }}></Feather>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imgContainer: {
    alignSelf: "center",
    width: 110,
    height: 110,
    marginRight: 10
  },
  input: {
    marginHorizontal: 10,
    marginTop: 18,
    marginBottom: 10,
    height: 40
  }
});
