import React, { Component } from "react";
import * as Font from "expo-font";
import AppContainer from "./src/shared/navigators";
import NavigationService from "./src/shared/NavigationService";
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts
} from "react-native-paper";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "gotham-medium",
      fontWeight: "normal"
    },
    medium: {
      fontFamily: "gotham-bold",
      fontWeight: "normal"
    },
    light: {
      fontFamily: "helvetica-neue",
      fontWeight: "normal"
    },
    thin: {
      fontFamily: "helvetica-neue",
      fontWeight: "normal"
    }
  }
};

const theme = {
  ...DefaultTheme,
  mode: "exact",
  colors: {
    ...DefaultTheme.colors,
    primary: "#26263d",
    accent: "tomato"
  },
  fonts: configureFonts(fontConfig)
};

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      "gotham-medium": require("./src/assets/fonts/Gotham-Medium.otf"),
      "gotham-bold": require("./src/assets/fonts/Gotham-Bold.otf"),
      "helvetica-neue": require("./src/assets/fonts/HelveticaNeueLTStd-Cn.otf")
    });
  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}></AppContainer>
      </PaperProvider>
    );
  }
}
