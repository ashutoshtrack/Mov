import React, { Component } from "react";
import { Button } from "react-native";
import { createStackNavigator, HeaderBackButton } from "react-navigation";
import HomeScreen from "./src/components/HomeScreen";
import ProfileScreen from "./src/components/ProfileScreen";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const App = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Button title="Back" onPress={() => navigation.goBack()} />,
      title: "Movie Info",
      headerStyle: {
        backgroundColor: "beige",
        borderWidth: 1,
        borderBottomColor: "white",
        paddingLeft: 6
      }
    })
  }
});
export default App;
