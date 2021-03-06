//import libraries for making a compoenet
import React from "react";
import { Text, View } from "react-native";

//make a comp

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "beige",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 7,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    color: "teal"
  }
};

//mak avail to as a part
export default Header;
