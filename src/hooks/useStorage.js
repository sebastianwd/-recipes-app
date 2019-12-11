import { AsyncStorage } from "react-native";

export const useStorage = () => {
  const get = async key => {
    try {
      const item = await AsyncStorage.getItem(key);
      return JSON.parse(item);
    } catch (e) {
      console.log(e);
      alert("No se pudo acceder al storage");
    }
  };

  const set = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
      alert("No se pudo acceder al storage");
    }
  };

  const remove = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
      alert("No se pudo acceder al storage");
    }
  };

  const storage = {
    get,
    set,
    remove
  };

  return { storage };
};
